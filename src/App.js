import './App.css';
//components
import { useEffect, useState } from 'react';
import AppRouter from './AppRouter/AppRouter';
//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//context
import CartContext  from './context/CartContext';

function App() {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCount, setTotalCount] = useState (0)
  return (
    <div className="App">
      <CartContext.Provider value={{cart, setCart, totalPrice, setTotalPrice, totalCount, setTotalCount}}>
        <AppRouter />
      </CartContext.Provider>
    </div>
  );
}

export default App;
