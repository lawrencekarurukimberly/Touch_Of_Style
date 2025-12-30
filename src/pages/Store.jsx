import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Grid, List } from 'lucide-react'
import { products, categories } from '../data/products'

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'new':
        return (b.new ? 1 : 0) - (a.new ? 1 : 0)
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    }
  })

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Our Collection</h1>
          <p className="text-lg text-neutral-600">
            Discover our carefully curated selection of premium fashion pieces
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="featured">Featured</option>
                <option value="name">Name: A-Z</option>
                <option value="new">New Arrivals</option>
              </select>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-neutral-600">
              Showing {sortedProducts.length} products
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-neutral-400 hover:text-neutral-600'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-neutral-400 hover:text-neutral-600'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-500 text-lg">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-6"
          }>
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}>
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover ${
                        viewMode === 'list' 
                          ? 'w-full h-full' 
                          : 'w-full h-80'
                      }`}
                    />
                  </Link>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {product.new && (
                    <span className="inline-block bg-primary-100 text-primary-600 text-xs font-medium px-2 py-1 rounded mb-2">
                      New Arrival
                    </span>
                  )}
                  
                  <h3 className="text-lg font-semibold mb-2">
                    <Link to={`/product/${product.id}`} className="hover:text-primary-600 transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-primary-600 font-medium">Contact for Price</span>
                    </div>
                    
                    <Link
                      to={`/product/${product.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Store
