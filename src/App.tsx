import { Header } from "./components/Header"
import { Recomendation } from "./components/Recomendation"
import { Categories } from "./components/Section"

function App() {
  return (
    <>
      <div className="max-w-6xl flex justify-center min-h-screen m-auto bg-slate-200 p-6">
        <div className="flex flex-col flex-1 max-w-[990px]">
          <Header />
          <main>
            <Recomendation />
            <Categories />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
