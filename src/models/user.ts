import IUser from "../interfaces/user";

export default class User implements IUser {
    name: string;
    age: number;

    constructor(user: IUser) {
        Object.assign(this, user);
    };
};
