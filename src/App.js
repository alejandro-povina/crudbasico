import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos';
import AgregarProductos from './components/AgregarProductos';
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';


function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        {/* con exact path le digo cual es la ruta exacta, evita que el navegador utilice rutas con palabras similares */}
        <Route exact path ='/'> 
        <Inicio></Inicio>
        </Route>
        <Route exact path='/productos'>
    <ListarProductos></ListarProductos>
        </Route>
        <Route exact path='/productos/nuevo'>
    <AgregarProductos></AgregarProductos>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
