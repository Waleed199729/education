
import './App.css';
import Create from './component/Create';
import Edit from './component/Edit';
import Home from './component/Home';

import Product from './component/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom'





const App = () => {


  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/product" element={<Product />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
