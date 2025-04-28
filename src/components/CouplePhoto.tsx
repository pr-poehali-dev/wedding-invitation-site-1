import { Card, CardContent } from "@/components/ui/card";

const CouplePhoto = () => {
  return (
    <div className="my-8 max-w-md mx-auto">
      <Card className="overflow-hidden border-2 border-slavic-red inner-border">
        <CardContent className="p-0">
          <div className="relative pt-6 px-6 pb-6 bg-slavic-white">
            <div className="aspect-[4/5] bg-slavic-beige overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/d5370dfd-92aa-4da1-9d4f-1c2243f80b15.jpg" 
                alt="Пара в славянских свадебных костюмах на природе" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-slavic-red italic">26 июля 2025 года</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CouplePhoto;
