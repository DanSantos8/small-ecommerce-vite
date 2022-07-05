import { useGetProductsCategoriesQuery } from "../../graphql/generated"
import { Text } from "../Text"
import { normalizeCurrency } from "../../utils/functions"
import { BtnAddProductCart } from "../Button"
import { IChildren } from "../../utils/types"
import { Link } from "react-router-dom"

interface IProductCardProps {
  title: string
  price: number
  productId: number
  image: string
  slug: string
}

function ProductCard(props: IProductCardProps) {
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

function ProductsGrid(props: IChildren) {
  const { children } = props
  return <div className="grid grid-cols-2 gap-5">{children}</div>
}

export function Section(props: IChildren) {
  const { children } = props
  return (
    <section className="min-h-[200px] flex flex-1 flex-col my-6 ">
      {children}
    </section>
  )
}

export function Categories() {
  const { data } = useGetProductsCategoriesQuery()

  if (!data) return <span>Loading...</span>

  return (
    <>
      {data.categories.map((category) => (
        <Section key={category.categoryId}>
          <Text label={category.title} as="h2" />
          <ProductsGrid>
            {category.products.map((product) => (
              <ProductCard {...product} />
            ))}
          </ProductsGrid>
        </Section>
      ))}
    </>
  )
}
