"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDb = exports.MsSqlDb = exports.MySqlDb = void 0;
// 定义一个操作 mysql 数据库的类   tip: 实现泛型接口 类也要是泛型类
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
    }
    MySqlDb.prototype.add = function (info) {
        console.info(info);
        return true;
    };
    MySqlDb.prototype.update = function (info, id) {
        return true;
    };
    MySqlDb.prototype.delete = function (id) {
        return true;
    };
    MySqlDb.prototype.get = function (id) {
        return [];
    };
    return MySqlDb;
}());
exports.MySqlDb = MySqlDb;
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
    }
    MsSqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MsSqlDb.prototype.update = function (info, id) {
        return true;
    };
    MsSqlDb.prototype.delete = function (id) {
        return true;
    };
    MsSqlDb.prototype.get = function (id) {
        return [];
    };
    return MsSqlDb;
}());
exports.MsSqlDb = MsSqlDb;
var MongoDb = /** @class */ (function () {
    function MongoDb() {
    }
    MongoDb.prototype.add = function (info) {
        return true;
    };
    MongoDb.prototype.update = function (info, id) {
        return true;
    };
    MongoDb.prototype.delete = function (id) {
        return true;
    };
    MongoDb.prototype.get = function (id) {
        return [];
    };
    return MongoDb;
}());
exports.MongoDb = MongoDb;
