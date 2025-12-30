# Touch of Style - Fashion & Design Boutique

A modern, elegant, and user-friendly e-commerce website for "Touch of Style," a fashion and design shop specializing in unique, high-quality clothing.

## Features

### 🏠 Homepage
- Visually appealing landing page with featured collections
- Brand introduction and philosophy
- High-quality images of latest designs
- New arrivals section
- Call-to-action sections

### 🛍️ Online Store
- Intuitive e-commerce interface with product categories
- Advanced filtering and sorting options
- Search functionality
- Grid and list view modes
- Shopping cart with persistent state

### 📄 Product Details
- Detailed product pages with multiple images
- Product descriptions and specifications
- Size selection and quantity controls
- Customer reviews and ratings
- Related products suggestions

### 📖 About Page
- Brand story and mission
- Designer profile and creative process
- Company timeline and milestones
- Core values and philosophy

### 🎨 Gallery
- Visual showcase of past collections
- Design sketches and behind-the-scenes content
- Interactive image modal viewer
- Collection categorization

### ⭐ Testimonials
- Customer reviews and feedback
- Rating system
- Filterable testimonials by category
- Trust-building statistics

### 📞 Contact Page
- Contact form with validation
- Interactive Google Maps integration
- Store information and hours
- Social media links
- Personalized service booking

### 📱 Mobile Responsiveness
- Fully responsive design for all devices
- Mobile-optimized navigation
- Touch-friendly interface
- Optimized performance

### 🔍 SEO Optimization
- Semantic HTML5 structure
- Meta tags and descriptions
- Optimized images with alt text
- Clean URLs and navigation
- Fast loading times

## Technology Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Fonts**: Google Fonts (Playfair Display, Inter)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd touch_off_style
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Cart.jsx
├── context/            # React Context providers
│   └── CartContext.jsx
├── data/               # Static data
│   └── products.js
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Store.jsx
│   ├── ProductDetail.jsx
│   ├── About.jsx
│   ├── Gallery.jsx
│   ├── Testimonials.jsx
│   └── Contact.jsx
├── App.jsx             # Main App component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Features Implementation

### Shopping Cart
- Add/remove items with size selection
- Quantity adjustment
- Persistent cart state using localStorage
- Real-time cart total calculation
- Slide-out cart interface

### Product Management
- Dynamic product data structure
- Category-based filtering
- Price and name sorting
- Search functionality
- Featured and new product flags

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive navigation menu
- Optimized images for different screen sizes

### User Experience
- Smooth transitions and animations
- Loading states
- Form validation
- Interactive hover effects
- Accessible navigation

## Customization

### Colors and Theme
The color scheme is defined in `tailwind.config.js`:
- Primary colors: Purple/violet palette
- Neutral colors: Grayscale for text and backgrounds
- Custom font families: Playfair Display (serif) and Inter (sans-serif)

### Adding New Products
Update the `src/data/products.js` file with new product objects following the existing structure.

### Modifying Styles
All styles use Tailwind CSS classes. Custom utility classes are defined in `src/index.css`.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## Performance Optimization

- Lazy loading images
- Code splitting with React.lazy
- Optimized bundle size
- Efficient re-renders with React.memo
- CSS purging in production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: hello@touchofstyle.com
- Phone: +1 (555) 123-4567

---

© 2024 Touch of Style. All rights reserved.
