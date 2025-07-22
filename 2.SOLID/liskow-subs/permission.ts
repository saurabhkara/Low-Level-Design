
class BaseUser {
    getRole() {

    }
}
class User extends BaseUser {
    getAccess() {
        console.log("User access level");
    }

    getRole() {
        console.log("User role")
    }
}


class Admin extends User {
    getAccess(): void {
        console.log("Admin accesss level")
    }

    getRole(): void {
        console.log("Admin role")
    }
}

class Manager extends User {
    getAccess(): void {
        console.log("Manager access level")
    }

    getRole(): void {
        console.log('Manager Role')
    }
}


class Customer extends BaseUser {

    getRole(): void {
        throw new Error("Customer Role")
    }
}

function createUser(user: User) {
    user.getAccess()
}

createUser(new User());
createUser(new Admin());
createUser(new Manager());
// createUser(new Customer())