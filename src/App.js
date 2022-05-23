
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar'
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App bg-dark min-vh-100">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
