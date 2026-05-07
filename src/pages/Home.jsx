import HeroVideo from '../components/shared/HeroVideo';
import FeaturedSlider from '../components/shared/FeaturedSlider';
import EmotionIntro from '../components/shared/EmotionIntro';
import img1 from '../assets/images/img1.jpg';
import design2 from '../assets/images/design2.jpg';
import design3 from '../assets/images/design3.jpg';
import slider21 from '../assets/images/slider21.jpg';
import slider22 from '../assets/images/slider22.jpg';

export default function Home() {
  const featuredDesigns = [
    {
      id: 'secrets-of-fashion',
      title: 'The Secrets of Fashion',
      description: "Don't tell the Angels...",
      label: '30',
      image: img1,
      link: '/design/secrets-of-fashion'
    },
    {
      id: 'betrayal-to-strength',
      title: 'Betrayal to Strength',
      description: 'Every broken piece creates new power...',
      label: 'Featured',
      image: design2,
      link: '/design/betrayal-to-strength'
    },
    {
      id: 'dark-elegance',
      title: 'Dark Elegance',
      description: 'Luxury meets mystery...',
      label: 'Latest',
      image: design3,
      link: '/design/dark-elegance'
    },
    {
      id: 'urban-rebellion',
      title: 'Urban Rebellion',
      description: 'Express your inner voice...',
      label: 'Trending',
      image: slider21,
      link: '/design/urban-rebellion'
    },
    {
      id: 'ethereal-dreams',
      title: 'Ethereal Dreams',
      description: 'Where fantasy meets reality...',
      label: 'New',
      image: slider22,
      link: '/design/ethereal-dreams'
    }
  ];

  return (
    <div className="home-page">
      <HeroVideo />
      <FeaturedSlider
        designs={featuredDesigns}
        title="From Pain to Power"
        subtitle="Every design tells a deeper story — where emotion becomes identity, and broken moments shape new beauty."
      />
      <EmotionIntro />
    </div>
  );
}
