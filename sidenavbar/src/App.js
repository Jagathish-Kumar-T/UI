import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import Comment from './Pages/Comment';
import About from './Pages/About';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Sidebar>

    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/comment" element={<Comment/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/productlist" element={<ProductList/>}/>

    </Routes>
    </Sidebar>
    </BrowserRouter>
    </div>
  );
}

export default App;
