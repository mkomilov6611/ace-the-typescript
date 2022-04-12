/* 
    Generic Classes
*/

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("John");
textStorage.addItem("Paul");

textStorage.removeItem("John");
console.log(textStorage.getItems());
