import { Header } from "../Header"

export function Template(props: { children: JSX.Element | JSX.Element[] }) {
  const { children } = props
  return (
    <div className="max-w-6xl flex flex-col flex-1 align min-h-screen m-auto bg-slate-200">
      <Header />
      <div className="flex flex-1 justify-center p-6">
        <main className="flex flex-1 flex-col max-w-[990px]">{children}</main>
      </div>
    </div>
  )
}
