import React from "react";
import { AlertTriangle, Check, Shield } from "lucide-react";
import type { Skip } from "@/types/types";
import skipImg from "/images/5-yarder-skip.jpg"; // Make sure this path is correct


const getSkipImage = (skip: Skip) => {
  // Use local image for 5 yard, fallback to API image for others
  if (skip.name.includes("5 Yard")) return skipImg;
  return skip.image;
};

interface SkipCardProps {
  skip: Skip;
  selected: number | null;
  onSelect: (id: number) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, selected, onSelect }) => (
  <div
    key={skip.id}
    className={`relative flex flex-col bg-white rounded-2xl shadow-lg border-2 transition-all cursor-pointer overflow-hidden group
      ${
        selected === skip.id
          ? "border-blue-600 ring-2 ring-blue-100 scale-[1.025]"
          : "border-slate-200 hover:border-blue-400/60 hover:shadow-xl"
      }
    `}
    tabIndex={0}
    onClick={() => onSelect(skip.id)}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        onSelect(skip.id);
      }
    }}
    aria-pressed={selected === skip.id}
  >
    {/* Image with overlay badge */}
    <div className="relative h-40 sm:h-48 w-full overflow-hidden">
      <img
        src={getSkipImage(skip)}
        alt={skip.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
        {skip.size}
      </span>
      {selected === skip.id && (
        <span className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-2 shadow-lg z-20 border-4 border-white">
          <Check size={22} />
        </span>
      )}
      {skip.notAllowedOnRoad && (
        <span className="absolute bottom-3 left-3 flex items-center gap-1 bg-yellow-100/90 text-yellow-700 px-2 py-1 rounded text-xs font-medium shadow z-10">
          <AlertTriangle size={16} className="shrink-0" />
          Not Allowed On Road
        </span>
      )}
    </div>
    {/* Card content */}
    <div className="flex flex-col flex-grow p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold truncate pr-2">{skip.name}</h3>
        <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap">
          {skip.hirePeriod} days hire
        </span>
      </div>
      {skip.allows_heavy_waste ? (
        <div className="flex items-center gap-1.5 mb-2 text-sm text-gray-700 py-1 rounded-md">
          <Shield size={16} className="shrink-0 text-gray-600" />
          <span>Accepts heavy materials</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 mb-2 text-sm text-gray-700 py-1 rounded-md">
          <Shield size={16} className="shrink-0 text-gray-400" />
          <span>No heavy materials</span>
        </div>
      )}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl font-bold text-blue-600">£{skip.price}</span>
      </div>
      <button
        className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 text-base font-semibold transition-all cursor-pointer
          ${
            selected === skip.id
              ? "bg-blue-600 text-white shadow"
              : "bg-slate-100 text-blue-700 hover:bg-blue-50"
          }
        `}
        tabIndex={-1}
        type="button"
      >
        {selected === skip.id ? (
          <>
            Selected <Check size={18} />
          </>
        ) : (
          <>
            Select <span className="ml-1"><Check size={18} /></span>
          </>
        )}
      </button>
    </div>
  </div>
);

export default SkipCard;