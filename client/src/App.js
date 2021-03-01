import './App.css';
import { Router } from '@reach/router';
import AuthorAll from './components/AuthorAll';
import AuthorEdit from './components/AuthorEdit';
import AuthorNew from './components/AuthorNew';
import AuthorOne from './components/AuthorOne';

function App() {
  const NotFound =()=>{
    return(
      <div>Route Not Found</div>
    )
  }
  return (
    <div className="App">
      <Router>
        <AuthorAll path="/" />
        <AuthorOne path="/:id" />
        <AuthorNew path="/new" />
        <AuthorEdit path="/:authorId/edit" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
