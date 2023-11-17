const bcrypt = require("bcryptjs");
const { User } = require("../models");
const {createToken,verifyToken} = require('../helpers/jwt')
const axios = require("axios");
class UserController {
  static async register(req, res, next) {
    try {
      let calorieLimit = 0;
      let {
        gender,
        username,
        email,
        password,
        weight,
        height,
        dateBirth,
        activityLevel,
        extra,
        targetWeight,
      } = req.body;
      let dob = new Date(dateBirth);
      let month_diff = new Date() - dob.getTime();
      let age_dt = new Date(month_diff);
      let year = age_dt.getUTCFullYear();
      let age = Math.abs(year - 1970);
      let activitylevel = "";
      if (activityLevel == 1) {
        activitylevel = "level_1";
      } else if (activityLevel == 2) {
        activitylevel = "level_2";
      } else if (activityLevel == 3) {
        activitylevel = "level_3";
      } else if (activityLevel == 4) {
        activitylevel = "level_4";
      } else if (activityLevel == 5) {
        activitylevel = "level_5";
      } else if (activityLevel == 6) {
        activitylevel = "level_6";
      }
      const options = {
        method: "GET",
        url: "https://fitness-calculator.p.rapidapi.com/dailycalorie",
        params: {
          age: age,
          gender: gender,
          height: height,
          weight: weight,
          activitylevel: activitylevel,
        },
        headers: {
          "X-RapidAPI-Key":
            "665ed1e6f9msh6d85de1ba97e8adp1c24b6jsn6a9bcfc0b7f8",
          "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
        },
      };
      try {
        const { data } = await axios.request(options);
        calorieLimit = Math.round(data.data.BMR);
        console.log(calorieLimit);
      } catch (error) {
        next(error);
      }
      let user = await User.create({
        gender,
        username,
        email,
        password,
        weight,
        height,
        dateBirth,
        activityLevel,
        extra,
        calorieLimit,
        targetWeight,
      });
      return res
        .status(201)
        .json({
          gender: user.gender,
          username: user.username,
          email: user.email,
          weight: user.weight,
          height: user.height,
          extra: user.extra,
          calorieLimit: user.calorieLimit,
          targetWeight: user.targetWeight,
        });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "emailpasswordempty" };
      }
      let user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "invalid_email_password" };
      }
      const isValid = bcrypt.compareSync(password, user.password);
      if (!isValid) {
        throw { name: "invalid_email_password" };
      }

          const payload = {id:user.id,
        gender: user.gender,
        username: user.username,
        email: user.email,
        weight: user.weight,
        height: user.height,
        extra: user.extra,
        calorieLimit: user.calorieLimit,
        targetWeight: user.targetWeight, };
          const token = createToken(payload, process.env.SECRET);
          return res.status(200).json({ access_token: token});
    } catch (error) {
      next(error);
    }
  }
}
// function test() {
//   let dob = new Date('2020-01-01')
//   let month_diff= new Date() - dob.getTime();
//   let age_dt = new Date(month_diff)
//   let year = age_dt.getUTCFullYear()
//   let age = Math.abs(year - 1970);
// console.log(age);
// }
// test();
module.exports = UserController;
