import { useState } from "react"
import { useCart } from "../../store/useCart"
import { IProduct } from "../../utils/types"
import { Button } from "../Button"

export function BtnAddProductCart(props: {
  product: IProduct
  classes?: string
}) {
  const { product, classes = "" } = props
  const { products, actions } = useCart()

  const isAdded = products.some((item) => item.productId === product.productId)

  return (
    <Button
      label={isAdded ? "Added!" : "Add Cart"}
      classes={
        `bg-white text-base font-semibold p-1 w-36 relative z-10 ` + classes
      }
      disabled={isAdded}
      onClick={() => actions.insertProduct(product)}
    />
  )
}
