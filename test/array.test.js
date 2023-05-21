test("array simple", () => {
    const names = ["Ardi", "Anto", "Rannu"];
    expect(names).toContain("Ardi"); //expect value array memiliki item int/string
    expect(names).toEqual(["Ardi", "Anto", "Rannu"]);
})

test("array object", () => {
    const person = [{name: "Ardi"}, {name: "Rannu"}];
    expect(person).toContainEqual({
        name: "Ardi"
    }); //expect value array memiliki item object

    expect(person).toEqual([
        {name: "Ardi"}, 
        {name: "Rannu"}
    ]);
})