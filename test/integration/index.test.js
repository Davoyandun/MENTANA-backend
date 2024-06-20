/* eslint-disable no-undef */
const request = require("supertest");
const server = require("../../src/interfaces/http/server");

describe("GET /integration", () => {
  test("the request is being sent without auth header so it should respond with a 401 status code", async () => {
    const response = await request(server).get("/integration").send();
    expect(response.statusCode).toBe(401);
  });
});