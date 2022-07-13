import { Template } from "../components/Template"
import { Text } from "../components/Text"
import { useCart } from "../store/useCart"
import { normalizeCurrency } from "../utils/functions"

export default function Cart() {
  const { products, totalPrice } = useCart()
  return (
    <Template>
      <div className="flex flex-1 flex-col bg-white rounded-xl p-6 gap-3">
        <div className="h-24 flex flex-col gap-1">
          <Text label={`Total price: ${normalizeCurrency(totalPrice)}`} />
        </div>
        {products.map((product) => (
          <ProductCart product={product} />
        ))}
      </div>
    </Template>
  )
}

function ProductCart(props: any) {
  const { product } = props
  return (
    <div
      className="flex h-36 rounded-xl overflow-hidden shadow-lg relative z-10"
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-full bg-black h-full opacity-60" />
      <div className="flex flex-col z-10 p-4 max-w-sm gap-2">
        <Text label={product.title} classes="text-white text-lg" />
        <Text label={normalizeCurrency(product.price)} classes="text-white" />
      </div>
    </div>
  )
}
