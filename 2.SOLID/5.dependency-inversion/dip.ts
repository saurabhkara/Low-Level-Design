// Dependency Inversion Principle

// In below there User controller is dependent on UserRepo and UserRepo is dependent on UserService
//Incase we need change repo we will need to change UserService too. That's problem
class UserController {

    constructor(private userService: UserService) {
    }
    save() {
        this.userService.save()
    }
}

class UserService {
    constructor(private userRepo: UserRepo) {
    }
    save() {
        userRepo.save()
    }
}

class UserRepo {
    save() {
        console.log("UserRepo saving data into database")
    }
}

const userRepo = new UserRepo();
const userService = new UserService(userRepo)
const userController = new UserController(userService);

userController.save()



// Here is Dependency inversion principle applied code.


interface IRepository {
    save(): void
}

interface IUserService {
    save(): void
}

interface IUserController {
    save(): void
}

class UserController1 implements IUserController {

    constructor(private userService: IUserService) {
    }
    save() {
        this.userService.save()
    }
}

class UserService1 implements IUserService {
    constructor(private repository: IRepository) {
    }
    save() {
        this.repository.save()
    }
}

class UserRepo1 implements IRepository {
    save() {
        console.log("UserRepo1 saving data into database")
    }
}

const userRepo1 = new UserRepo1();
const userService1 = new UserService1(userRepo1)
const userController1 = new UserController1(userService1);

userController1.save()