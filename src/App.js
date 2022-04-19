import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './Components/ProductDetails';
import ProductListing from './Components/ProductListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route path="/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
