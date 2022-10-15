import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/allauthors" element={ <AuthorList/> }/>
          <Route path="/addauthor" element={ <AuthorForm/> }/>
          <Route path="/edit/:id" element={ <EditAuthor/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
