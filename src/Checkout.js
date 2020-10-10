import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";

import RecentlyViewedProduct from "./RecentlyViewedProduct";

function Checkout() {
  const [cart, setCart] = useContext(CartContext);
  
  let subtotal = 0
  
  for (var i = 0; i < cart.length; i++) {
    parseFloat(subtotal += parseFloat(cart[i].price))
  }
  //sets the subtotal to the sum of the cart length
  
  

  return (
    <div id="checkout__main">
      <div className="checkout__mainLeft">
        <div className="checkout__topBanner__border">
          <div className="checkout__topBanner">
            <div className="checkout__topBanner__imageWrapper">
              <div className="checkout__topBanner__imageWrapper_two">
                <img
                  className="checkout__topBanner__imageWrapper__two__image"
                  src="https://m.media-amazon.com/images/I/519wXMcOWUL._SS100_.jpg"
                />
                <div className="checkout__topBanner__imageWrapper__two__text">
                  <strong>$100 instant gift card</strong>
                </div>
              </div>
            </div>

            <div className="checkout__topBanner_messageWrapper">
              <div className="checkout__topBanner_messageWrapper_sub">
                <span className="checkout__topBanner_messageWrapper_span">
                  <strong>Micah, </strong>
                  get a{" "}
                  <strong className="strongAmazonBlue">
                    $70 Amazon Gift Card Instantly{" "}
                  </strong>
                  upon approval for the
                  <strong> Amazon Prime Rewards Visa Card</strong>
                </span>
              </div>
            </div>

            <div className="marginBottom22 bannerColumn">
              <div className="spacingMini">
                <table className="bannerColumn__table">
                  <tbody className="bannerColumn__table__tbody">
                    <tr>
                      <td className="tableLabel">Current:</td>
                      <td className="tableMathBox">39.95</td>
                    </tr>
                    <tr>
                      <td className="tableLabel">Total:</td>
                      <td className="tableMathBox"></td>
                    </tr>
                    <tr>
                      <td className="tableLabel textBoldLabel">Savings: </td>
                      <td className="tableMathBox sumLineTable textBoldLabel">
                        {" "}
                        -$100.00
                      </td>
                    </tr>
                    <tr>
                      <td className="tableLabel textBoldLabel textBoldLabelPrice">
                        Cost After Savings:
                      </td>
                      <td className="tableMathBox textBoldLabel">$ 0.00</td>
                    </tr>

                    <tr>
                      <td className="tableLabel textBoldLabel">
                        Savings Remaining:
                      </td>
                      <td className="tableMathBox textBoldLabel">$60.05</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="buttonColumn__fixedWidth">
              <div className="buttonColumn__fixedWidth__spacing">
                <span className="learnMoreButton">
                  <span className="learnMoreButtonInner">
                    <input
                      className="learnMoreButtonInput"
                      label="Learn More"
                      type="submit"
                    ></input>
                    <span className="learnMoreButtonInput__text">
                      Learn More
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout__mainRight">
        <div className="checkout__mainRightWrapper">
          <div className="checkout__proceedToCheckoutMain">
            <div className="checkout__proceedToCheckoutMain__inner">
              <div className="checkout__proceedToCheckoutMain__innerSubtotal">
                  <CurrencyFormat 
                  renderText={(value) => (
                    <>
                    <div><span className="fontsize_medium">Items: {cart.length}</span></div>
                    <span className="fontsize_medium">Subtotal: {value}</span>{" "}
                    <span className="fontsize_medium fontsize_medium_bold"> </span>
                    </>
                  )}
                    decimalScale={2}
                    value={subtotal.toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                
              </div>
              <div className="checkout__proceedToCheckoutMain__innerCheckbox">
                <div className="checkout__orderContainsGift">
                  <label>
                    <input type="checkbox"></input>
                    <i></i>
                    <span className="fontsize_medium_lite">
                      This order contains a gift
                    </span>
                  </label>
                </div>

                <button className="checkout__proceedToCheckoutButton">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>

          <div className="checkout__recentlyViewed">
            <div>
              <div className="checkout__recentlyViewed_inner">
                <div>
                  <div>
                    <h5 className="checkout__recentlyViewed_header">
                      Your recently viewed items
                    </h5>
                    <div>
                      <div>
                        <ul className="checkout__recentlyViewed_ul">
                          <li className="checkout__recentlyViewed_li">
                            
                              {cart.map((recentProduct, i) => (
                                <RecentlyViewedProduct recentProduct={recentProduct}/>
                              ))}
                            
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
