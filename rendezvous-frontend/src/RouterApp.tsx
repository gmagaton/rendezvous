import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comanda from './pages/Comanda';
import ComandaAbrir from './pages/ComandaAbrir';
import ComandaFechar from './pages/ComandaFechar';
import ComandaPedido from './pages/ComandaPedido';
import Cozinha from './pages/Cozinha';
import Home from './pages/Home';
import Login from './pages/Login';
import Produto from './pages/Produto';
import ProdutoNovo from './pages/ProdutoNovo';
import Sobre from './pages/Sobre';
import Usuario from './pages/Usuario';
import UsuarioForm from './pages/UsuarioForm';

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
          <Route path='/usuario/form' element={<UsuarioForm/>} />
          <Route path='/usuario/form/:idUser' element={<UsuarioForm/>} />
          <Route path='/comanda' element={<Comanda />} />
          <Route path='/comanda/abrir' element={<ComandaAbrir />} />
          <Route path='/comanda/fechar' element={<ComandaFechar />} />
          <Route path='/comanda/pedido' element={<ComandaPedido />} />
          <Route path='/produto' element={<Produto />} />
          <Route path='/produto/novo' element={<ProdutoNovo />} />
          <Route path='/cozinha' element={<Cozinha />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterApp;
