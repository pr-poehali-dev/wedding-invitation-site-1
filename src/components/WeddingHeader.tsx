import { Heart } from "lucide-react";

const WeddingHeader = () => {
  return (
    <header className="relative py-8 px-4 text-center bg-slavic-white">
      <div className="ornament h-6 mb-6"></div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slavic-red mb-4">
        Сергей и Юлия
      </h1>
      <div className="flex items-center justify-center mb-4">
        <div className="h-px bg-slavic-red w-16 sm:w-24"></div>
        <Heart className="text-slavic-red mx-4" size={24} />
        <div className="h-px bg-slavic-red w-16 sm:w-24"></div>
      </div>
      <p className="text-xl sm:text-2xl mb-4">
        приглашают вас на свою свадьбу
      </p>
      <div className="ornament h-6 mt-6"></div>
    </header>
  );
};

export default WeddingHeader;
