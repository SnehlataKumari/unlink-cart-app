import helpers from "../config/helpers"
import { ProductButton } from "./ProductButton";

export default function Card({ product }) {
  const { calculateDiscountedPrice, getPriceWithCurrency } = helpers;
  const { id, title, price, discountPercentage, thumbnail } = product;
  return (
    <div key={id} className="grid-item">
      {
        discountPercentage ?
          <h5 className="discount-percent">{`${discountPercentage}% off`}</h5>
          :
          <></>
      }
      <div className="thumbnail">
        <img src={thumbnail} alt="PRODUCT COVER NOT AVAILABLE" />
      </div>
      <div className="card-footer">
        <h2 className="product-title">{title}</h2>
        <div className="product-details">
          <div className="price-details">
            <h2 className="price">{getPriceWithCurrency(price)}</h2>
            <h2>{`${getPriceWithCurrency(calculateDiscountedPrice(price, discountPercentage))}`}</h2>
          </div>
          <ProductButton id={id} />
        </div>

      </div>
    </div>
  )
}