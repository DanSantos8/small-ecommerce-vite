import { Cart, Logo } from "../../assets/images/Icons"

export function Header() {
  return (
    <header className="flex min-h-[90px] justify-between">
      <div className="flex gap-3 items-center">
        <Logo /> <span className="text-xl font-medium">Earthgames</span>
      </div>
      <div className="flex gap-6 items-center">
        <span className="text-base font-medium">Discover</span>
        <span className="text-base font-medium">My Cart</span>
        <span className="p-2 border-2 rounded-full border-gray-300 shadow-lg">
          <Cart />
        </span>
      </div>
    </header>
  )
}
