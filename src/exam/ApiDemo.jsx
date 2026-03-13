import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiDemo() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {

    try {

      const response = await axios.get(
        "https://dummy-json.mock.beeceptor.com/posts"
      );

      setPosts(response.data);

    } catch (error) {

      console.log("Error fetching data", error);

    }
  };

  return (
    <div>

      <h2>Posts Data</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Comments</th>
          </tr>
        </thead>

        <tbody>

          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.comment_count}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ApiDemo;
