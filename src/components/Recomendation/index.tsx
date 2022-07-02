import { useQuery } from "@apollo/client"
import { GET_RECOMENDED_ITEM } from "../../graphql/categories"
export function Recomendation() {
  const { data } = useQuery(GET_RECOMENDED_ITEM)
  console.log(data)
  return (
    <div className="flex flex-1 justify-center min-h-[360px] bg-gray-900"></div>
  )
}
