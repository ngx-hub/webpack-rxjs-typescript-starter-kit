import IUser from "./interfaces/user";
import User from "./models/user";
import { USERS_MOCK } from "./mock/users.list";
import { Emoji } from "./decorators/property.decorator";

const USERS: User[] = USERS_MOCK.map((user: IUser) => new User(user));
console.log(USERS);


function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
};

@Frozen
class IceCream2 {};

console.log(Object.getOwnPropertyDescriptors(IceCream2));

console.log(Object.isFrozen(IceCream2)); // true

@Frozen
class FroYo extends IceCream2 {}; // error, cannont be extended
console.log(Object.isFrozen(FroYo));
console.dir(FroYo);


class IceCream {
    @Emoji()
    public flavor = `vanilla`;
};
console.log(new IceCream().flavor);