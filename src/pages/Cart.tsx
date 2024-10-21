import React from 'react';

// Definimos el tipo Product para los productos en el carrito
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

// Definimos las props que se le pasan al componente Cart
type CartProps = {
  cartItems: Product[];
  onRemove: (product: Product) => void;
  onUpdateQuantity: (product: Product, quantity: number) => void;
};

const Cart: React.FC<CartProps> = ({ cartItems, onRemove, onUpdateQuantity }) => {
  return (
    <div className="container mt-5">
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="row">
          {cartItems.map(item => (
            <div key={item.id} className="col-md-12">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src={item.image} 
                      className="img-fluid rounded-start" 
                      alt={item.title} 
                      style={{ maxHeight: '200px', objectFit: 'contain' }} 
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">Precio: ${item.price}</p>
                      <p>Cantidad: 
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => onUpdateQuantity(item, parseInt(e.target.value))}
                          min="1"
                          className="form-control w-25 d-inline-block"
                        />
                      </p>
                      <p>Total: ${item.price * item.quantity}</p>
                      <button 
                        className="btn btn-danger" 
                        onClick={() => onRemove(item)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
