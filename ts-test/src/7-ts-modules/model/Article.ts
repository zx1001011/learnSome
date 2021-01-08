import {MsSqlDb} from '../db/db'

class Article {
    id: number | undefined;
    title: string | undefined;
    author: string | undefined;
    constructor(id: number, title: string, author: string) {
        this.id = id
        this.title = title
        this.author = author
    }
}

let ArticleModel = new MsSqlDb<Article>() // 类作为参数来约束数据传入的类型

export { Article, ArticleModel }