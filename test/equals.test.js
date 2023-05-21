test("test toBe", () => {
    let name = "Ardi";
    let hello = `Hello ${name}`;

    //equal matcher toBe digunakan untuk value yg bukan object
    expect(hello).toBe("Hello Ardi");
})

test("test toEquals", () => {
    let person = {
        id: 1,
        name: "Ardi",
    };

    Object.assign(person, {alamat: "Tamalanrea"});

    // equal matcher toEqual digunakan untuk value object
    expect(person).toEqual(
        {
            id: 1,
            name: "Ardi",
            alamat: "Tamalanrea",
        }
    );
})