interface SlavicOrnamentProps {
  position: "top" | "bottom" | "both";
  className?: string;
}

const SlavicOrnament = ({ position, className = "" }: SlavicOrnamentProps) => {
  return (
    <div className={`w-full ${className}`}>
      {(position === "top" || position === "both") && (
        <div className="ornament h-6 w-full"></div>
      )}
      {(position === "bottom" || position === "both") && (
        <div className="ornament h-6 w-full transform rotate-180"></div>
      )}
    </div>
  );
};

export default SlavicOrnament;
