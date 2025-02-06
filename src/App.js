import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Component/Pages/Contact';
import Home from './Component/Pages/Home';
import Product from './Component/Pages/Product';
import Error from './Component/Pages/Error';
import Mobiledevelopment from './Component/Pages/Mobiledevelopment';
import Webdevelopment from './Component/Pages/Webdevelopment';
import Conta from './Component/Pages/Conta';
import Hom from './Component/Pages/Hom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/mobiledev' element={<Mobiledevelopment />}></Route>
          <Route path='/webdev' element={<Webdevelopment />}></Route>

          <Route path='/conta' element={<Conta />}></Route>
          <Route path='/hom' element={<Hom />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
