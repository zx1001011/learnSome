"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
var db_1 = require("../db/db");
var User = /** @class */ (function () {
    function User(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var UserModel = new db_1.MySqlDb(); // 类作为参数来约束数据传入的类型
exports.UserModel = UserModel;
