import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const ProductCard = ({ title, description, price, imageUrl }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-[420px] flex flex-col">
      <CardHeader className="p-0">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-lg font-semibold text-[#332211] mb-2">{title}</h3>
        <p className="text-sm text-[#6B4226] line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold text-[#6B4226]">{price}</span>
        <Button className="bg-black hover:bg-[#222222] text-white border-2 border-black hover:border-[#222222]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};