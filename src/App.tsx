import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import MapPage from './pages/Map';
import { useState } from 'react';

// Definimos el tipo Product
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

// Pie de página simple
function Footer() {
  return (
    <footer className="bg-dark text-white p-4 text-center mt-5">
      <p>© 2024 Market Foro. Todos los derechos reservados.</p>
    </footer>
  );
}

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para la búsqueda

  // Función para agregar un producto al carrito
  const handleAddToCart = (product: Omit<Product, 'quantity'>) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (product: Product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const handleUpdateQuantity = (product: Product, quantity: number) => {
    setCartItems(
      cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: quantity }
          : item
      )
    );
  };

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path='/' element={<Home onAddToCart={handleAddToCart} searchTerm={searchTerm} />} />
        <Route path='/carrito' element={<Cart 
                                           cartItems={cartItems} 
                                           onRemove={handleRemoveFromCart}
                                           onUpdateQuantity={handleUpdateQuantity}
                                         />} />
        <Route path='/mapa' element={<MapPage />} />
        <Route path='/nosotros' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
