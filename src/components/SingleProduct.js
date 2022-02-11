import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import data from "../db.json"

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const findProduct = () => {
      const newProduct = data.products.find((product) => product.name === name)
      setSingleProduct(newProduct)
      console.log(newProduct)
    }

    findProduct()
  }, [name])

  const { desc, large } = singleProduct

  return (
    <>
      <section className="py-10 lg:py-20 px-5">
        <div className="md:max-w-4xl md:mx-auto lg:max-w-6xl">
          <div>
            <article>
              <img src={large} alt={name} />
              <h2 className="text-white text-5xl lg:text-8xl font-bold my-10">
                {name}
              </h2>
              <p className="text-slate-300">{desc}</p>
            </article>

            <ul className="flex items-center mt-5 md:mt-10">
              <li className="mr-5">
                <button className="bg-white text-slate-900 py-2 px-6">
                  Add to Cart
                </button>
              </li>
              <li>
                <Link to="/" className="text-slate-300 hover:text-white">
                  Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
