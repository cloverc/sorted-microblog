import React, { useEffect, useState } from 'react';
import getPosts from '../../services/posts';
import Post from './Post';
import CreatePost from './CreatePost';

const Lister = () => {
  const [loading, setLoading] = useState(true);
  const [allPosts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setLoading(false);
      setPosts(data);
    });
  }, []);

  const onDeletePost = (id) => {
    setPosts(allPosts.filter((i) => i.id !== id));
  };

  const onCreatePost = (post) => {
    // TODO: implement
  };

  return (
    <div className="postList">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <span>
          {allPosts.length > 0 ? (
            <ul>
              {allPosts.map((post) => (
                <Post
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  author={post.author}
                  onDelete={() => onDeletePost(post.id)}
                />
              ))}
            </ul>
          ) : (
            <>
              <p>No posts available...</p>
            </>
          )}
          <div>
            <CreatePost />
          </div>
        </span>
      )}
    </div>
  );
};

export default Lister;
