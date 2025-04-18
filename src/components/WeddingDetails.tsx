import { Clock, MapPin, Tent } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WeddingDetails = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 slavic-pattern">
      <Card className="bg-slavic-white border-2 border-slavic-red p-4">
        <CardContent className="pt-6 space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-slavic-red rounded-full p-2 text-white mt-1">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slavic-red mb-1">Дата и время</h3>
              <p className="text-lg">26 июля 2025 года в 12:00</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-slavic-red rounded-full p-2 text-white mt-1">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slavic-red mb-1">Место проведения</h3>
              <p className="text-lg">Речка Ворона, село Ленинское</p>
              <p className="text-sm mt-1 italic">Празднование пройдет на природе в славянских традициях</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-slavic-red rounded-full p-2 text-white mt-1">
              <Tent size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slavic-red mb-1">Размещение</h3>
              <p className="text-lg">Праздник пройдет в палаточном лагере</p>
              <p className="text-sm mt-1 italic">Приезжайте со своими палатками</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingDetails;
