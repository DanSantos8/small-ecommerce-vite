import create from "zustand"
import { IProduct } from "../utils/types"
import { combine, devtools } from "zustand/middleware"

interface IInitialState {
  products: IProduct[]
  totalPriceCart: number
}

const initialState: IInitialState = {
  products: [],
  totalPriceCart: 0,
}

interface ICart extends IInitialState {
  actions: {
    insertProduct: (product: IProduct) => void
    increaseProductQuantity: (id: number) => void
    decreaseProductQuantity: (id: number) => void
    removeProduct: (id: number) => void
  }
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
                products: [...state.products, { ...product }],
                totalPriceCart: state.totalPriceCart + product.price,
              }
            }

            return { ...state }
          }),
        increaseProductQuantity: (id: number) =>
          set((state) => {
            const products = state.products?.map((product) => {
              if (product?.productId === id) {
                return {
                  ...product,
                  quantity: product.quantity + 1,
                }
              }

              return product
            })

            const arrTotalPrices = products?.map(
              (item) => item!.price * item.quantity
            )

            const totalPriceCart = arrTotalPrices?.reduce(
              (previous, current) => previous + current
            )

            return { products, totalPriceCart: totalPriceCart }
          }),
        decreaseProductQuantity: (id: number) =>
          set((state) => {
            const products = state.products?.map((product) => {
              if (product?.productId === id && product.quantity > 0) {
                return {
                  ...product,
                  quantity: product.quantity - 1,
                }
              }

              return product
            })

            const arrTotalPrices = products?.map(
              (item) => item.price * item.quantity
            )

            const totalPriceCart = arrTotalPrices?.reduce(
              (previous, current) => previous + current
            )

            return { products, totalPriceCart: totalPriceCart }
          }),
        removeProduct: (id: number) =>
          set((state) => {
            const products = state.products.filter(
              (product) => product.productId !== id
            )

            const arrTotalPrices = products?.map((item) =>
              item.quantity > 0 ? item.price * item.quantity : 0
            )

            const totalPriceCart = arrTotalPrices?.reduce(
              (previous, current) => previous + current,
              0
            )

            return { products, totalPriceCart }
          }),
      },
    }))
  )
)
