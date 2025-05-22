// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { addToCart } from '../app/Cart';
// import toast from 'react-hot-toast';
// import { getAllProducts } from '../api/axios'

// function AllProducts() {
//     const carts = useSelector(store => store.cart.items);
//     console.log(carts);

//     const [products, setProduct] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//         getAllProducts()
//             .then(res => setProduct(res.data.products))
//             .catch(err => console.log("Fetch to fetch product data: ", err))
//             .finally(() => setLoading(false));
//     }, [])

//     const dispatch = useDispatch();
//     const handleAddToCart = (product) => {
//         dispatch(addToCart({
//             productId: product?.id,
//             price: product?.price,
//             quantity: 1,
//             // title: product.title,
//             // image: product.image,
//         }))
//         toast.success('Added to Cart Successfully!');
//     }

//     const searchQuery = useSelector(state => state.search.query);
//     const filteredProducts = products.filter(product =>
//         product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <div>
//             <div className="container mx-auto px-4 pb-5">
//                 <h1 className="text-3xl font-bold my-5">Products</h1>

//                 <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">

//                     {filteredProducts.length === 0 ? (
//                         <div className="col-span-full text-center py-10 min-h-60">
//                             <h2 className="text-xl font-semibold text-gray-600">{loading ? "Loading..." : "No results found."}</h2>
//                             <p className="text-gray-400">{loading ? " " : "Try searching for something else."}</p>
//                         </div>
//                     ) : (
//                         filteredProducts.map((product) => (
//                             <div key={product.id} className="p-4 shadow-lg rounded-lg bg-white hover:shadow-blue-300 duration-300">
//                                 <Link to={`/home/products/${product.id}`} className="block">
//                                     <img
//                                         src={product.images?.[0]}
//                                         alt={product.title}
//                                         className="w-40 h-40 object-contain mx-auto"
//                                     />
//                                 </Link>
//                                 <p className="text-green-600 font-bold mt-2">${product.price}</p>
//                                 <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
//                                 {/* <p className="text-gray-500 text-sm mt-1">{product.description.substring(0, 50)}...</p> */}

//                                 <div className="flex items-center mt-2">
//                                     <span className="text-yellow-400 text-md">⭐ {product.rating}</span>
//                                     {/* <span className="text-gray-500 ml-2">({product.rating?.count} reviews)</span> */}
//                                 </div>

//                                 <button
//                                     onClick={() => handleAddToCart(product)}
//                                     className="bg-blue-600 text-white px-4 py-2 mt-3 rounded shadow-2xl cursor-pointer hover:bg-blue-700 duration-300">
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AllProducts;











import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../app/Cart';
import toast from 'react-hot-toast';
import { getAllProducts, getAllProductCategories } from '../api/axios'
const categoryImage = [
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    "image": "https://img.freepik.com/free-photo/front-view-expensive-fragnance-with-flowers-dark-background-color-perfume-gift-present-love-marriage-scent-flower_140725-158075.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/elegant-modern-dining-room-with-sleek-furniture-neutral-tones-sophisticated-home-atmosphere_447653-51218.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/ripe-fresh-vegetables-shopping-basket-paper-bag-white-background_488220-127.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/creative-composition-stylish-living-room-interior-design-with-frame-wooden-commode-plants-hanging-decoration-accessories-retro-vintage-concept-neutral-walls-parquet-floor_431307-1191.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/free-photo/supplies-composition-with-blue-background-top-view_23-2149491452.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    "image": "https://img.freepik.com/premium-photo/style-everyday-mens-casual-shirt-photoshoot-poses-boys-shirt_463958-119.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/pair-classic-black-leather-shoes-lie-old-boards-side-view-close-up-selective-focus_172579-113.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/vintage-men-s-wristwatch_62754-2061.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309652.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/free-photo/cool-motorcycle-with-neon-lights_23-2150781554.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/woman-face-with-green-leaf-cream-nourishing-mask_80942-1162.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/free-photo/view-electronic-product-balancing-podium_23-2150141321.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/still-life-perfectly-ordered-fitness-gym-accessories_910608-11409.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/black-sunglasses-isolated-white-background_34836-2052.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/digital-tablet-pc-smartphone-with-apps-icons-interface_118047-943.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/free-photo/display-women-s-summer-wear-such-as-tops-shorts-skirts-large-clothing-stores_157027-3543.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/free-photo/luxury-sedan-sport-cars-road_114579-4019.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/free-photo/bag-hanging-from-furniture-item-indoors_23-2151073506.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/portrait-woman-sitting-front-clothes-hanger_268317-563.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/free-photo/luxury-shine-diamonds-digital-art_23-2151695039.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/premium-photo/black-spike-heel-shoe-white-surface_104627-1400.jpg?semt=ais_hybrid&w=740"
  },
  {
    "image": "https://img.freepik.com/free-photo/young-stylish-woman-with-pink-purple-braids-black-waist-bag-posing-outdoor_343596-2085.jpg?semt=ais_hybrid&w=740"
  }
]

