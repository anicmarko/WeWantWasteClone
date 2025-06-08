import React from "react";
import { ArrowRight, Truck } from "lucide-react";
import type { Skip } from "@/types/types";

interface FooterBarProps {
  selected: number | null;
  skips: Skip[];
  onBack: () => void;
}

const FooterBar: React.FC<FooterBarProps> = ({ selected, skips, onBack }) => {
  const skip = skips.find((s) => s.id === selected);

  if (selected !== null && skip) {
    return (
      <footer className="fixed bottom-0 left-0 right-0 border-0 bg-white shadow-gray-700 shadow-2xl p-4 z-50">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-row items-center gap-4 w-full md:w-auto">
            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
              <Truck size={24} className="text-blue-600" />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="font-bold text-lg text-gray-900">{skip.name}</h3>
              <p className="text-sm text-gray-500">{skip.hirePeriod}</p>
            </div>
            <div className="ml-2 flex flex-col items-end md:items-start">
              <p className="text-xs font-medium text-gray-500">TOTAL PRICE</p>
              <p className="text-2xl font-bold text-blue-600">£{skip.price}</p>
            </div>
          </div>
          <div className="flex justify-center gap-3 w-full md:w-auto">
            <button
              onClick={onBack}
              className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all w-full md:w-auto"
            >
              ← Back
            </button>
            <button
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg w-full md:w-auto"
            >
              Continue
              <ArrowRight size={20} className="font-bold" />
            </button>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="block bottom-0 left-0 right-0 bg-white shadow-gray-700 shadow-2xl p-4 z-50 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-500">
          Imagery shown may not reflect exact specifications. Colours may vary. Additional costs may apply.
        </p>
      </div>
    </footer>
  );
};

export default FooterBar;