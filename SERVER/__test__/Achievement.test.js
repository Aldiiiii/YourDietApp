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
describe("ACHIEVEMENTS ",()=>{
describe("Post /achievements ", () => {
  it("succcess", async () => {
    const bodyData = {
      currentWeight: 60,
    };
    const respond = await request(app)
      .post("/achievements")
      .set("access_token", validToken)
      .send(bodyData);
    expect(respond.status).toBe(201);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty(
      "message",
      "Berhasil Menambahkan Achievement"
    );
  });
  it("current weight null", async () => {
    const bodyData = {
      currentWeight: '',
    };
    const respond = await request(app)
      .post("/achievements")
      .set("access_token", validToken)
      .send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty(
      "message",
      "Current Weight is required"
    );
  });
});
describe("GET /achievements ", () => {
  it(" success", async () => {
    try {
      const respond = await request(app)
        .get("/achievements")
        // .send(bodyData);
        .set("access_token", validToken);
      expect(respond.status).toBe(200);
      expect(respond.body).toBeInstanceOf(Array);
      //   expect(respond.body).toHaveProperty("access_token", expect.any(String));
    } catch (error) {}
  });
});
})
