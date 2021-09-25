import './App.css';
//components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const respuesta = 'Data productos'
    resolve(respuesta)
    }, 5000)
  })

  promesa1.then((respuesta) => {
    console.log('respuesta de promesa', respuesta)
  })

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
