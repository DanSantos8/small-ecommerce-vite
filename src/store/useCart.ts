import create from "zustand"
import { IProduct } from "../utils/types"
import { combine, devtools } from "zustand/middleware"

interface IInitialState {
  products: IProduct[]
  totalPrice: number
}

const initialState: IInitialState = {
  products: [],
  totalPrice: 0,
}

interface ICart extends IInitialState {
  actions: { insertProduct: (product: IProduct) => void }
}

export const useCart = create<ICart>()(
  devtools(
    combine({ ...initialState }, (set) => ({
      actions: {
        insertProduct: (product: IProduct) =>
          set((state) => {
            const hasItem = state.products.includes(product)

            if (!hasItem) {
              return {
                ...state,
                products: [...state.products, product],
                totalPrice: state.totalPrice + product.price,
              }
            }

            return { ...state }
          }),
      },
    }))
  )
)
