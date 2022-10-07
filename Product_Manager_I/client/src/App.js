import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ProductForm /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
