import './App.css';
//components
import { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  /* const UrlPokeapi = 'https://pokeapi.co/api/v2/pokemon/'

  useEffect(() => {
    fetch(UrlPokeapi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name: 'Demian',
        edad: '18'
      })
    })
      .then((response) => {
      return response.json()
      })
      .then((data) => {
      console.log(data)
    })
  }, [])
 */
  return (
    <div className="App">
      <NavBar />
      <div className="app-body">
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
