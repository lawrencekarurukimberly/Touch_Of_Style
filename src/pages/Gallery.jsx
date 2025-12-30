import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const collections = [
    {
      title: "Spring/Summer 2024",
      description: "A vibrant collection inspired by blooming gardens and warm sunshine",
      images: [
        {
          id: 1,
          src: "/images/WhatsApp Image 2025-12-29 at 12.22.52 PM.jpeg",
          alt: "Spring Collection Look 1",
          category: "runway"
        },
        {
          id: 2,
          src: "/images/WhatsApp Image 2025-12-29 at 12.22.53 PM (1).jpeg",
          alt: "Spring Collection Look 2",
          category: "runway"
        },
        {
          id: 3,
          src: "/images/WhatsApp Image 2025-12-29 at 12.22.53 PM (2).jpeg",
          alt: "Spring Collection Look 3",
          category: "runway"
        },
        {
          id: 4,
          src: "/images/WhatsApp Image 2025-12-29 at 12.22.53 PM (3).jpeg",
          alt: "Spring Collection Look 4",
          category: "runway"
        }
      ]
    },
    {
      title: "Fall/Winter 2023",
      description: "Elegant layers and rich textures for the modern sophisticate",
      images: [
        {
          id: 5,
          src: "/images/WhatsApp Image 2025-12-29 at 12.22.53 PM.jpeg",
          alt: "Fall Collection Look 1",
          category: "runway"
        },
        {
          id: 6,
          src: "/images/WhatsApp Image 2025-12-29 at 12.22.54 PM (1).jpeg",
          alt: "Fall Collection Look 2",
          category: "runway"
        },
        {
          id: 7,
          src: "/images/WhatsApp Image 2025-12-29 at 12.22.54 PM (2).jpeg",
          alt: "Fall Collection Look 3",
          category: "runway"
        },
        {
          id: 8,
          src: "/images/WhatsApp Image 2025-12-29 at 12.22.54 PM (3).jpeg",
          alt: "Fall Collection Look 4",
          category: "runway"
        }
      ]
    }
  ]

  const behindTheScenes = [
    {
      id: 9,
      src: "/images/WhatsApp Image 2025-12-29 at 12.22.54 PM (1).jpeg",
      alt: "Design Process",
      title: "Design Process",
      description: "Sketching the initial concepts for our latest collection"
    },
    {
      id: 10,
      src: "/images/WhatsApp Image 2025-12-29 at 12.22.54 PM (2).jpeg",
      alt: "Fabric Selection",
      title: "Fabric Selection",
      description: "Choosing the perfect materials for our designs"
    },
    {
      id: 11,
      src: "/images/WhatsApp Image 2025-12-29 at 12.22.54 PM (3).jpeg",
      alt: "Pattern Making",
      title: "Pattern Making",
      description: "Creating precise patterns for perfect fits"
    },
    {
      id: 12,
      src: "/images/WhatsApp Image 2025-12-29 at 12.23.08 PM.jpeg",
      alt: "Photoshoot",
      title: "Photoshoot",
      description: "Behind the scenes of our latest campaign"
    }
  ]

  const designSketches = [
    {
      id: 13,
      src: "/images/WhatsApp Image 2025-12-29 at 12.23.09 PM.jpeg",
      alt: "Evening Dress Sketch",
      title: "Evening Dress Sketch",
      description: "Initial sketch for our signature evening gown"
    },
    {
      id: 14,
      src: "/images/WhatsApp Image 2025-12-29 at 12.22.52 PM.jpeg",
      alt: "Coat Design",
      title: "Coat Design",
      description: "Technical drawing for our wool coat collection"
    },
    {
      id: 15,
      src: "/images/WhatsApp Image 2025-12-29 at 12.22.53 PM (1).jpeg",
      alt: "Accessory Design",
      title: "Accessory Design",
      description: "Concept sketches for our accessory line"
    },
    {
      id: 16,
      src: "/images/WhatsApp Image 2025-12-29 at 12.22.53 PM (2).jpeg",
      alt: "Textile Pattern",
      title: "Textile Pattern",
      description: "Custom textile design development"
    }
  ]

  const openImageModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our collections, design process, and behind-the-scenes moments
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Past Collections</h2>
            <p className="text-lg text-neutral-600">
              Journey through our most memorable runway shows and campaigns
            </p>
          </div>

          {collections.map((collection, index) => (
            <div key={index} className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-serif font-bold mb-2">{collection.title}</h3>
                <p className="text-neutral-600">{collection.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {collection.images.map((image) => (
                  <div key={image.id} className="relative group cursor-pointer" onClick={() => openImageModal(image)}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Behind the Scenes</h2>
            <p className="text-lg text-neutral-600">
              Get an intimate look at our creative process and the making of our collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {behindTheScenes.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative group cursor-pointer" onClick={() => openImageModal(image)}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-neutral-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Sketches */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Design Sketches</h2>
            <p className="text-lg text-neutral-600">
              From concept to creation - the artistic journey of our designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designSketches.map((sketch) => (
              <div key={sketch.id} className="relative group cursor-pointer" onClick={() => openImageModal(sketch)}>
                <img
                  src={sketch.src}
                  alt={sketch.alt}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">{sketch.title}</h3>
                  <p className="text-sm text-neutral-600">{sketch.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold">{selectedImage.title || selectedImage.alt}</h3>
              {selectedImage.description && (
                <p className="text-neutral-300 mt-2">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
