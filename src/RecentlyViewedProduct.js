import React from 'react'

function RecentlyViewedProduct(props) {
    return (
     
            <span>

        <div className="checkout__recentlyViewed_itemBox">
        <div className="checkout__recentlyViewed_imageWrapper">
          <div className="checkout__recentlyViewed_imageWrapper2">
            <a href="#">
              <img
                className="checkout__recentlyViewed_itemImage"
                src={props.recentProduct.image}
              />
            </a>
          </div>
        </div>
        <div className="checkout__recentlyViewed__descriptionWrapper marginBottom__small">
          <a
            className="checkout__recentlyViewed__descriptionProductTitleLink fontFamily_ember"
            href="#"
          >
            {props.recentProduct.title}
          </a>
          <div>
            <a>⭐⭐⭐⭐⭐</a>
          </div>
          <div className="marginBottom__small">
            <a
              href="#"
              className="fontFamily_ember checkout__addToCart_price"
            >
              ${props.recentProduct.price}
            </a>
            <i></i>
          </div>
          <div>
            <button className="checkout__addToCartButton fontFamily_ember">
              Add to cart
            </button>
          </div>
        </div>
      </div>
            </span>
       
    )
}

export default RecentlyViewedProduct
