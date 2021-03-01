import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import { Row, Col } from 'antd';

const AuthorAll = (props) => {
  const [allAuthors, setAllAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/author')
      .then((res) => {
        console.log('res.data');
        console.log(res);
        setAllAuthors(res.data);
        console.log(allAuthors);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const authorDelete = (authorId)=>{
    axios
      .delete(`http://localhost:8000/api/author/${authorId}`)
      .then((res) => {
        console.log(res.data);
        const filteredArrayAferDeletion = allAuthors.filter((ele)=>ele._id !== authorId);
        setAllAuthors(filteredArrayAferDeletion);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="ParentDiv">
      <div className="ChildDiv">
        <h1>Favorite Authors</h1>
        <p>
          <Link to={`/new`}>Add an author</Link>
        </p>
        <h3>We have quotes by:</h3>
        <Row>
          <Col>
            <section>
              <table>
                <thead>
                  <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                  </tr>
                </thead>

                {allAuthors.map((element, index) => (
                  <tbody>
                    <tr>
                      <td>
                        <Link to={`/${element._id}`}>{element.name}</Link>
                      </td>
                      <td>
                        <Link to={`/${element._id}/edit`}>
                          <button>Edit</button>
                        </Link>
                        <button onClick={()=>authorDelete(element._id)}>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </section>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AuthorAll;
