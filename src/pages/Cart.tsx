import { useState } from "react"
import { Button } from "../components/Button"
import { Template } from "../components/Template"
import { Text } from "../components/Text"
import { useCart } from "../store/useCart"
import { normalizeCurrency } from "../utils/functions"

export default function Cart() {
  const { products, totalPriceCart } = useCart()
  return (
    <Template>
      <div className="flex flex-1  flex-col bg-white rounded-xl p-6 gap-3">
        <div className="h-24 flex flex-col gap-1">
          <Text label={`Total price: ${normalizeCurrency(totalPriceCart)}`} />
        </div>
        {products.map((product) => (
          <CartRow product={product} key={product.productId} />
        ))}
      </div>
    </Template>
  )
}

function CartRow(props: any) {
  const { product } = props
  return (
    <div
      className="flex justify-between h-36 rounded-xl overflow-hidden shadow-lg relative z-10"
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-full bg-black h-full opacity-60" />
      <div className="flex flex-col justify-center basis-full z-10 p-4 max-w-sm gap-2">
        <Text label={product.title} classes="text-white text-lg" />
        <Text label={normalizeCurrency(product.price)} classes="text-white" />
      </div>
      <ControlCartRow value={product.quantity} id={product.productId} />
    </div>
  )
}
function ControlCartRow(props: { value: number; id: number }) {
  const [value, setValue] = useState<number>(props.value)
  const { actions } = useCart()
  const { increaseProductQuantity, decreaseProductQuantity, removeProduct } =
    actions

  return (
    <div className="flex flex-col justify-center z-10 p-4 gap-2">
      <div className="flex gap-2">
        <Button
          label="-"
          onClick={() => decreaseProductQuantity(props.id)}
          classes="p-4 rounded-[50%] w-2 h-2 flex justify-center items-center font-bold"
        />
        <input
          type="number"
          value={props.value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-10 focus:outline-gray-500 text-center"
        />
        <Button
          label="+"
          onClick={() => increaseProductQuantity(props.id)}
          classes="p-4 rounded-[50%] w-2 h-2 flex justify-center items-center font-bold"
        />
      </div>
      <Button
        label="Remove"
        onClick={() => removeProduct(props.id)}
        classes="bg-transparent text-white font-bold"
      />
    </div>
  )
}
