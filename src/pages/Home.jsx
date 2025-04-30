import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function Home() {
  const sliderImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1500&q=80',
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
                  <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                    {slide.title}
                  </h2>
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
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition duration-300"
        >
          Shop Now
        </Link>
      </div>

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




// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Box,
// } from '@mui/material';

// function Home() {
//   const sliderImages = [
//     {
//       id: 1,
//       url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1500&q=80',
//       title: 'Big Summer Sale',
//     },
//     {
//       id: 2,
//       url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1500&q=80',
//       title: 'Top Electronics Deals',
//     },
//     {
//       id: 3,
//       url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1500&q=80',
//       title: 'Latest Fashion Trends',
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: false,
//     arrows: false,
//   };

//   return (
//     <Box className="bg-gray-100">
//       {/* Slider Section */}
//       <Box className="w-full">
//         <Slider {...settings}>
//           {sliderImages.map((slide) => (
//             <Box key={slide.id}>
//               <Box className="relative h-[400px] md:h-[600px] w-full">
//                 <img
//                   src={slide.url}
//                   alt={slide.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <Box className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                   <Typography variant="h3" className="text-white drop-shadow-lg text-center px-4" sx={{ fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '3rem' } }}>
//                     {slide.title}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           ))}
//         </Slider>
//       </Box>

//       {/* Welcome Section */}
//       <Container maxWidth="lg" className="text-center py-12">
//         <Typography variant="h4" className="font-bold mb-4">
//           Welcome to CartCraze
//         </Typography>
//         <Typography variant="body1" className="text-gray-600 mb-6 text-lg">
//           Shop the best deals across electronics, fashion, home essentials, and more. Fast delivery & secure payments!
//         </Typography>
//         <Button
//           component={Link}
//           to="/products"
//           variant="contained"
//           className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
//           sx={{ px: 4, py: 1.5, textTransform: 'none', fontWeight: 600 }}
//         >
//           Shop Now
//         </Button>
//       </Container>

//       {/* Featured Cards */}
//       <Container maxWidth="lg" className="mb-16">
//         <Box className="w-full">
//           <Grid container spacing={4}>
//             {[
//               {
//                 title: 'Electronics',
//                 image:
//                   'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60',
//                 link: 'Explore Deals',
//               },
//               {
//                 title: 'Fashion',
//                 image:
//                   'https://plus.unsplash.com/premium_photo-1683817138481-dcdf64a40859?w=600&auto=format&fit=crop&q=60',
//                 link: 'Shop Latest',
//               },
//               {
//                 title: 'Home & Kitchen',
//                 image:
//                   'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
//                 link: 'Browse Now',
//               },
//             ].map((item, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card className="shadow-md h-full rounded-lg">
//                   <CardMedia
//                     component="img"
//                     height="160"
//                     image={item.image}
//                     alt={item.title}
//                     className="rounded-t-lg object-cover"
//                   />
//                   <CardContent className="grow flex flex-col justify-between">
//                     <Typography variant="h6" className="font-semibold mb-2 text-sm">
//                       {item.title}
//                     </Typography>
//                     <Link
//                       to="/products"
//                       className="text-blue-600 hover:underline text-sm mt-2"
//                     >
//                       {item.link}
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//       </Container>
//     </Box>
//   );
// }

// export default Home;


