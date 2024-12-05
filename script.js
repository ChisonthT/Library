const mylibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(ubook){
    mylibrary.push(ubook);
};

function displayLibrary(){
    let i = 0;

    while(i < mylibrary.length){
        console.log(mylibrary[i]);
        i++;
    };
};


let book1 = new Book("The Hobbit", "JRR Tolkien", 295, "yes");
let book2 = new Book("The Lord of the Rings", "JRR Tolkien", 294, "yes");
let book3 = new Book("The Silmarillion", "JRR Tolkien", 294, "yes");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


