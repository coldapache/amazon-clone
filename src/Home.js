import React, { useContext } from "react";
import Product from "./Product";
import MiniSlider from "./MiniSlider";
import SimpleImageSlider from "react-simple-image-slider";
import { CartContext } from './CartContext';
import "./Home.css";

function Home(props) {
  const images = [
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2020/Perception-Test-Sep20/prime_ufg_desktophero_message2_en_1500x600._CB406595857_.jpg",
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_1500x600_PRE_Final_en-US_PVD5224._CB410800060_.jpg",
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/YzMyYzc0NzQt/YzMyYzc0NzQt-OWEwMjY0NTIt-w1500._CB408920787_.jpg",
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MDEyMjRkYzYt/MDEyMjRkYzYt-YWE2OTJhNzEt-w1500._CB406839139_.jpg",
    },
  ];

  const database = [
    {
          id:"123423432",
          title:"Sevenstars Mountain Tapestry Forest Tree Tapestry Sunset Tapestry Nature Landscape Tapestry Wall Hanging for Room",
          price:"21.98",
          rating:5,
          image:"https://images-na.ssl-images-amazon.com/images/I/81xiqueIsxL._AC_SL1500_.jpg",
    },
    {
          id:"123423432",
          title:"Cafele Laptop Backpack Anti-Theft Water Resistant Bookbag for Trip School w/USB",
          price:"21.98",
          rating:5,
          image:"https://images-na.ssl-images-amazon.com/images/I/818f7aLGSAL._AC_SL1500_.jpg",
    },
    {
          id:"123423432",
          title:"DEWALT (DWE7491RS) 10-Inch Table Saw, 32-1/2-Inch Rip Capacity",
          price:"111.98",
          rating: 5,
          image:"https://images-na.ssl-images-amazon.com/images/I/61Ov4ae%2B8OL._AC_SL1200_.jpg"
    }
  ]


  return (
    <div className="home">
      <div className="home__slider">
        <SimpleImageSlider
          width={"100%"}
          height={504}
          images={images}
          slideDuration={0.3}
          showBullets={false}
        />
      </div>
      <div className="home__row">
        {/* Product */}
        {
          database.map(product => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))
        }
        
      </div>
      <div>
        <MiniSlider />
      </div>
    </div>
  );
}

export default Home;
