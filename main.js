class books {
    #tittle
    #author
    constructor(tittle, author, pages) {
        this.#tittle = tittle;
        this.#author = author;
        this.pages = pages;
    }
    read () {
        this.pages++;
        console.log ( `Вы начали читать с  ${this.pages} страницы , теперь вы на странице : ${++this.pages} `);

    }
}

class Novel extends books {
    constructor(tittle, author, pages,genre) {
        super(tittle, author, pages);
        this.genre = genre;
    }
    read() {
        console.log ( `Вы начали читать с  ${this.pages} страницы , теперь вы на странице : ${++this.pages} `);
        console.log(`Жанр книги  : ${this.genre}`);
    }
}
class BookForAudience extends Novel {
    constructor(tittle, author, pages, genre ,targetAudience ) {
        super(tittle, author, pages, genre );
        this.targetAudience = targetAudience;
    }

    read() {
        console.log ( `Вы начали читать с  ${this.pages} страницы , теперь вы на странице : ${++this.pages} `);
        console.log(`Эта книга предназначена для: ${this.targetAudience}`);
    }
}
class TranslatedBook extends BookForAudience {
    constructor(tittle,author,pages,genre,targetAudience,language) {
        super(tittle, author, pages, genre ,targetAudience );
        this.language = language;
    }
    read() {

        console.log ( `Вы начали читать с  ${this.pages} страницы , теперь вы на странице : ${++this.pages} `);
        console.log(`Эта книга Harry Potter  на ${this.language}`);
    }
}


const myBook =  new Novel ("Восхитительная ведьма", "Анна Джейн",3 , "romantic", "Teen", "Русском");
const myBook2 = new Novel("Гордость и предупреждение", "Джейн Остин",7, "classic", "All", "Русском");
const myBook3 = new BookForAudience("Анна Каренина", "Лев Толстой", 9, "classic" , "всех", "Русском")
const myBook4 = new TranslatedBook("Harry Potter", "J.K. Rowling", 8, "fantasy","всех","English");


console.log(myBook);
console.log(myBook2);
console.log(myBook3);
console.log(myBook4);

myBook.read()
myBook2.read()
myBook3.read()
myBook4.read()

