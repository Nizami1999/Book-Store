export default class BookstoreService {
  getBooks = () => {
    return [
      {
        id: 1,
        name: "Harry Potter 7",
        author: "Someone",
        price: 32,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51cNS7FdnkL.jpg",
      },
      {
        id: 2,
        name: "BOOM 2",
        author: "Someone2",
        price: 42,
        image:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1311999268l/1738185.jpg",
      },
      {
        id: 3,
        name: "Yeah AE 1",
        author: "Someone3",
        price: 132,
        image:
          "http://bookgraphics.files.wordpress.com/2012/04/usa-web.jpg?w=584",
      },
    ];
  };
}
