import { UserRepository } from "./user-repository";

export class UserService {
    constructor(userRepository){
        //jika user repository ada, maka akan ditambahkan user repositorynya
        if(userRepository){
            this.userRepository = userRepository;
        }else{ //jika tidak, maka buat user repository baru
            this.userRepository = new UserRepository();
        }
    }

    save(user){
        this.userRepository.save(user);
    }

    findById(id){
        return this.userRepository.findById(id);
    }

    findAll(){
        return this.userRepository.findAll();
    }
}