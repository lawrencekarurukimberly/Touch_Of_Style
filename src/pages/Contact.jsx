import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: "Visit Our Boutique",
      details: [
        "Westlands Shopping District",
        "Nairobi, Kenya",
        "East Africa"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary-600" />,
      title: "Call Us",
      details: [
        "+254 795 947 566",
        "WhatsApp: +254 795 947 566",
        "Mon-Fri: 9am-6pm EAT",
        "Sat: 10am-5pm EAT"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary-600" />,
      title: "Email Us",
      details: [
        "touchofstyle27@gmail.com",
        "support@touchofstyle27@gmail.com",
        "press@touchofstyle27@gmail.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: "Store Hours",
      details: [
        "Monday - Friday: 10am - 7pm",
        "Saturday: 10am - 6pm",
        "Sunday: 12pm - 5pm"
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for inquiries, appointments, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-neutral-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
              <p className="text-neutral-600 mb-8">
                Have a question about our products, need styling advice, or want to schedule a personal shopping appointment? We're here to help!
              </p>
              
              {submitMessage && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="styling">Styling Appointment</option>
                    <option value="order">Order Status</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Find Us</h2>
              
              {/* Map Placeholder */}
              <div className="bg-neutral-100 rounded-lg overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8173114476!2d36.82266558459395!3d-1.2812300584650456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s-1.2812300584650456%2C36.82485026437571!5e0!3m2!1sen!2ske!4v1629791323787!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full"
                  title="Store Location Map"
                />
              </div>

              <div className="bg-neutral-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Connect on WhatsApp</h3>
                <p className="text-neutral-600 mb-4">
                  Chat with us directly on WhatsApp for quick responses and personalized assistance.
                </p>
                <a
                  href="https://wa.me/254795947566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center btn-primary bg-green-600 hover:bg-green-700"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <p className="text-neutral-600 mb-4">
                  Stay connected for the latest updates, new arrivals, and exclusive offers.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/touchofstylefashion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@wairati1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.317 0 2.55-.281 3.666-.784.572-.25 1.065-.59 1.465-1.02.404-.433.72-.925.94-1.46.224-.534.34-1.12.402-1.735.062-.615.04-1.242.04-1.874 0-1.632 0-3.263.002-4.895-.003-.615-.04-1.242-.04-1.874-.038-.615.22-1.202.402-1.735.22-.535.536-1.027.94-1.46.4-.433.893-.77 1.465-1.02 1.115-.503 2.35-.784 3.666-.784zm-3.597 2.268c-.331 0-.6-.268-.6-.6s.269-.6.6-.6h1.8c.331 0 .6.268.6.6s-.269.6-.6.6zm5.754 0c-.331 0-.6-.268-.6-.6s.269-.6.6-.6h1.8c.331 0 .6.268.6.6s-.269.6-.6.6z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="mt-6 bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Have a Quick Question?</h3>
                <p className="text-neutral-600 mb-4">
                  Check out our FAQ section for answers to commonly asked questions.
                </p>
                <button className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
                  View FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Personalized Services</h2>
            <p className="text-lg text-neutral-600">
              Experience the Touch of Style difference with our exclusive services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Personal Styling</h3>
              <p className="text-neutral-600 mb-4">
                Book a one-on-one styling session with our fashion experts to discover your perfect look.
              </p>
              <button className="btn-primary">Book Appointment</button>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Virtual Consultation</h3>
              <p className="text-neutral-600 mb-4">
                Can't visit us in person? Schedule a virtual styling session from the comfort of your home.
              </p>
              <button className="btn-primary">Schedule Call</button>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Private Shopping</h3>
              <p className="text-neutral-600 mb-4">
                Enjoy a private shopping experience outside regular hours with personalized attention.
              </p>
              <button className="btn-primary">Request Private Session</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
