import Card from "../components/Card"
import { useAppContext } from "../hooks/AppProvider"

export default function Products() {
  const { products } = useAppContext()
  return (
    <div className="grid-container">
      {
        products.map(product => {
          return (
            <Card
              product={product}
              key={product.id}
            />
          )
        })
      }
    </div>
  )
}