import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../app/Cart';
import toast from 'react-hot-toast';

function ProductCart() {
    const carts = useSelector(store => store.cart.items);
    // console.log(carts);

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            // fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => response.json()
                .then((data) => setProduct(data))
                // .then((data) => console.log(data))
                .catch((error) => console.log("Fetch data error: ", error)
                )
            )
    }, [])

    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart({
            productId: product?.id,
            price: product?.price,
            quantity: 1,
            // title: product.title,
            // image: product.image,
        }))
        toast.success('Added to Cart Successfully!');
    }

    const searchQuery = useSelector(state => state.search.query);
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="container mx-auto px-4 pb-5">
                <h1 className="text-3xl font-bold text-center my-5">List of Products</h1>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">

                    {filteredProducts.length === 0 ? (
                        <div className="col-span-full text-center py-10 min-h-60">
                            <h2 className="text-xl font-semibold text-gray-600">No results found.</h2>
                            <p className="text-gray-400">Try searching for something else.</p>
                        </div>
                    ) : (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="p-4 shadow-lg rounded-lg bg-white">
                                <Link to={`/home/product/${product.id}`} className="block">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-40 h-40 object-contain mx-auto"
                                    />
                                </Link>
                                <p className="text-green-600 font-bold mt-2">${product.price}</p>
                                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                                {/* <p className="text-gray-500 text-sm mt-1">{product.description.substring(0, 50)}...</p> */}

                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-500 text-md">⭐ {product.rating?.rate}</span>
                                    <span className="text-gray-500 ml-2">({product.rating?.count} reviews)</span>
                                </div>

                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-blue-600 text-white px-4 py-2 mt-3 rounded shadow-2xl cursor-pointer hover:bg-blue-700 duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCart;