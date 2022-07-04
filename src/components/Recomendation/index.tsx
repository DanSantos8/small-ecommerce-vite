import classNames from "classnames"
import { useGetTrendingProductQuery } from "../../graphql/generated"
import { normalizeCurrency } from "../../utils/functions"
import { Text } from "../Text"
import { BtnAddProductCart } from "../Button"
export function Recomendation() {
  const { data } = useGetTrendingProductQuery()

  if (!data) return <div>Loading...</div>

  return (
    <>
      {data.category?.products.map((product) => (
        <div
          key={product.productId}
          className={classNames(
            `flex flex-1 flex-col gap-3 mb-6 justify-center items-center min-h-[360px] bg-cover bg-center`
          )}
          style={{
            backgroundImage: `url('${product.image}')`,
          }}
        >
          <Text label={product.title} classes="text-4xl text-white" />
          <Text
            label={normalizeCurrency(product.price)}
            classes="text-2xl text-white"
          />
          <BtnAddProductCart productId={product.productId} />
        </div>
      ))}
    </>
  )
}
