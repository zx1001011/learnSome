import {MySqlDb} from '../db/db'

class User {
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    constructor(id: number, username: string, password: string) {
        this.id = id
        this.username = username
        this.password = password
    }
}

let UserModel = new MySqlDb<User>() // 类作为参数来约束数据传入的类型

export { User, UserModel }