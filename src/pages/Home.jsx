import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { getAllProductCategories } from '../api/axios';
import { useEffect, useState } from 'react';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllProductCategories()
      .then(res => {
        setCategories(res.data)
        // console.log(res.data);
      })
      .catch(err => console.log("Failed to fetch categories", err))
  }, []);

  const sliderImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Big Summer Sale',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1500&q=80',
      title: 'Top Electronics Deals',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1500&q=80',
      title: 'Latest Fashion Trends',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="bg-gray-100">
      {/* Slider Section */}
      <div className="w-full">
        <Slider {...settings}>
          {sliderImages.map((slide) => (
            <div key={slide.id}>
              <div className="relative h-[400px] md:h-[600px] w-full">
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <Link
                      to="/home/products"
                      className="mt-4 inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:shadow-lg transition"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-3">Welcome to CartCraze</h1>
        <p className="text-gray-600 text-lg mb-6">
          Shop the best deals across electronics, fashion, home essentials, and more. Fast delivery & secure payments!
        </p>
        <Link
          to="/home/products"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out text-center"
        >
          Shop Now
        </Link>
      </div>

      {/* Categories Section */}
      {/* <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              to={`/home/category/${category.slug}`}
              key={index}
              className="bg-white p-4 rounded shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out text-center"
            >
              <span className="capitalize">{category.name}</span>
            </Link>
          ))}
        </div>
      </div> */}

      {/* Featured Cards */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Electronics</h2>
          <img
            src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D"
            alt="Electronics"
            className="h-40 w-full object-cover rounded mb-4"
          />
          <Link to="/home/products" className="text-blue-600 hover:underline">
            Explore Deals
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Fashion</h2>
          <img
            src="https://plus.unsplash.com/premium_photo-1683817138481-dcdf64a40859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
            alt="Fashion"
            className="h-40 w-full object-cover rounded mb-4"
          />
          <Link to="/home/products" className="text-blue-600 hover:underline">
            Shop Latest
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Home & Kitchen</h2>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Home & Kitchen"
            className="h-40 w-full object-cover rounded mb-4"
          />
          <Link to="/home/products" className="text-blue-600 hover:underline">
            Browse Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
