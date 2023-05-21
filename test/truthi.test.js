test("truthiness", () => {
    let value = null;
    expect(value).toBeNull(); //expect data null
    expect(value).toBeDefined(); //expect data didefinisikan
    expect(value).toBeFalsy(); //expect data false

    value = undefined;
    expect(value).toBeUndefined(); //expect data tidak didefinisikan
    expect(value).toBeFalsy();

    value = "Ardi";
    expect(value).toBeTruthy();  //expect data bersifat true
})