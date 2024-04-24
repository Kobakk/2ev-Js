const NAME = "localhost",
  PORT = "3000",
  DOMAIN = `http://${NAME}:${PORT}`,
  BOOKS = `${DOMAIN}/books`,
  BOOK = `${DOMAIN}/books/:id`,
  BOOKS_ALL = `${DOMAIN}/books/all`,
  BOOK_RANDOM = `${DOMAIN}/books/random`;

export default {
  NAME,
  DOMAIN,
  BOOKS,
  BOOK,
  BOOKS_ALL,
  BOOK_RANDOM,
};
