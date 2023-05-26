import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
 

  useEffect(() => {
  
    const fetchUpdatedBlogs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/blogs/');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching updated blogs:', error);
      }
    };

    const interval = setInterval(fetchUpdatedBlogs, 1000); // Fetch updated blogs every 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component is unmounted
    };
  }, []);

  const getShortContent = (content) => {
    const words = content.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return content;
  };

  return (
    <div>
      <h1>Artizence blogs</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <pre>{getShortContent(blog.text)}</pre>
          <p>Author: {blog.author}</p>
          <Link to={`/blogs/${blog.id}`} className="btn btn-primary">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
