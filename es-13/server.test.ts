import supertest from "supertest";
import myApp from "./myApp";

const request = supertest(myApp);

test("GET /cities", async () => {
  const response = await request
    .get("/cities")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(response.body).toEqual([{ city: "Roma" }, { city: "Paris" }]);
});
