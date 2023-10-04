import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import PetList from './components/PetList';
import PetForm from './components/PetForm';
import Pet from './components/Pet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <PetList/> }/>
          <Route path="/pets/new" element={ <PetForm/> }/>
          <Route path="/pets/:id" element={ <Pet/> }/>
          <Route path="//pets/:id/edit" element={ <EditPet/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
