import { useState } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [filter, setFilter] = useState('all')

  const testimonials = [
    {
      id: 1,
      name: "Emily Rodriguez",
      location: "New York, NY",
      rating: 5,
      date: "October 2024",
      category: "product",
      product: "Elegant Evening Dress",
      comment: "Absolutely stunning dress! The quality exceeded my expectations and it fit perfectly. I received so many compliments at the gala. This is now my go-to boutique for special occasions.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c5ca?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      date: "October 2024",
      category: "service",
      comment: "Exceptional customer service! The staff helped me find the perfect outfit for my wedding. Their attention to detail and personal styling advice made all the difference.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Sophia Martinez",
      location: "Los Angeles, CA",
      rating: 5,
      date: "September 2024",
      category: "product",
      product: "Classic Wool Coat",
      comment: "This coat is worth every penny! The craftsmanship is incredible and it keeps me warm while looking chic. The attention to detail in the stitching and buttons is remarkable.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 4,
      date: "September 2024",
      category: "experience",
      comment: "Great shopping experience both online and in-store. The website is easy to navigate, and the in-store ambiance is wonderful. Love the curated selection!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      name: "Jessica Williams",
      location: "Boston, MA",
      rating: 5,
      date: "August 2024",
      category: "product",
      product: "Silk Blouse",
      comment: "The silk blouse is absolutely gorgeous! The fabric feels luxurious and the cut is very flattering. I've already worn it to work and received multiple compliments.",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop"
    },
    {
      id: 6,
      name: "Robert Anderson",
      location: "Seattle, WA",
      rating: 5,
      date: "August 2024",
      category: "service",
      comment: "Outstanding service from start to finish. The personal styling session helped me discover pieces I wouldn't have chosen on my own. Very knowledgeable staff!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      id: 7,
      name: "Amanda Foster",
      location: "Miami, FL",
      rating: 5,
      date: "July 2024",
      category: "product",
      product: "Cashmere Sweater",
      comment: "The softest cashmere I've ever felt! Worth every penny. The sweater has become a staple in my wardrobe. The quality is exceptional and it's held up beautifully after washing.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
    },
    {
      id: 8,
      name: "James Mitchell",
      location: "Denver, CO",
      rating: 4,
      date: "July 2024",
      category: "experience",
      comment: "Great boutique with unique pieces you won't find elsewhere. Appreciate the focus on quality over quantity. The loyalty program is a nice bonus too!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  ]

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter)

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'
        }`}
      />
    ))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop"
            alt="Testimonials Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Customer Stories</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Hear what our valued customers have to say about their Touch of Style experience
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{testimonials.length}+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{averageRating.toFixed(1)}</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter('product')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'product'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              Product Reviews
            </button>
            <button
              onClick={() => setFilter('service')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'service'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              Customer Service
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'experience'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              Shopping Experience
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-neutral-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-start mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-neutral-600 text-sm">{testimonial.location}</p>
                  </div>
                  <Quote className="h-6 w-6 text-primary-200 flex-shrink-0" />
                </div>
                
                <div className="flex items-center mb-3">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-neutral-500">{testimonial.date}</span>
                </div>
                
                {testimonial.product && (
                  <p className="text-sm text-primary-600 font-medium mb-3">
                    Product: {testimonial.product}
                  </p>
                )}
                
                <p className="text-neutral-700 leading-relaxed">
                  {testimonial.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have you shopped with us? We'd love to hear about your experience and 
            help others discover the Touch of Style difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:reviews@touchofstyle.com"
              className="btn-primary bg-white text-primary-600 hover:bg-neutral-100"
            >
              Share Your Story
            </a>
            <a
              href="/contact"
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
