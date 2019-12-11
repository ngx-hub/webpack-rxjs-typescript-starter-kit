import IUser from "./interfaces/user";
import User from "./models/user";
import { USERS_MOCK } from "./mock/users.list";

const USERS: User[] = USERS_MOCK.map((user: IUser) => new User(user));
console.log(USERS);
