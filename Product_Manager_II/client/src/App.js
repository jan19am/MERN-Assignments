import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ProductForm /> }/>
          <Route path="/productlist" element={ <ProductList /> }/>
          <Route path="/singleproduct/:id" element={ <Product /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
