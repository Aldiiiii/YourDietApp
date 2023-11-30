const request = require("supertest");
const app = require("../app");
const axios = require("axios");
const { sequelize } = require("../models");
const bc = require("bcryptjs");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");
let validToken;
beforeAll(async () => {
  const user = await User.create({
    username: "dikid",
    email: "dikid123fix@mail.com",
    password: bc.hashSync("dikid123fix"),
    gender: "male",
    weight: 60,
    height: 150,
    dateBirth: "1996-05-23",
    activityLevel: 1,
    extra: "",
    targetWeight: 70,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  //passwordnya gak perlu dibawa
  const payload = {
    id: 1,
    username: "dikid",
    email: "dikid123fix@mail.com",
    gender: "male",
    weight: 60,
    height: 150,
    activityLevel: 1,
    extra: "",
    targetWeight: 70,
    calorieLimit: 1538,
    dateBirth: "1997-01-26T00:00:00.000Z",
  };
  validToken = createToken(payload);
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  });
});
describe("Fitnes ",()=>{
describe("get /fitnes/bmi ", () => {
  it("succcess", async () => {
    const respond = await request(app)
      .get("/fitnes/bmi")
      .set("access_token", validToken)
    expect(respond.status).toBe(200);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty(
      "bmiMax"
    );
  });
  it("invalid token", async () => {
    validToken=''
    const respond = await request(app)
      .get("/fitnes/bmi")
      .set("access_token", validToken)
    expect(respond.status).toBe(401);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty(
      "message",'Invalid Token'
    );
  });
});
})
