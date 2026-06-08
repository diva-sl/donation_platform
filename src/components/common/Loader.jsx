import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center py-10">
      <Loader2 size={40} className="animate-spin text-orange-500" />
    </div>
  );
};

export default Loader;
