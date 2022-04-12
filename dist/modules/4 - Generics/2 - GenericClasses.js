"use strict";
class DataStorage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("John");
textStorage.addItem("Paul");
textStorage.removeItem("John");
console.log(textStorage.getItems());
