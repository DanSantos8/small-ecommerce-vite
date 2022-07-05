import { Link } from "react-router-dom"
import { Cart, Logo } from "../../assets/images/Icons"

export function Header() {
  return (
    <header className="flex min-h-[90px] justify-between">
      <Link to="/" className="flex gap-3 items-center">
        <Logo /> <span className="text-xl font-medium">Earthgames</span>
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/" className="text-base font-medium">
          Discover
        </Link>
        <span className="text-base font-medium">My Cart</span>
        <span className="p-2 border-2 rounded-full border-gray-300 shadow-lg">
          <Cart />
        </span>
      </div>
    </header>
  )
}
