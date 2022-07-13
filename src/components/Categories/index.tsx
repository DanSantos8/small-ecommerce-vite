import { useGetProductsCategoriesQuery } from "../../graphql/generated"
import { Text } from "../Text"
import { ProductCard } from "../ProductCard"

export function Categories() {
  const { data } = useGetProductsCategoriesQuery()

  if (!data) return <span>Loading...</span>

  return (
    <>
      {data.categories.map((category) => (
        <section className="min-h-[200px] flex flex-col my-6 gap-1 ">
          <Text label={category.title} classes="text-xl" as="h2" />
          <div className="grid grid-cols-2 gap-5">
            {category.products.map((product) => (
              <ProductCard {...product} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
