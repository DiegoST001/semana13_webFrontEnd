import React, { useState, useEffect } from 'react';
import ProductoService from '../services/ProductoService';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const AddProductoComponent = () => {
    const [producto, setProducto] = useState({
        producto: '',   // Nombre del producto
        detalle: '',    // Descripción del producto
        stock: '',      // Cantidad del producto
        precio: ''      // Precio del producto
    });

    const { producto: nombre, detalle, stock, precio } = producto;  // Desestructuramos el objeto
    const navigate = useNavigate();
    const { id } = useParams();

    // Función para guardar o actualizar producto
    const saveOrUpdateProducto = (e) => {
        e.preventDefault();
        
        if (id) {
            // Si hay un `id`, se actualiza el producto
            ProductoService.updateProducto(id, producto)
                .then((response) => {
                    console.log(response.data);
                    navigate('/productos');
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // Si no hay `id`, se crea un nuevo producto
            ProductoService.createProducto(producto)
                .then((response) => {
                    console.log(response.data);
                    navigate('/productos');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    // useEffect con `id` como dependencia
    useEffect(() => {
        if (id) {
            ProductoService.getProductoById(id)
                .then((response) => {
                    setProducto({
                        producto: response.data.producto,
                        detalle: response.data.detalle,
                        stock: response.data.stock,
                        precio: response.data.precio
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [id]); // Agregar `id` como dependencia

    const titulo = () => {
        if (id) {
            return <h2 className="text-center">Actualizar Producto</h2>;
        } else {
            return <h2 className="text-center">Registrar Producto</h2>;
        }
    };

    return (
        <div>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2>{titulo()}</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Nombre:</label>
                                    <input
                                        type="text"
                                        placeholder="Escriba el nombre del producto"
                                        name="producto"
                                        className="form-control"
                                        value={nombre}
                                        onChange={(e) => setProducto({ ...producto, producto: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Descripción:</label>
                                    <input
                                        type="text"
                                        placeholder="Escriba la descripción del producto"
                                        name="detalle"
                                        className="form-control"
                                        value={detalle}
                                        onChange={(e) => setProducto({ ...producto, detalle: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Stock:</label>
                                    <input
                                        type="number"
                                        placeholder="Escriba la cantidad del producto"
                                        name="stock"
                                        className="form-control"
                                        value={stock}
                                        onChange={(e) => setProducto({ ...producto, stock: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Precio:</label>
                                    <input
                                        type="number"
                                        placeholder="Escriba el precio del producto"
                                        name="precio"
                                        className="form-control"
                                        value={precio}
                                        onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
                                    />
                                </div>
                                <div className="botones">
                                    <button
                                        className="btn btn-danger"
                                        onClick={saveOrUpdateProducto}
                                    >
                                        Guardar
                                    </button>
                                    <Link to="/productos" className="btn btn-primary">
                                        Cancelar
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductoComponent;
