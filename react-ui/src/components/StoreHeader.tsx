import { ShoppingCart, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StoreHeader = () => {
  return (
    <header className="w-full bg-black border-b border-[#8B4513]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Developers Digest Coffee</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-[#FDE1D3] transition-colors">Shop</a>
            <a href="#" className="text-white hover:text-[#FDE1D3] transition-colors">Subscriptions</a>
            <a href="#" className="text-white hover:text-[#FDE1D3] transition-colors">Learn</a>
            <a href="#" className="text-white hover:text-[#FDE1D3] transition-colors">About Us</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-[#FDE1D3] hover:bg-[#8B4513]/10">
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};