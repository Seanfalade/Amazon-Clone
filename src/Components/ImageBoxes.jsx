import { Link } from "react-router-dom";
import "../styles/imageBoxes.css";
import DisplayHeadsets from "./DisplayHeadsets";

const ImageBoxes = ({ product = [], productTwo = [] }) => {
  const productDetails = {
    name: "Razer BlackShark V2 X Gaming Headset",
    image: "/public/images/71MGiPTwXAL._AC_SX679_.jpg",
    color: "White",
    price: "$34.99",
    size: "3.5mm",
    style: "PC",
  };

  return (
    <>
      <main className="image-section">
        <div className="image-container">
          {/* Gaming Accessories */}
          <div className="image-box">
            <h2>Gaming accessories</h2>
            <div className="image1">
              {product.map((item, index) => (
                <Link to={item.link} className="product-img" key={index}>
                  <img src={`/public/images/${item.image}`} alt={item.label} />
                  <p>{item.label}</p>
                </Link>
              ))}
            </div>
            <span>
              <a href="#">See more</a>
            </span>
          </div>

          {/* Home Essentials */}
          <div className="image-box">
            <h2>Shop for your home essentials</h2>
            <div className="image2">
              {productTwo.map((item, index) => (
                <Link to={item.link} key={index} className="product-img2">
                  <img src={`/public/images/${item.image}`} alt={item.label} />
                  <p>{item.label}</p>
                </Link>
              ))}
            </div>
            <span>
              <a href="#">Discover more in Home</a>
            </span>
          </div>

          {/* Gaming Section */}
          <div className="image-box">
            <h2>Get your game on</h2>
            <div className="image3">
              <Link to="">
                <img
                  src="/public/images/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg"
                  alt="Gaming Store"
                />
              </Link>
            </div>
            <span>
              <a href="#">Shop gaming</a>
            </span>
          </div>

          {/* Office Supplies */}
          <div className="image-box">
            <h2>New year, new supplies</h2>
            <div className="image3">
              <Link to="">
                <img
                  src="/public/images/XCM_CUTTLE_1555947_2997386_758x608_2X_en_US._SY608_CB594429819_.jpg"
                  alt="Office Supplies"
                />
              </Link>
            </div>
            <span>
              <a href="#">Shop office products</a>
            </span>
          </div>

          {/* Headset Details */}
          {/* <DisplayHeadsets productDetails={productDetails} /> */}
        </div>
      </main>
    </>
  );
};

export default ImageBoxes;
