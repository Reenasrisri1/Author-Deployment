import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const AuthorNew = (props) => {
  const [name, setName] = useState('');
  const [errs, setErrs] = useState({});
  
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/author', {
        name,
      })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          setErrs(res.data.errors);
        } else {
          console.log(res.data._id);
          navigate(`/`);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Favorite Authors</h1>
      <p>
        <Link to={`/`}>Home</Link>
      </p>
      <h2>Add a new author</h2>
      <form onSubmit={submitForm}>
        <div className="divSection">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          {errs.name ? (
            <span className="err-text">{errs.name.message}</span>
          ) : null}
          <Link to={`/`}>
            <button>Cancel</button>
          </Link>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AuthorNew;
