import { getBalance } from "../src/async";

test("mock async function", async () => {
    const from = jest.fn().mockResolvedValueOnce(1000); //mock resolve value sekali
    // mockResolvedValueOnce return promise

    await expect(getBalance("Ardi", from )).resolves.toEqual({
        name: "Ardi",
        balance: 1000,
    });

    await expect(from.mock.calls.length).toBe(1);
    //expect pemanggilan callback sebanyak sekali

    await expect(from.mock.results[0].value).resolves.toBe(1000);
    //expect result pemanggilan callback pertama resolves valuenya 1000
    //karna value dari from adalah promise, gunakan await dan resolves untuk menangkap valuenya
})

// test eror
test("mock async function rejected", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce("rejected");
    
    await expect(getBalance("Ardi", from)).rejects.toBe("rejected");
})