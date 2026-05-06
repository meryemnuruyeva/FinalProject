import HeroVideo from '../components/shared/HeroVideo';
import FeaturedSlider from '../components/shared/FeaturedSlider';
import EmotionIntro from '../components/shared/EmotionIntro';

export default function Home() {
  const featuredDesigns = [
    {
      title: 'The Secrets of Fashion',
      description: "Don't tell the Angels...",
      label: '30',
      image: null
    },
    {
      title: 'Betrayal to Strength',
      description: 'Every broken piece creates new power...',
      label: 'Featured',
      image: null
    },
    {
      title: 'Dark Elegance',
      description: 'Luxury meets mystery...',
      label: 'Latest',
      image: null
    },
    {
      title: 'Urban Rebellion',
      description: 'Express your inner voice...',
      label: 'Trending',
      image: null
    },
    {
      title: 'Ethereal Dreams',
      description: 'Where fantasy meets reality...',
      label: 'New',
      image: null
    }
  ];

  return (
    <div className="home-page">
      <HeroVideo />
      <FeaturedSlider designs={featuredDesigns} />
      <EmotionIntro />
    </div>
  );
}
