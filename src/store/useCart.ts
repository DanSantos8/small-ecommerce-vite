import create from "zustand"
import { IProduct } from "../utils/types"

export const useCart = create<{
  products: IProduct[]
  insertProduct: (product: IProduct) => void
}>((set) => ({
  products: [],
  insertProduct: (product: IProduct) =>
    set((state) => {
      const hasProduct = state.products.some(
        (item) => item.productId === product.productId
      )

      if (!hasProduct) return { products: [...state.products, { ...product }] }

      return { products: [...state.products] }
    }),
}))
