import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductByCategory } from '../api/axios';

function ProductCategory() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    getProductByCategory(slug)
      .then(res => setProducts(res.data.products))
      .catch(err => console.log("Error fetching category products: ", err))
      .finally(() => setLoading(false))
  }, [slug])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold capitalize mb-4">Category: {slug.replace("-", " ")}</h2>
      {loading ? (
        <p className="h-96 text-2xl text-center text-gray-600">🔄 Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link to={`/home/products/${product.id}`} key={product.id}>
              <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-sm text-gray-600 truncate">{product.description}</p>
                <p className="text-green-600 font-bold mt-2">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

    </div>
  )
}

export default ProductCategory