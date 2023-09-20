import React from "react";
import "./searchItem.css";
function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/471396613.webp?k=ecaced1878604a3dff459a47c4b48f97b69b483f533af5cef5e516c6e6006d2d&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
        <span></span>
      </div>

      {/* detail part */}
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>

        <div className="siDetailTexts">
          <span className="siPrice">$115</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See Available</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
