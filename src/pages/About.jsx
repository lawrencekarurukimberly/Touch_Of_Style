import { Award, Heart, Users, Target } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: "Passion for Quality",
      description: "We are obsessed with quality in every detail, from fabric selection to the final stitch."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do, inspiring us to create exceptional experiences."
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Craftsmanship",
      description: "We celebrate the art of traditional craftsmanship combined with contemporary design."
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: "Sustainability",
      description: "We are committed to sustainable practices that respect both people and the planet."
    }
  ]

  const timeline = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Touch of Style was founded with a simple mission: to bring elegant, high-quality fashion to discerning customers."
    },
    {
      year: "2017",
      title: "First Boutique",
      description: "Opened our flagship store in New York, bringing our vision to life in a beautiful physical space."
    },
    {
      year: "2019",
      title: "Online Launch",
      description: "Expanded our reach globally with the launch of our e-commerce platform."
    },
    {
      year: "2023",
      title: "Sustainability Focus",
      description: "Committed to sustainable fashion practices and ethical sourcing."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A journey of passion, creativity, and commitment to timeless elegance
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">The Touch of Style Journey</h2>
              <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Touch of Style was born from a simple observation: fashion should be both beautiful and meaningful. 
                  Our founder, Sarah Chen, envisioned a boutique that would curate pieces that tell stories, 
                  celebrate craftsmanship, and empower individuals to express their unique style.
                </p>
                <p>
                  What started as a small collection of carefully selected pieces has grown into a destination 
                  for those who appreciate quality, elegance, and the art of dressing well. We believe that 
                  clothing is not just about appearance—it's about confidence, comfort, and self-expression.
                </p>
                <p>
                  Today, Touch of Style continues to evolve while staying true to our core values: quality, 
                  sustainability, and the celebration of individual style. Every piece in our collection is 
                  chosen with care, ensuring it meets our high standards for design, craftsmanship, and timeless appeal.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=500&fit=crop"
                alt="Brand Story"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Designer Profile */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Meet Our Designer</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The creative vision behind our collections
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b332c5ca?w=600&h=600&fit=crop"
                alt="Designer"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-serif font-bold mb-4">Sarah Chen</h3>
              <p className="text-xl text-primary-600 mb-6">Founder & Creative Director</p>
              <div className="space-y-4 text-neutral-600">
                <p>
                  With over 15 years of experience in the fashion industry, Sarah brings a unique perspective 
                  that blends Eastern aesthetics with Western design principles. Her journey began in the 
                  ateliers of Paris, where she honed her skills in pattern making and textile design.
                </p>
                <p>
                  Sarah's design philosophy is rooted in the belief that fashion should be both beautiful 
                  and functional. She draws inspiration from art, architecture, and nature, creating pieces 
                  that are contemporary yet timeless, elegant yet wearable.
                </p>
                <p>
                  "Fashion is not just about clothes," Sarah says. "It's about how we present ourselves 
                  to the world, how we express who we are without saying a word. At Touch of Style, we 
                  help our customers tell their unique stories through carefully curated pieces that 
                  celebrate individuality."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Values</h2>
            <p className="text-lg text-neutral-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-neutral-600">
              Milestones that shaped our story
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center mb-8">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-2xl font-bold text-primary-600">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            To inspire confidence and celebrate individuality through thoughtfully curated fashion that 
            combines timeless elegance with contemporary design. We are committed to providing exceptional 
            quality, sustainable practices, and personalized service that makes every customer feel 
            uniquely beautiful and confident in their style choices.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
