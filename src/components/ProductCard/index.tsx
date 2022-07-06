import { normalizeCurrency } from "../../utils/functions"
import { BtnAddProductCart } from "../Button"
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
  return (
    <Link
      to={`/product-details/${props.slug}/${props.productId}`}
      className="flex flex-col h-[280px] bg-cover bg-right-top relative z-10"
      style={{
        backgroundImage: `url('${props.image}')`,
      }}
    >
      <div className="absolute w-full bg-black h-full opacity-60" />
      <div className="relative flex flex-1 flex-col items-center justify-center p-4 gap-1">
        <Text label={props.title} classes="text-white" />
        <Text label={normalizeCurrency(props.price)} classes="text-white" />
        <BtnAddProductCart productId={props.productId} />
      </div>
    </Link>
  )
}
