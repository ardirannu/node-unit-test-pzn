test("string", () => {
    const name = "Ardianto Rannu";

    expect(name).toBe("Ardianto Rannu"); //expect string
    expect(name).toMatch(/anto/); //expect sesuai regex
})