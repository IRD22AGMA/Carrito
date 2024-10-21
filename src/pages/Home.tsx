import React, { useEffect, useState } from 'react';

// Definimos el tipo Product para los productos
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

// Definimos las props que el componente Home recibe
type HomeProps = {
  onAddToCart: (product: Product) => void;
  searchTerm: string;
};

const Home: React.FC<HomeProps> = ({ onAddToCart, searchTerm }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Obtener productos desde la API al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Guardamos los productos en el estado
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    fetchProducts();
  }, []);

  // Filtrar los productos según el término de búsqueda
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.title} 
                style={{ height: '250px', objectFit: 'contain' }} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{product.title}</h5>
                <p className="card-text text-center fw-bold text-primary">${product.price}</p>
                <button 
                  className="btn btn-outline-primary mt-auto" 
                  onClick={() => onAddToCart(product)}
                >
                  Agregar a Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
