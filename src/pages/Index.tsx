import { Button } from "@/components/ui/button";
import WeddingHeader from "@/components/WeddingHeader";
import CouplePhoto from "@/components/CouplePhoto";
import WeddingDetails from "@/components/WeddingDetails";
import DressCode from "@/components/DressCode";
import InvitationFooter from "@/components/InvitationFooter";
import SlavicOrnament from "@/components/SlavicOrnament";
import { CalendarDays } from "lucide-react";

const Index = () => {
  const addToCalendar = () => {
    // Реализация добавления в календарь (в реальном проекте)
    alert('Событие добавлено в календарь');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slavic-white">
      <WeddingHeader />
      
      <main className="flex-1">
        <CouplePhoto />
        
        <div className="text-center my-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slavic-red mb-2">
            Славянская свадьба
          </h2>
          <SlavicOrnament position="both" className="max-w-xs mx-auto my-4" />
          <p className="max-w-2xl mx-auto px-4 text-lg">
            Приглашаем вас разделить с нами радость особенного дня нашей свадьбы 
            в славянских традициях на берегу речки Вороны в селе Ленинское.
          </p>
        </div>
        
        <WeddingDetails />
        
        <DressCode />
        
        <div className="text-center mt-12 mb-8">
          <Button 
            onClick={addToCalendar}
            className="bg-slavic-red hover:bg-red-700 text-white"
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            Добавить в календарь
          </Button>
        </div>
      </main>
      
      <InvitationFooter />
    </div>
  );
};

export default Index;
