import { sum } from "../src/sum";

// nama file harus ekstensi .test.js sesuai aturan dari jest
//parameter pertama nama unit testnya
// parameter kedua function unit testnya

test("sum function 1", () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
});

test("sum function 2", () => {
    const result = sum(1, 2);

    expect(result).toBe(3); //matchers atau ekspektasi

});