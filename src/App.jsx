import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartProvider from './components/context/CartContext'
import Cart from './components/Cart';
import NavBar from './components/NavBar'

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route
						path="/categoria/:categoriaId"
						element={<ItemListContainer />}
					/>
					<Route path="/cart" element={<Cart />} />
					<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}


export default App;
