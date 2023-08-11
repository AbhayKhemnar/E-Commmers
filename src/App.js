import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './component/pages/product';
import Card from './component/pages/card';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<Product/>}/>
          <Route path='/card' element={<Card/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
