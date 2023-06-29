import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";


jest.mock("../src/user-repository.js"); //mock module user repository, otomatis class yg ada dimodul ikut termock

//ketika UserRepository dicall maka sebenarnya ini adalah class yg sudah di mock
const repository = new UserRepository();
const service = new UserService(repository);

test("test mock user save", () => {
    const user = {
        id: 1,
        name: "Ardi"
    };

    service.save(user);

    // expect repository.save pernah dipanggil
    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);

});

test("test mock class findById", () => {
    const user = {
        id: 1,
        name: "Ardi"
    };

    repository.findById.mockReturnValueOnce(user); //mock return value once

    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
});

test("test mock class findAll", () => {
    const users = [
        {
            id: 1,
            name: "Ardi"
        },
        {
            id: 2,
            name: "Rannu"
        }
    ];

    repository.findAll.mockReturnValueOnce(users); //mock return value once
    expect(service.findAll()).toEqual(users);
    expect(repository.findAll).toHaveBeenCalled();
});