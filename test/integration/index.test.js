/* eslint-disable no-undef */
const request = require("supertest");
const server = require("../../src/interfaces/http/server");

describe("GET /integration", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(server).get("/integration").send();
    expect(response.statusCode).toBe(200);
  });
});