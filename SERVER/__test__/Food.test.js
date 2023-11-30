const request = require("supertest");
const app = require("../app");
const axios = require("axios");
const { sequelize } = require("../models");
const bc = require("bcryptjs");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");
let historyIdTest = 0
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
  const respond = await request(app)
    .get("/histories/now")
    .set("access_token", validToken);
  historyIdTest = respond.id
});
afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  });
  // await sequelize.queryInterface.bulkDelete("Histories", null, {
  //   restartIdentity: true,
  //   cascade: true,
  //   truncate: true,
  // });
});
describe("Foods ", () => {
  describe("Get /foods ", () => {
    it("succcess", async () => {
      const respond = await request(app)
        .get("/foods")
        .set("access_token", validToken);
      expect(respond.status).toBe(200);
      expect(Array.isArray(respond.body)).toBeTruthy();
    });
    it("succcess with filter", async () => {
      const respond = await request(app)
        .get("/foods?filter=Ayam")
        .set("access_token", validToken);
      expect(respond.status).toBe(200);
      expect(Array.isArray(respond.body)).toBeTruthy();
    });
    it("invalid Token", async () => {
      const respond = await request(app)
        .get("/foods")
        .set("access_token", "adafDASFDASF54254^@@^#esfgsfdgfsdgdfsgdf");
      expect(respond.status).toBe(401);
      expect(respond.body).toBeInstanceOf(Object);
      expect(respond.body).toHaveProperty("message", "Invalid Token");
    });
  });
  describe("Post /foods ", () => {
    it("succcess", async () => {
      const body = {
        food: "Nasi Padang",
      };
      const respond = await request(app)
        .post("/foods/1")
        .set("access_token", validToken)
        .send(body);
      // expect(respond.status).toBe(201);
      // expect(respond.body).toBeInstanceOf(Object);
      // expect(respond.body).toHaveProperty("message", "Food has been inputed");
      // console.log(respond)
    }, 10000);
    it("food null", async () => {
      const body = {
        food: "",
      };
      const respond = await request(app)
        .post("/foods/1")
        .set("access_token", validToken)
        .send(body);
      expect(respond.status).toBe(400);
      expect(respond.body).toBeInstanceOf(Object);
      expect(respond.body).toHaveProperty("message", "Food is required");
    });
    it("food gak jelas", async () => {
      const body = {
        food: "asdsadsadasdqwrfqw",
      };
      const respond = await request(app)
        .post("/foods/1")
        .set("access_token", validToken)
        .send(body);
      // expect(respond.status).toBe(400);
      // expect(respond.body).toBeInstanceOf(Object);
      // expect(respond.body).toHaveProperty("message", "Food is required");
    });
    it("History not found", async () => {
      const body = {
        food: "Mie Ayam",
      };
      const respond = await request(app)
        .post("/foods/1000")
        .set("access_token", validToken)
        .send(body);
      expect(respond.status).toBe(404);
      expect(respond.body).toBeInstanceOf(Object);
      expect(respond.body).toHaveProperty("message", "History Is Not Found");
    });
    it("invalid Token", async () => {
      const body = {
        food: "Mie Ayam",
      };
      const respond = await request(app)
        .post("/foods/1")
        .set("access_token", "adafDASFDASF54254^@@^#esfgsfdgfsdgdfsgdf")
        .send(body);
      expect(respond.status).toBe(401);
      expect(respond.body).toBeInstanceOf(Object);
      expect(respond.body).toHaveProperty("message", "Invalid Token");
    });
  });
});