function AllProducts() {
  const { slug } = useParams();
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchQuery = useSelector(state => state.search.query);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    Promise.all([getAllProducts(), getAllProductCategories()])
      .then(([productRes, categoryRes]) => {
        setProduct(productRes.data.products);
        setCategories(categoryRes.data);
      })
      .catch(err => console.log("Error fetching products or categories: ", err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      productId: product?.id,
      price: product?.price,
      quantity: 1,
    }));
    toast.success('Added to Cart Successfully!');
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // <div className="container mx-auto px-4 pb-5">
    //     <h1 className="text-3xl font-bold my-5">Products</h1>

    //     <div className="flex gap-6">
    //         {/* Categories Sidebar */}
    //         <div className="w-1/4 bg-white shadow rounded p-4 h-fit">
    //             <h2 className="text-lg font-semibold mb-4">Categories</h2>
    //             <ul className="space-y-2">
    //                 {categories.map((category, idx) => (
    //                     <li key={idx}>
    //                         <Link
    //                             to={`/home/category/${category.slug}`}
    //                             className="block text-blue-600 hover:underline capitalize"
    //                         >
    //                             {category.slug}
    //                         </Link>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>

    //         {/* Products Grid */}
    //         <div className="w-3/4">
    //             <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
    //                 {filteredProducts.length === 0 ? (
    //                     <div className="col-span-full text-center py-10 min-h-60">
    //                         <h2 className="text-xl font-semibold text-gray-600">{loading ? "Loading..." : "No results found."}</h2>
    //                         <p className="text-gray-400">{loading ? " " : "Try searching for something else."}</p>
    //                     </div>
    //                 ) : (
    //                     filteredProducts.map((product) => (
    //                         <div key={product.id} className="p-4 shadow-lg rounded-lg bg-white hover:shadow-blue-300 duration-300">
    //                             <Link to={`/home/products/${product.id}`} className="block">
    //                                 <img
    //                                     src={product.images?.[0]}
    //                                     alt={product.title}
    //                                     className="w-40 h-40 object-contain mx-auto"
    //                                 />
    //                             </Link>
    //                             <p className="text-green-600 font-bold mt-2">${product.price}</p>
    //                             <h2 className="text-lg font-semibold mt-2">{product.title}</h2>

    //                             <div className="flex items-center mt-2">
    //                                 <span className="text-yellow-400 text-md">⭐ {product.rating}</span>
    //                             </div>

    //                             <button
    //                                 onClick={() => handleAddToCart(product)}
    //                                 className="bg-blue-600 text-white px-4 py-2 mt-3 rounded shadow-2xl cursor-pointer hover:bg-blue-700 duration-300"
    //                             >
    //                                 Add to Cart
    //                             </button>
    //                         </div>
    //                     ))
    //                 )}
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div className="px-4 py-6">
      {/* Category Row */}
      <div className="mb-6 overflow-x-auto hide-scrollbar">
        <div className="flex space-x-4 min-w-max px-2 py-4 bg-white rounded shadow">
          {categories.map((category, idx) => (
            <Link
              key={idx}
              to={`/home/category/${category.slug}`}
              className="flex-shrink-0 w-28 text-center hover:scale-105 transition"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={categoryImage[idx % categoryImage.length].image}
                  alt={category.slug}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm text-gray-800 capitalize font-medium">
                {category.slug}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-5">All Products</h1>

      {/* Product Grid */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center py-10">
            <h2 className="text-lg text-gray-600">
              {loading ? "Loading..." : "No results found."}
            </h2>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded shadow hover:shadow-lg transition duration-300 p-3 flex flex-col"
            >
              <Link to={`/home/products/${product.id}`}>
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="h-48 w-full object-contain mb-2"
                />
                <h2 className="text-md font-medium text-gray-800 line-clamp-2">
                  {product.title}
                </h2>
              </Link>

              <p className="text-lg font-semibold text-green-700 mt-1">
                ${product.price}
              </p>

              <div className="mt-1 flex items-center">
                <span className="bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                  ⭐ {product.rating}
                </span>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="bg-yellow-500 text-sm text-white py-2 mt-3 rounded hover:bg-yellow-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>

  );
}

export default AllProducts;


/* 
[
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    "image": "https://images.unsplash.com/photo-1522337660859-02fbefca4702"
  },
  {
    "image": "https://images.unsplash.com/photo-1616627982372-3b6f0f0b5b8b"
  },
  {
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e17b"
  },
  {
    "image": "https://images.unsplash.com/photo-1616627982372-3b6f0f0b5b8b"
  },
  {
    "image": "https://images.unsplash.com/photo-1601049542060-3b6f0f0b5b8b"
  },
  {
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    "image": "https://images.unsplash.com/photo-1520975911090-1e0c0f7a1c5f"
  },
  {
    "image": "https://images.unsplash.com/photo-1520975911090-1e0c0f7a1c5f"
  },
  {
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    "image": "https://images.unsplash.com/photo-1520975911090-1e0c0f7a1c5f"
  },
  {
    "image": "https://images.unsplash.com/photo-1616627982372-3b6f0f0b5b8b"
  },
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  }
]

*/