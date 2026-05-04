import supertest from "supertest";
import app from "./app";

const request = supertest(app);

describe('GET /', () => {
    test('return 200', async () => {
        await request.get('/').expect(200).expect('Hello, World!\n');
    });
});