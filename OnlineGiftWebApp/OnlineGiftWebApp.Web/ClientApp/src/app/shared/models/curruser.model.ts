import { Role } from "./role.enum";
export class CurrUser {
    id: string;
    username: string;
    fullName: string;
    email: string;
    token: string;
    role: Role;
}
