import { Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DressCode = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Card className="bg-slavic-white border-2 border-slavic-red overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-slavic-red rounded-full p-2 text-white">
              <Shirt size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slavic-red">Дресс-код</h3>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg">
              Приглашаем вас поддержать атмосферу славянского праздника своим нарядом!
            </p>
            
            <div className="ml-4 space-y-2">
              <p>
                <span className="font-semibold text-slavic-red">Для женщин:</span> славянские сарафаны, 
                платья с вышивкой, длинные юбки, блузы с традиционными узорами, венки из цветов.
              </p>
              
              <p>
                <span className="font-semibold text-slavic-red">Для мужчин:</span> косоворотки, 
                льняные рубашки, свободные брюки, пояса с народными узорами.
              </p>
            </div>
            
            <p className="text-lg">
              Приветствуются натуральные ткани: лён, хлопок, шерсть. 
              Основные цвета: белый, красный, синий с традиционной вышивкой.
            </p>
            
            <p className="italic text-sm mt-2">
              Если у вас нет славянской одежды, можно выбрать наряд в народном стиле 
              или в светлых природных тонах с элементами красного цвета.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DressCode;
