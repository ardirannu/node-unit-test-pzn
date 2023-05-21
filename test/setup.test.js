import {sum} from "../src/sum.js";

// dieksekusi sebelum unit test dijalankan
beforeEach(() => {
    console.info("Before Each");
})

// dieksekusi sekali sebelum unit test dijalankan
beforeAll(() => {
    console.info("Before All");
})

// dieksekusi sesudah unit test dijalankan
afterEach(() => {
    console.info("After Each");
})

// dieksekusi sekali sesudah unit test dijalankan
afterAll(() => {
    console.info("After All");
})

// jika code didalamnya async
// beforeEach(async () => {
//     console.info("Before Each");
// })

test("first test", () => {
    expect(sum(10, 5)).toBe(15);
    console.info("First Test");
})

test("second test", () => {
    expect(sum(10, 10)).toBe(20);
    console.info("Second Test");
})