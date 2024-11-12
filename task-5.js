class Book{
    title;
    author;
    pages;
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
    getsummary(){
        return `Title:[${this.title}],Author: [${this.author}],pages: [${this.pages}]`
    }
}
var book= new Book("wisdom","john-greesha",340);
console.log(book.getsummary());