import { useState, useContext } from "react"
import data from "../db.json"
import CartContext from "../context/context"

export default function Cart() {
  const [items] = useState(data)
  const { handleCloseCart } = useContext(CartContext)

  return (
    <>
      <aside className="p-5 bg-white text-slate-900 fixed right-0 top-0 h-full z-50 w-11/12 sm:w-9/12 md:w-7/12 xl:w-5/12">
        <ul className="flex items-center justify-between">
          <li>
            <h2 className="text-slate-800 text-4xl font-bold md:text-5xl uppercase">
              Your cart
            </h2>
          </li>
          <li>
            <button
              onClick={handleCloseCart}
              className="font-light text-slate-900 border-b border-transparent hover:border-slate-900 transition-all duration-150"
            >
              Close
            </button>
          </li>
        </ul>

        <div className="grid grid-cols-1 gap-5 py-10">
          {items.products.map(({ id, name, small }) => (
            <article key={id} className="odd:bg-gray-100">
              <ul className="flex items-center justify-between  p-1 shadow rounded">
                <li className="flex items-center">
                  <img
                    src={small}
                    alt={name}
                    className="w-12 h-12 rounded-full mr-2"
                  />
                  {name}
                </li>
                <li>
                  {/* Try to make this button work by writing a delete function for it. Additional challenge - write the function in the context api and reference it here */}
                  <button className="bg-red-500 text-white py-1 px-4 border-2 border-red-500 hover:bg-red-600 transition-all duration-150 text-sm">
                    Remove Item
                  </button>
                </li>
              </ul>
            </article>
          ))}
        </div>

        <ul>
          <li>
            {/* Try to make this button work by writing a clear all function for it. Additional challenge - write the function in the context api and reference it here
             */}
            <button className="py-2 px-10 text-white border-2 border-slate-900 bg-slate-800 hover:bg-slate-900 transition-all duration-150">
              Clear cart
            </button>
          </li>
        </ul>
      </aside>
    </>
  )
}
