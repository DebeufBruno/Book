// maak een class van boeken waar je een titel, auteur en aantal pagina's in kan zetten.
// maak een class van bibliotheek die een owner heeft en waar je de totale aantal pagina's kan opvragen, de totale aantal boeken en de gemiddelde aantal pagina's per boek.
// je kan ook een boek toevoegen, en een boek verwijderen op basis van de titel.
// De title is benoemd zoals hieronder, de author is een random string en de pages is een random nummer tussen 50 en 1000.
// Voorbeeld:
// Library {
//   owner: 'Jorne',
//   books: [
//     Book { title: 'title-1', author: 'szh7i6vh3fp', pages: 836 },
//     Book { title: 'title-2', author: '7yl4xwhk35j', pages: 170 },
//     Book { title: 'title-4', author: 'romaywrg3w', pages: 756 },
//     Book { title: 'title-5', author: 'wfa463vcheb', pages: 439 },
//     Book { title: 'title-6', author: 'nz5ycbi7ifb', pages: 954 },
//     Book { title: 'title-7', author: 'v6m7v5fx9k', pages: 417 },
//     Book { title: 'title-8', author: 'ibdz3dynf8j', pages: 748 },
//     Book { title: 'title-9', author: 'wzcicfyefaq', pages: 618 },
//     Book { title: 'title-10', author: '5t4h5j96vda', pages: 655 }
//   ]
// }
// There are 10 books in the library of Jorne
// The average pages in the libaray are 577.7 pages
// The total of pages are 4861
// Upload deze github en bezorg mij de link via slack.

// makes a random string
function getRandomStr() {
  return Math.random().toString(36).substring(2);
}

function getRandomPages(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Books {
  constructor() {
    this.bookList = [];
  }

  // boek toevoegen
  addBook(paramTitle, paramAuthor, paramNrPages) {
    const book = {
      title: paramTitle,
      author: paramAuthor,
      nrPages: paramNrPages,
    };

    this.bookList.push(book);
  }

  // boek verwijderen op basis van titel
  deleteBook(title) {
    const obj = this.bookList.find((x) => x.title === title);
    const idx = this.bookList.indexOf(obj);
    this.bookList.splice(idx, 1);
  }
}

class Library {
  constructor(paramOwner) {
    this.owner = paramOwner;
    this.books = new Books();
  }
  // boek toevoegen
  addBook(paramTitle, paramAuthor, paramNrPages) {
    this.books.bookList.addBook(paramTitle, paramAuthor, paramNrPages);
  }
  // boek verwijderen via titel
  deleteBook(title) {
    this.books.bookList.deleteBook(title);
  }

  // alle pagina's van alle boeken opvragen
  numberOfPages() {
    const sumPages = this.books.bookList.reduce(function (total, curr) {
      return (total += curr.nrPages);
    }, 0);
    return `The total of pages are ${sumPages} `;
  }

  // totaal aantal boeken opvragen
  numberOfBooks() {
    return `There are ${this.books.bookList.length} books in the library of ${this.owner}`;
  }

  // gemiddeld aantal pagina's per boek
  averagePages() {
    const sumPages = this.books.bookList.reduce(function (total, curr) {
      return (total += curr.nrPages);
    }, 0);

    const average = (sumPages / this.books.bookList.length).toFixed(1);
    return `The average pages in the libaray are ${average} pages`;
  }
}

// ****  Class testen ***

const lib = new Library("Bruno");

// 10 boeken toevoegen
for (let i = 1; i <= 10; i++) {
  lib.books.addBook("title-" + i, getRandomStr(), getRandomPages(50, 1000));
}

// Boek wissen, er blijven er 9 over
lib.books.deleteBook("title-7");

//console.log(lib);
console.log(JSON.stringify(lib, null, 2));
//console.log(lib.books);
console.log(lib.numberOfBooks());
console.log(lib.numberOfPages());
console.log(lib.averagePages());
