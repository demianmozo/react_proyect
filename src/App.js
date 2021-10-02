import './App.css';
//components
import { useEffect } from 'react';
import AppRouter from './AppRouter/AppRouter';
//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
