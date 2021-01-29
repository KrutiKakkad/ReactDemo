import { IUser } from "models/user";
import { mockData } from "../utility";

export class User{
    static getUser=():IUser[]=>{
        return mockData;
    }
}