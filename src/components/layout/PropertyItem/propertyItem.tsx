import { useState } from "react";
import { MdBed } from "react-icons/md";
import { BsSuitHeart, BsShare } from "react-icons/bs";
import "./propertyItem.css";
import karibu from "../../../assets/images/karibu.jpeg";
import myimage from "./images/myphoto.jpeg";
import data from "../../../assets/Properties.json";
import API from "../../../utils/API";

interface PropertyItemProps {}

const PropertyItem: React.FC<PropertyItemProps> = () => {
  const [result, setResult] = useState([]);
  // const {
  //   listingCatergory,
  //   listingType,
  //   descriptions,
  //   streetAddressLocation,
  //   divison,
  //   amount,
  //   image,
  //   leaseType,
  // } = property;

  // let properties = require("../../../assets/Properties.json");
  // properties.map(() => ({
  //   return {

  //    }

  // })\

  const findAllProperties = (query: any) => {
    API.searchProperties(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  };

  let pincode = 9899;
  findAllProperties(pincode);

  let properties = result;
  // console.log(properties.images);
  return (
    <div>
      <section className="card-section">
        {properties.map(({ id, address, division, amount, images }) => {
          return (
            <article key={id} className="card">
              <div className="property-image">
                <img src={karibu} alt="Image of a House" />
              </div>
              <div className="image-content">
                {/* <h2>LOWER CHURCHIL DR, SENIOR QUARTERS, LAROO DIV</h2> */}
                <h2>
                  {address}, <span>{division}</span>
                </h2>

                <div className="price-type">
                  {/* <p>UGX 900,000</p> */}
                  <p>
                    UGX <span>{amount}</span>
                  </p>
                  <p className="category">
                    <MdBed /> <span>2</span>
                  </p>
                </div>
                <hr />
                <div className="poster-info">
                  <div className="poster-section">
                    <div className="poster-section-image">
                      <img src={myimage} alt="" />
                    </div>

                    <h3>Name</h3>
                  </div>
                  <div className="share-icons">
                    <div className="share">
                      <BsShare className="icon" />
                    </div>
                    <div className="wishlist">
                      <BsSuitHeart className="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        {/* <article className="card">
          <div className="property-image">
            <img src={data.images} alt="" />
          </div>
          <div className="image-content">
            <h2>LOWER CHURCHIL DR, SENIOR QUARTERS, LAROO DIV</h2>

            <div className="price-type">
              <p>UGX 900,000</p>
              <p className="category">
                <MdBed /> <span>2</span>
              </p>
            </div>
            <hr />
            <div className="poster-info">
              <div className="poster-section">
                <div className="poster-section-image">
                  <img src={myimage} alt="" />
                </div>

                <h3>Name</h3>
              </div>
              <div className="share-icons">
                <div className="share">
                  <BsShare className="icon" />
                </div>
                <div className="wishlist">
                  <BsSuitHeart className="icon" />
                </div>
              </div>
            </div>
          </div>
        </article> */}
      </section>
    </div>
  );
};

export default PropertyItem;
