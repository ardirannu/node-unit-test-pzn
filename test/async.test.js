import { sayHelloAsync } from "../src/async";

// cukup menambahkan async pada test parameter
test("test async function", async () => {
    await expect(sayHelloAsync("Ardi")).resolves.toBe("Hello Ardi"); //expect promise sukses
    await expect(sayHelloAsync()).rejects.toBe("Name is empty"); //expect promise gagal
})