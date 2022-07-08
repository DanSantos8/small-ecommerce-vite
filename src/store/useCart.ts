import create from "zustand"
import { IProduct } from "../utils/types"
import { combine, devtools } from "zustand/middleware"

const initialState: { products: IProduct[] } = {
  products: [],
}

interface ICart {
  products: IProduct[]
  actions: { insertProduct: (product: IProduct) => void }
}

export const useCart = create<ICart>()(
  devtools(
    combine({ ...initialState }, (set) => ({
      actions: {
        insertProduct: (product: IProduct) =>
          set((state) => {
            const hasItem = state.products.includes(product)

            if (!hasItem) state.products.push(product)

            return { products: state.products }
          }),
      },
    }))
  )
)
