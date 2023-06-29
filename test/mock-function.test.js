import { calculate, calculateAndReturn } from "../src/sum";

test("test calculate", () => {
    const callback = jest.fn(); //mock function

    // pemangilan pertama
    calculate([10, 10 , 10], callback); //mock function membutuhkan callback

    // pemanggilan kedua
    calculate([10, 10 , 10, 10, 10], callback);

    expect(callback.mock.calls.length).toBe(2); //expect pemanggilan callback sebanyak 2 kali
    expect(callback.mock.calls[0][0]).toBe(30); 
    //expect pemanggilan callback pertama dan parameter pertamanya bernilai 30

    expect(callback.mock.calls[1][0]).toBe(50); 
    //expect pemanggilan callback kedua dan parameter pertamanya bernilai 50

})

test("test mock return value", () => {
    const callback = jest.fn(); //mock function

    callback.mockReturnValueOnce(40); //mock return value pemanggilan pertana sekali
    callback.mockReturnValueOnce(80); //mock return value pemanggilan kedua sekali

    expect(calculateAndReturn([10, 10], callback)).toBe(40);
    expect(calculateAndReturn([10, 10, 10, 10], callback)).toBe(80);

    expect(callback.mock.results[0].value).toBe(40);
    //expect result pemanggilan callback pertama return value 40

    expect(callback.mock.results[1].value).toBe(80);
    //expect result pemanggilan callback kedua return value 80

})

// jika mock return value memiliki logic maka gunakan mock implementation
test("test mock implementation", () => {
    const callback = jest.fn(); //mock function

    callback.mockImplementation((total) => { //mock implementation pemanggilan berkali2
        return total * 2;
    })

    expect(calculateAndReturn([10, 10, 10], callback)).toBe(60);
    expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);

    expect(callback.mock.results[0].value).toBe(60);
    //expect result pemanggilan callback pertama return value 60

    expect(callback.mock.results[1].value).toBe(100);
    //expect result pemanggilan callback kedua return value 100

})