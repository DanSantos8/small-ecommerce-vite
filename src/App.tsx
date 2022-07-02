import { useQuery } from "@apollo/client"
import { Header } from "./components/Header"
import { Recomendation } from "./components/Recomendation"
import { GET_CATEGORIES_QUERY } from "./graphql/categories"

interface ICategory {
  slug: string
  title: string
  categoryId: string
}

interface IData {
  categories: ICategory[]
}

function App() {
  const { data } = useQuery<IData>(GET_CATEGORIES_QUERY)

  return (
    <>
      <div className="max-w-6xl flex justify-center min-h-screen m-auto bg-slate-200 p-6">
        <div className="flex flex-col flex-1 max-w-[990px]">
          <Header />
          <main>
            <Recomendation />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
