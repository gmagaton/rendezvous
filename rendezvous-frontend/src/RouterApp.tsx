import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriaForm from './pages/CategoriaForm';
import Comanda from './pages/Comanda';
import ComandaAbrir from './pages/ComandaAbrir';
import ComandaFechar from './pages/ComandaFechar';
import ComandaPedido from './pages/ComandaPedido';
import Cozinha from './pages/Cozinha';
import Home from './pages/Home';
import Login from './pages/Login';
import ProdutoForm from './pages/ProdutoForm';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import UsuarioForm from './pages/UsuarioForm';
import Usuario from './pages/Usuarios';

function RouterApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          
          <Route path='/usuario' element={<Usuario />} />
          <Route path='/usuario/form' element={<UsuarioForm />} />
          <Route path='/usuario/form/:idUser' element={<UsuarioForm />} />
          
          <Route path='/categoria/form' element={<CategoriaForm />} />
          <Route path='/categoria/form/:idCategoria' element={<CategoriaForm />} />
          
          <Route path='/produto' element={<Produtos />} />
          <Route path='/produto/form' element={<ProdutoForm />} />
          <Route path='/produto/form/:idProduto' element={<ProdutoForm />} />
          
          <Route path='/comanda' element={<Comanda />} />
          <Route path='/comanda/abrir' element={<ComandaAbrir />} />
          <Route path='/comanda/fechar' element={<ComandaFechar />} />
          <Route path='/comanda/pedido' element={<ComandaPedido />} />
          
          <Route path='/cozinha' element={<Cozinha />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterApp;
