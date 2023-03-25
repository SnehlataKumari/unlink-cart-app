import { useAppContext } from "../hooks/AppProvider"

export const ProductButton = ({ id }) => {
  const { handleAddProductToCart, handleRemoveProductFromCart, getDistinctProductsCount } = useAppContext()
  return (
    <div className="card--button--wrapper" >
      {
        getDistinctProductsCount(id) > 0 ? (
          <>
            <button className="btn" onClick={() => handleRemoveProductFromCart(id)}>-</button>
            <span className="qty">{getDistinctProductsCount(id)}</span>
            <button className="btn" onClick={() => handleAddProductToCart(id)}>+</button>
          </>
        ) : (<button className="btn" onClick={() => handleAddProductToCart(id)}>
          Add to Cart
        </button>)
      }
    </div>
  )
}