import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const AuthorOne = (props) => {
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/author/${props.id}`).then((res) => {
      console.log('res.data');
      console.log(res.data);
      setAuthor(res.data);
      console.log(author);
      setLoaded(true);
    })
    .catch((err)=> console.log(err))
  }, []);

  return (
    <div>
      <h2>{author.name}</h2>
      <Link to={'/'}><button>Back</button></Link>
    </div>
  );
};

export default AuthorOne;
