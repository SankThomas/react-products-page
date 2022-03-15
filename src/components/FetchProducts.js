import { useState, useContext } from "react"
import data from "../db.json"
import { Link } from "react-router-dom"
import Cart from "./Cart"
import CartContext from "../context/context"

export default function FetchProducts() {
  const [items] = useState(data)
  const { cart, handleOpenCart } = useContext(CartContext)

  return (
    <>
      <section className="px-5 py-20 md:max-w-4xl md:mx-auto lg:max-w-6xl grid grid-cols-1 gap-10 lg:gap-20">
        {items.products.map(({ id, name, desc, small }) => (
          <article key={id} className="md:grid grid-cols-2 gap-10 items-center">
            <div>
              <img src={small} alt={name} />
            </div>

            <div>
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-5">
                {name}
              </h2>
              <p className="text-slate-300">{`${desc.substring(0, 200)}...`}</p>

              <ul className="flex items-center mt-5 md:mt-10">
                <li className="mr-5">
                  <Link
                    to={`/${name}`}
                    className="bg-transparent border-2 py-2 px-4 text-white"
                  >
                    More Details
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleOpenCart}
                    className="bg-white text-slate-900 py-2 px-6"
                  >
                    Add to Cart
                  </button>
                </li>
              </ul>
            </div>
          </article>
        ))}

        {cart && <Cart />}
      </section>
    </>
  )
}
