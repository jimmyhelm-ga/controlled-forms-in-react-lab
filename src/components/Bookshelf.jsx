// src/components/Bookshelf.jsx

import React, { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Oliver Twist', author: 'Charles Dickens' },
    { title: 'David Copperfield', author: 'Charles Dickens' },
    { title: 'A Tale of Two Cities', author: 'Charles Dickens' },
    { title: 'Great Expectations', author: 'Charles Dickens' },
    { title: 'Bleak House', author: 'Charles Dickens' },
    { title: 'Little Dorrit', author: 'Charles Dickens' },
    { title: 'Gigi', author: 'Colette' },
    { title: 'Chéri', author: 'Colette' },
    { title: 'The Vagabond', author: 'Colette' },
    { title: 'Madame Bovary', author: 'Gustave Flaubert' },
    { title: 'Sentimental Education', author: 'Gustave Flaubert' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div className="bookCard" key={index}>
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;