import { PopularProductCard } from "../components"
import { products } from "../constants"
function PopularProducts() {
  return (
    <section id="products"
        className="max-container max-sm:mt-12"
    >
        <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular</span> Products</h2>
            <p className="lg:max-w-lg font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
        </div>
        <div className="grid grid-cols-1 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-14">
            {products.map((product, index)=>(
                <PopularProductCard key={index} {...product}/>
            ))}
        </div>
    </section>
  )
}

export default PopularProducts