import classNames from "classnames"
import { useGetRecomendedProductQuery } from "../../graphql/generated"

import { Text } from "../Text"
export function Recomendation() {
  const { data } = useGetRecomendedProductQuery()

  if (!data) return <div>Loading...</div>

  return (
    <>
      {data?.categories.map((category) =>
        category.products.map((product) => (
          <div
            className={classNames(
              `flex flex-1 flex-col gap-3 justify-center items-center min-h-[360px] bg-[url("${product.image}")] bg-cover bg-center`
            )}
          >
            <Text label={product.title} classes={["text-4xl"]} />
            <Text label="R$ 299,9" classes={["text-2xl"]} />
          </div>
        ))
      )}
    </>
  )
}
