import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Plus, Minus, Star, Heart, Share2, Truck, Shield, RefreshCw } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id))
    setProduct(foundProduct)
    if (foundProduct?.sizes?.length > 0) {
      setSelectedSize(foundProduct.sizes[0])
    }
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/store" className="btn-primary">
            Back to Store
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize, quantity)
    }
  }

  const productImages = [
    product.image,
    product.image,
    product.image
  ]

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/store" className="flex items-center text-neutral-600 hover:text-primary-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Store
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary-600' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.new && (
              <span className="inline-block bg-primary-100 text-primary-600 text-sm font-medium px-3 py-1 rounded mb-4">
                New Arrival
              </span>
            )}
            
            <h1 className="text-3xl font-serif font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-neutral-600">(4.8 reviews)</span>
            </div>


            <p className="text-neutral-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Contact for Pricing */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-3">Contact for Pricing</h3>
              <p className="text-neutral-600 mb-4">
                For pricing information and availability, please contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:touchofstyle27@gmail.com"
                  className="btn-primary"
                >
                  Email Us
                </a>
                <a
                  href="https://wa.me/254795947566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary bg-green-600 hover:bg-green-700 text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Select Size
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      selectedSize === size
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-neutral-300 hover:border-neutral-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-neutral-300 rounded-md hover:bg-neutral-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-neutral-300 rounded-md hover:bg-neutral-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Heart className="h-5 w-5 mr-2" />
                Wishlist
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="text-sm font-medium">Free Shipping</p>
                    <p className="text-xs text-neutral-500">On orders over $100</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="text-sm font-medium">Secure Payment</p>
                    <p className="text-xs text-neutral-500">100% protected</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RefreshCw className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="text-sm font-medium">Easy Returns</p>
                    <p className="text-xs text-neutral-500">30-day policy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t mt-8 pt-8">
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-neutral-500">Material:</span>
                  <span className="ml-2 font-medium">Premium Fabric</span>
                </div>
                <div>
                  <span className="text-neutral-500">Care:</span>
                  <span className="ml-2 font-medium">Dry Clean Only</span>
                </div>
                <div>
                  <span className="text-neutral-500">Origin:</span>
                  <span className="ml-2 font-medium">Made in Italy</span>
                </div>
                <div>
                  <span className="text-neutral-500">SKU:</span>
                  <span className="ml-2 font-medium">TS-{product.id.toString().padStart(6, '0')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
