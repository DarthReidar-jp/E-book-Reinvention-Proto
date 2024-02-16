"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memo = void 0;
class Memo {
    constructor(title = '', content = '', vector) {
        this._id = ''; // MongoDBが自動生成するため、デフォルトで空文字列を設定
        this.title = title;
        this.content = content;
        this.vector = vector;
        this.folderIds = [];
        this.score = 0;
    }
}
exports.Memo = Memo;
