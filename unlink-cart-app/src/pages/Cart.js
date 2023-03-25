import { useEffect, useState } from "react"
import { useAppContext } from "../hooks/AppProvider"
import helpers from "../config/helpers"
import { ProductButton } from "../components/ProductButton"

export default function Cart() {
  const { selectedItems, products } = useAppContext()
  const [selectedProducts, setSelectedProducts] = useState([])
  const [actualPrice, setActualPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { getPriceWithCurrency } = helpers
  useEffect(() => {
    const productsData = Object.keys(selectedItems).map(id => {
      return { ...products.find(product => +product.id === +id), quantity: selectedItems[id].quantity }
    })
    setSelectedProducts(productsData)
    getDiscountedAmount()
    getProductsTotalPrice()
    getTotalProductsCount()
  }, [selectedItems])
  const getDiscountedAmount = () => {
    const amount = Object.keys(selectedItems).reduce((acc, id) => {
      const product = products.find(product => +product.id === +id)
      return acc + ((product.price * product.discountPercentage) / 100)
    }, 0)
    setDiscountedPrice(amount)

  }
  const getProductsTotalPrice = () => {
    const totalPrice = Object.keys(selectedItems).reduce((acc, id) => {
      const product = products.find(product => +product.id === +id)
      return acc + (product.price * selectedItems[id].quantity)
    }, 0)
    setActualPrice(totalPrice)

  }
  const getTotalProductsCount = () => {
    const quantity = Object.keys(selectedItems).reduce((acc, id) => {
      return acc + selectedItems[id].quantity
    }, 0)
    setQuantity(quantity)

  }

  return (
    <div className="orders">
      <div className="invoice">
        <table>
          <tr className="list-items">
            <th>
              <h1>{`Items ${quantity}`}
              </h1>
            </th>
            <th ><h1>Qty
            </h1></th>
            <th ><h1>Price
            </h1></th>
          </tr>
          {selectedProducts.map(product => {
            const { id, title } = product;
            return (
              <tr key={id}>
                <td> <h1>{title}</h1></td>
                <td className="qty-header">
                  <div className="cart--button-wrapper">
                    <ProductButton id={id} />
                  </div>
                </td>
                <td className="price-header">
                  <h1>{getPriceWithCurrency(product.price)}</h1>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
      <div className="invoice-total">
        <h1>Total</h1>

        <table>
          <tr>
            <th>
              <h1>{`Items(${quantity})`}</h1>
            </th>
            <th>
              {`$${actualPrice}`}
            </th>
          </tr>
          <tr>
            <th>
              <h1>Discount</h1>
            </th>
            <th>
              {`-$${discountedPrice}`}
            </th>
          </tr>
          <tr>
            <th>
              <h1>Type Discount</h1>
            </th>
            <th>
              -$0
            </th>
          </tr>
          <tr className="bg-secondary">
            <th>
              <h1>Order Total</h1>
            </th>
            <th>
              {`$${actualPrice - discountedPrice}`}
            </th>
          </tr>
        </table>
      </div>
    </div>
  )
}