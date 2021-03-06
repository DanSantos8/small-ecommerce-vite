import { Recomendation } from "../components/Recomendation"
import { Categories } from "../components/Categories"
import { Template } from "../components/Template"

function Home() {
  return (
    <>
      <Template>
        <Recomendation />
        <Categories />
      </Template>
    </>
  )
}

export default Home
