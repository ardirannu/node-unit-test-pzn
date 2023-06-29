import { sumAll } from "../src/sum";

const table = [
    [
        [10, 10, 10],
        30 
    ],
    [
        [10, 10, 10, 10, 10],
        50
    ],
    [
        [10, 10, 10, 10, 10, 10, 10],
        70
    ],
];

// unit test untuk function yg sama, tetapi hanya berbeda data dan expect value
// direkomendasikan menggunakan each function
// % untuk menyisipkan string
test.each(table)("test sumAll (%s) should be result %i", (numbers, expected) => {
    expect(sumAll(numbers)).toBe(expected);
})