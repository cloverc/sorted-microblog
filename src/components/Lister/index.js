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

  // return <div>TODO - wire up lister component</div>;

  const onDeletePost = (id) => {
    // TODO: implement
  };

  const onCreatePost = (post) => {
    // TODO: implement
  };

  // TODO: implement render method, using Post and CreatePost e.g.
  //				...
  // 				<div className="postList">
  //					...
  //					<CreatePost />
  // 				</div>
  //				...

  return (
    <div className="postList">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <span>
          {allPosts.length > 0 ? (
            <ul>
              {allPosts.map(post => (
                <Post key={post.id} title={post.title} body={post.body} author={post.author} />
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
