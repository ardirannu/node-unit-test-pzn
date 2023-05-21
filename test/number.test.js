test("numbers", () => {
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3); //expect value lebih besar
    expect(value).toBeGreaterThanOrEqual(3.5); //expect value lebih besaratau sama dengan

    expect(value).toBeLessThan(5); //expect value lebih kecil
    expect(value).toBeLessThanOrEqual(5); //expect value lebih kecil atau sama dengan

    expect(value).toBe(4); 
    expect(value).toEqual(4); 
})