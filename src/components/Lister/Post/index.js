import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, body, author, onDelete }) => (
  <div className="postView">
    <h2>{title}</h2>
    <p>{body}</p>
    <p>Posted by: {author}</p>
    <button onClick={onDelete}>Delete</button>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default Post;
