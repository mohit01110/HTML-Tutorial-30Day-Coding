//Create a subclass 'Magazine' that extends the 'Book' class with an additional property issue. Add a method to the 'Magazine' class to get the magazines issue number.

class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }
}

class Magazine extends Book {
  constructor(title, author, year, issue) {
    super(title, author, year)
    this.issue = issue
  }
  getIssueNumber() {
    return this.issue
  }
}

const myMagazine = new Magazine('Magazine1', 'Author1', 2020, 1)
console.log(myMagazine.title)
console.log(myMagazine.author)
console.log(myMagazine.year)
console.log(myMagazine.getIssueNumber())
