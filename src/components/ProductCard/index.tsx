import { normalizeCurrency } from "../../utils/functions"
import { BtnAddProductCart } from "../BtnAddProductCart"
import { Text } from "../Text"
import { Link } from "react-router-dom"

interface IProductCardProps {
  title: string
  price: number
  productId: number
  image: string
  slug: string
}

export function ProductCard(props: IProductCardProps) {
  const { image, price, productId, slug, title } = props
  return (
    <div
      className="flex flex-col justify-center items-center h-[280px] bg-cover bg-right-top relative z-10"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div className="absolute w-full bg-black h-full opacity-60" />
      <Link
        to={`/product-details/${slug}/${productId}`}
        className="relative flex flex-col items-center justify-center p-4 gap-1 z-10"
      >
        <Text label={title} classes="text-white" />
        <Text label={normalizeCurrency(price)} classes="text-white" />
      </Link>
      <BtnAddProductCart product={props} />
    </div>
  )
}
