import './App.css';
//components
import { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import AppRouter from './AppRouter/AppRouter';
//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
