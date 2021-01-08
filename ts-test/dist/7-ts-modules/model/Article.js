"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModel = exports.Article = void 0;
var db_1 = require("../db/db");
var Article = /** @class */ (function () {
    function Article(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    return Article;
}());
exports.Article = Article;
var ArticleModel = new db_1.MsSqlDb(); // 类作为参数来约束数据传入的类型
exports.ArticleModel = ArticleModel;
