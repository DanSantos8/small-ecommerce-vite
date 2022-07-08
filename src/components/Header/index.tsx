import { Link } from "react-router-dom"
import { Cart as IconCart, Logo } from "../../assets/images/Icons"

export function Header() {
  return (
    <header className="min-h-[90px] flex justify-center bg-white p-6">
      <nav className="flex flex-1 justify-between  max-w-[990px]">
        <Link to="/" className="flex gap-3 items-center">
          <Logo /> <span className="text-xl font-medium">Earthgames</span>
        </Link>
        <ul className="flex gap-6 items-center">
          <Link to="/" className="text-base font-medium">
            <li>Discover</li>
          </Link>
          <Link to="/cart" className="text-base font-medium">
            <li>My Cart</li>
          </Link>
          <Link
            to="/cart"
            className="p-2 border-2 rounded-full border-gray-300 shadow-lg"
          >
            <li>
              <IconCart />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
