import { Card, CardContent } from "@/components/ui/card";

const CouplePhoto = () => {
  return (
    <div className="my-8 max-w-md mx-auto">
      <Card className="overflow-hidden border-2 border-slavic-red inner-border">
        <CardContent className="p-0">
          <div className="relative pt-6 px-6 pb-6 bg-slavic-white">
            {/* В реальном проекте здесь будет настоящее фото пары */}
            <div className="aspect-[4/5] bg-slavic-beige flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Сергей и Юлия в славянских костюмах" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-slavic-red opacity-70">
                <p className="text-center">Фото пары в славянских костюмах</p>
              </div>
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
