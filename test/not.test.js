test("not matcher numbers", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6); //expect value tidak lebih besar
    expect(value).not.toBeGreaterThanOrEqual(6.5); //expect value tidak lebih besaratau sama dengan

    expect(value).not.toBeLessThan(3); //expect value tidak lebih kecil
    expect(value).not.toBeLessThanOrEqual(3); //expect value tidak lebih kecil atau sama dengan

    expect(value).not.toBe(5); 
    expect(value).not.toEqual(5); 
})

test("not matcher string", () => {
    const name = "Ardianto Rannu";

    expect(name).not.toBe("Bambang"); //expect string
    expect(name).not.toMatch(/bang/); //expect sesuai regex
})