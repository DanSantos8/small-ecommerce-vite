import { Header } from "../Header"

export function Template(props: { children: JSX.Element | JSX.Element[] }) {
  const { children } = props
  return (
    <div className="max-w-6xl flex justify-center min-h-screen m-auto bg-slate-200 p-6">
      <div className="flex flex-col flex-1 max-w-[990px]">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}
