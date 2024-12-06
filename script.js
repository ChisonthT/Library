const mylibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(book){
    mylibrary.push(book);
};

function displayLibrary(){
    let i = 0;

    let table = document.getElementById("myTable");

    while(i < mylibrary.length){

        let newRow = table.insertRow(-1);

        let titleCell = newRow.insertCell(0);      
        let authorCell = newRow.insertCell(1);
        let pagesCell = newRow.insertCell(2);
        let readCell = newRow.insertCell(3);

        titleCell = titleCell.innerHTML = mylibrary[i].title;      
        authorCell = authorCell.innerHTML = mylibrary[i].author;      
        pagesCell = pagesCell.innerHTML = mylibrary[i].pages;
        readCell = readCell.innerHTML = mylibrary[i].read;

        i++;
    };
};


let book1 = new Book("The Hobbit", "JRR Tolkien", 295, "yes");
let book2 = new Book("The Lord of the Rings", "JRR Tolkien", 294, "yes");
let book3 = new Book("The Silmarillion", "JRR Tolkien", 294, "yes");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


displayLibrary();

