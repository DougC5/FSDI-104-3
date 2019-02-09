
function userInput(selection){

    if (input === 1 || input === 2 || input === 3){

        if (selection === 1){
            let out = prompt(library.showTitles() + 'What is the nme of the book you would like to check out?');
            library.checkOut(out);
            mainScreen();

        } else if (selection === 2) {
            let addNewBook = prompt('What is the nme of the book you would like to add to the library?');
            library.addBook(addNewBook);
            mainScreen();

        }

    }else {
        alert('Please enter the number 1, 2 or 3');
        mainScreen();
    }
}

function mainScreen(){
    input = parseInt(prompt('Avalable Books: \n' + library.showTitles() + '\n 1 - Check out a book \n 2 - Add a book to the library \n 3 - Quit'));
    userInput(input);

}

class Book {
    constructor(name){
        this.name = name;
    }

}

class Library  extends Book{
    constructor() {
        super(name);
        this.list =[];
    }
    addBook(title) {

        this.list.push(title);
        alert(title + ' added to Library');
    }

    checkOut(title){
        this.list = this.list.filter(list => list !== title);
        alert(title + ' has been checked out');
    }

    showTitles() {
        let books = [];
        this.list.forEach(function(title){
            books = (books + title + '\n');
        });
        return books;
    }
}

const book1 = new Book('Hamlet');
const book2 = new Book('War and Peace');
const book3 = new Book('21 Ways to die');
const library = new Library();

library.addBook(book1.name);
library.addBook(book2.name);
library.addBook(book3.name);

let input = 0;

mainScreen();
userInput(input);
