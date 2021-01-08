interface DBI<T>{
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}
// 定义一个操作 mysql 数据库的类   tip: 实现泛型接口 类也要是泛型类
export class MySqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.info(info)
        return true
    }
    update(info: T, id: number): boolean {
        return true
    }
    delete(id: number): boolean {
        return true
    }
    get(id: number): any[] {
        return []
    }
}

export class MsSqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info)
        return true
    }
    update(info: T, id: number): boolean {
        return true
    }
    delete(id: number): boolean {
        return true
    }
    get(id: number): any[] {
        return []
    }
}

export class MongoDb<T> implements DBI<T>{
    add(info: T): boolean {
        return true
    }
    update(info: T, id: number): boolean {
        return true
    }
    delete(id: number): boolean {
        return true
    }
    get(id: number): any[] {
        return []
    }
}