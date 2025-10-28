import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BannerCarousel.css';

const banners = [
  {
    id: 1,
    title: 'Summer Sale - Up to 50% OFF',
    subtitle: 'On all fashion items',
    description: 'Discover fresh looks curated for the season. Limited-time offers on top brands and trends.',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/categories?category=fashion'
  },
  {
    id: 2,
    title: 'New Electronics Collection',
    subtitle: 'Latest gadgets at amazing prices',
    description: 'Upgrade your setup with cutting-edge devices. Smart picks for work, play, and everything between.',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/categories?category=electronics'
  },
  {
    id: 3,
    title: 'Sports Equipment Sale',
    subtitle: 'Get fit with 30% discount',
    description: 'Gear up with essentials for training and performance. Save on apparel, accessories, and more.',
    image: 'https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/categories?category=sports'
  },
  {
    id: 4,
    title: 'Home Décor Special',
    subtitle: 'Transform your space',
    description: 'Elevate every room with modern accents. Cozy textures and timeless pieces, now on offer.',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/categories?category=home-accessories'
  },
  {
    id: 5,
    title: 'Premium Bags Collection',
    subtitle: 'Luxury meets affordability',
    description: 'From totes to travel-ready companions. Discover craftsmanship without compromise.',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/categories?category=bags'
  },
  {
    id: 6,
    title: 'Health & Wellness Week',
    subtitle: 'Take care of yourself',
    description: 'Holistic picks for daily balance. Thoughtfully sourced wellness and self-care staples.',
    image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/categories?category=medicine'
  },
  {
    id: 7,
    title: 'Exclusive Offers Zone',
    subtitle: 'Grab limited-time deals now!',
    description: 'Don’t miss lightning savings on bestsellers. New drops daily while stocks last.',
    image: 'https://hogatoga.com/wp-content/uploads/2022/09/Flipkart-Big-Billion-Days-2022-Sale-hogatoga.jpg',
    path: '/offers'
  },
  {
    id: 8,
    title: 'Fashion Forward',
    subtitle: 'Trending styles just arrived',
    description: 'Street, chic, and everything between. Find your new signature look today.',
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/categories?category=fshion'
  },
  {
    id: 9,
    title: 'Fitness Fest',
    subtitle: 'Your journey starts here',
    description: 'From beginner to pro, gear that moves with you. Built for comfort, performance, and value.',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/categories?category=homeopathy'
  },
  {
    id: 10,
    title: 'Grand Clearance Sale',
    subtitle: 'Everything must go!',
    description: 'Final markdowns across categories. Big brands, bigger savings, last chance.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
    path: '/'
  }
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handleSlideClick = (banner) => {
    if (banner.path) {
      navigate(banner.path);
    }
  };

  return (
    <div className="banner-carousel-root">
      <div
        className="banner-carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="banner-carousel-slide banner-clickable"
            onClick={() => handleSlideClick(banner)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSlideClick(banner);
              }
            }}
            aria-label={`Open ${banner.title}`}
            title={banner.title}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="banner-carousel-image"
              loading="eager"
            />

            <div className="banner-global-overlay" />
            <div className="banner-vignette" />

            <div className="banner-carousel-content glass-card" aria-live="polite">
              <div className="banner-text">
                <h2 className="banner-title">{banner.title}</h2>
                <p className="banner-subtitle">{banner.subtitle}</p>
                <p className="banner-desc">{banner.description}</p>
                <button
                  type="button"
                  className="banner-cta animated-cta"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--x', `${x}%`);
                    e.currentTarget.style.setProperty('--y', `${y}%`);
                  }}
                  onClick={() => handleSlideClick(banner)}
                >
                  <span className="spark"></span>
                  <span className="label">Explore now →</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="banner-carousel-arrow left"
        aria-label="Previous banner"
      >
        {"<"}
      </button>
      <button
        onClick={goToNext}
        className="banner-carousel-arrow right"
        aria-label="Next banner"
      >
        {">"}
      </button>

      <div className="banner-carousel-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`banner-carousel-dot ${currentIndex === index ? 'active' : ''}`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
