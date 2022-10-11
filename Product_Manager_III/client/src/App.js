import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Product from './components/Product';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ProductForm /> }/>
          <Route path="/productlist" element={ <ProductList /> }/>
          <Route path="/singleproduct/:id" element={ <Product /> }/>
          <Route path="/edit/:id" element={ <EditProduct /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
