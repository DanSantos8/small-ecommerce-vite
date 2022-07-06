import { useParams } from "react-router-dom"
import { useGetProductDetailQuery } from "../../graphql/generated"
import { normalizeCurrency } from "../../utils/functions"
import { BtnAddProductCart } from "../BtnAddProductCart"
import { Text } from "../Text"

export function ProductDetails() {
  let { id = "" } = useParams<{ id: string }>()
  const { data } = useGetProductDetailQuery({
    variables: {
      productId: parseInt(id),
    },
  })

  if (!data?.product) return <span>Loading...</span>

  return (
    <section
      className="min-h-[700px] flex flex-1 relative z-10 items-center"
      style={{
        backgroundImage: `url(${data?.product?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-full bg-black h-full opacity-70" />
      <div className="max-w-[460px] min-h-[480px] mx-8 flex flex-1 flex-col rounded-lg bg-white relative z-10 p-5 gap-2">
        <Text label={data.product?.title} classes="text-3xl" as="h1" />
        <div className="flex flex-1 flex-col gap-3">
          <p className="text-lg max-h-[400px] overflow-y-auto">
            {data.product?.description}
          </p>
          <Text
            label={normalizeCurrency(data.product.price)}
            as="h4"
            classes="text-xl"
          />
        </div>
        <BtnAddProductCart
          product={data?.product}
          classes="w-full bg-black p-3 text-white"
        />
      </div>
    </section>
  )
}
