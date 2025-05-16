import { ChatWidget } from '@/components/ChatWidget';
import { StoreHeader } from '@/components/StoreHeader';
import { StoreFooter } from '@/components/StoreFooter';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  const products = [
    {
      title: "SF Mission Cold Brew",
      description: "Smooth, low-acid cold brew crafted in the heart of San Francisco's Mission District",
      price: "$18.99",
      imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
    },
    {
      title: "Portland Breakfast Blend",
      description: "Bold, medium roast with hints of hazelnut and caramel, roasted in the Pacific Northwest",
      price: "$16.99",
      imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf"
    },
    {
      title: "Brooklyn Dark Roast",
      description: "Rich, full-bodied dark roast from NYC's finest micro-roastery in Williamsburg",
      price: "$19.99",
      imageUrl: "https://images.unsplash.com/photo-1442550528053-c431ecb55509"
    },
    {
      title: "Tech Hub Sampler Pack",
      description: "Try our top picks from all our tech hub cities - perfect for the adventurous developer",
      price: "$24.99",
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
      title: "Seattle Espresso Blend",
      description: "Bold and balanced espresso blend perfect for lattes and cappuccinos",
      price: "$20.99",
      imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd"
    },
    {
      title: "Chicago Roasters Choice",
      description: "A rotating selection of our favorite single-origin beans from the Windy City",
      price: "$22.99",
      imageUrl: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff"
    },
    {
      title: "Denver Mountain Blend",
      description: "High-altitude roasted blend with notes of chocolate and pine",
      price: "$21.99",
      imageUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096"
    },
    {
      title: "Boston Harbor Decaf",
      description: "Swiss water processed decaf with all the flavor, none of the jitters",
      price: "$17.99",
      imageUrl: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]/30">
      <StoreHeader />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e" 
          alt="Coffee beans being roasted" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
            Coffee for Developers,<br />By Developers
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl animate-fade-in">
            Carefully curated coffee from America's top tech hubs: NYC, SF, and beyond
          </p>
          <Button 
            className="text-lg px-8 py-6 animate-fade-in bg-black hover:bg-[#222222] text-white"
          >
            Explore Our Roasts
          </Button>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#332211] mb-4">Why Developers Digest Coffee?</h2>
            <p className="text-lg text-[#5C4033] max-w-3xl mx-auto">
              We source our beans from the cities where the world's best software is written. 
              Each roast is crafted to fuel your coding sessions with the perfect balance of flavor and caffeine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white/50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#332211]">Ethically Sourced</h3>
              <p className="text-[#5C4033]">Direct trade relationships with farmers ensuring fair compensation</p>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#332211]">Precision Roasted</h3>
              <p className="text-[#5C4033]">Data-driven roasting profiles for consistent, perfect results</p>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#332211]">Developer Tested</h3>
              <p className="text-[#5C4033]">Each blend tested during real coding sessions</p>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#332211] mb-8">Featured Blends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-black rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Join Our Coffee Club</h2>
            <p className="mb-6">Get fresh beans delivered monthly and exclusive access to limited roasts from top tech cities.</p>
            <Button className="bg-white text-black hover:bg-[#222222]">Subscribe Now</Button>
          </div>
        </section>
      </main>

      <StoreFooter />
      <ChatWidget />
    </div>
  );
};

export default Index;