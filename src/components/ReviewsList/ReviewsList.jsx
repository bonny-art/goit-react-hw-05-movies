import React from 'react';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, rating, content }) => (
        <li key={id}>
          <h2>{author}</h2>
          <p>Author rating: {rating}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
