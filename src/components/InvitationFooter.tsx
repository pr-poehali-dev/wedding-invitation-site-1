import { Heart } from "lucide-react";
import SlavicOrnament from "./SlavicOrnament";

const InvitationFooter = () => {
  return (
    <footer className="mt-12 py-8 px-4 text-center bg-slavic-white">
      <SlavicOrnament position="top" />
      <div className="my-8">
        <p className="text-xl italic mb-4">Будем рады видеть вас на нашем празднике!</p>
        <div className="flex items-center justify-center">
          <div className="h-px bg-slavic-red w-16"></div>
          <Heart className="text-slavic-red mx-4 animate-float" size={20} />
          <div className="h-px bg-slavic-red w-16"></div>
        </div>
        <p className="mt-4 text-lg">С любовью, Сергей и Юлия</p>
      </div>
      <SlavicOrnament position="bottom" />
    </footer>
  );
};

export default InvitationFooter;
