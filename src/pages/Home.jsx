import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { products } from '../data/products'

const Home = () => {
  const featuredProducts = products.filter(product => product.featured)
  const newProducts = products.filter(product => product.new)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop"
            alt="Fashion Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Touch of Style
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover unique, high-quality clothing that expresses your individual style and elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/store" className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100">
              Shop Collection
            </Link>
            <Link to="/about" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-neutral-900">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Featured Collection</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Curated pieces that embody our commitment to quality, style, and timeless elegance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.new && (
                    <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 text-sm font-medium">
                      New
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-neutral-600 mb-2">${product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Our Philosophy</h2>
              <p className="text-lg text-neutral-600 mb-6">
                At Touch of Style, we believe that fashion is more than just clothing—it's a form of self-expression. 
                Each piece in our collection is carefully selected to bring out your unique personality and style.
              </p>
              <p className="text-lg text-neutral-600 mb-8">
                We work with talented designers and artisans who share our passion for quality craftsmanship and 
                attention to detail. From luxurious fabrics to perfect tailoring, every element is considered to 
                ensure you look and feel your best.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Brand Philosophy"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">New Arrivals</h2>
            <p className="text-lg text-neutral-600">
              Fresh styles just added to our collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 text-sm font-medium">
                    New
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-neutral-600 mb-2">${product.price}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-neutral-600">(4.8)</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/store" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Style?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of fashion enthusiasts and get exclusive access to new collections, 
            special offers, and style tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/store" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
              Shop Now
            </Link>
            <Link to="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-600">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
