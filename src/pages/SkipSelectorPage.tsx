import type { Skip } from "@/types/types";
import skipImg from "/images/5-yarder-skip.jpg"; // Make sure this path is correct
import { useState } from "react";
import ProgressNav from "@/components/ProgressNav";

const getSkipImage = (skip: Skip) => {
  // Use local image for 5 yard, fallback to API image for others
  if (skip.name.includes("5 Yard")) return skipImg;
  return skip.image;
};

const SkipSelectorPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [step, setStep] = useState(2);

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#c7d2fe] text-[#1e293b] font-sans">
        <main className={`max-w-5xl mx-auto px-2 sm:px-4 py-6 transition-all duration-300 pb-18 sm:pb-18`}>
        {/* Progress Nav */}
        {/* Progress Nav - Desktop */}
        <ProgressNav step={step} setStep={setStep} selected={selected} />
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold mb-2 tracking-tight">
            Select Your Skip
          </h2>
          <p className="text-slate-500 text-base">
            Find the perfect skip size for your needs
          </p>
        </div>

       
      </main>
      
    </div>
  );

};

export default SkipSelectorPage;
