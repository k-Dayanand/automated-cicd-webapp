const request = require("supertest");
const app = require("../app");

describe("Automated CI/CD Web Application", () => {

    test("Home page should load", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });

    test("About page should load", async () => {
        const response = await request(app).get("/about");
        expect(response.statusCode).toBe(200);
    });

    test("Contact page should load", async () => {
        const response = await request(app).get("/contact");
        expect(response.statusCode).toBe(200);
    });

    test("REST API should return status", async () => {
        const response = await request(app).get("/api/status");

        expect(response.statusCode).toBe(200);

        expect(response.body.status).toBe("Running");
    });

});