import React from "react";
import { ArrowRight } from "lucide-react";
import { steps } from "@/constants/constants";

interface ProgressNavProps {
  step: number;
  setStep: (step: number) => void;
  selected: number | null;
}

const ProgressNav: React.FC<ProgressNavProps> = ({ step, setStep, selected }) => (
  <>
    {/* Desktop */}
    <nav className="hidden lg:flex flex-nowrap overflow-x-auto gap-2 md:gap-4 mb-8 justify-center items-center">
      {steps.map((stepObj, i) => (
        <React.Fragment key={stepObj.label}>
          <button
            className={`flex items-center px-2 py-1 rounded-full transition-colors whitespace-nowrap
              ${
                i === step
                  ? "bg-white text-[#2563eb] shadow font-semibold"
                  : i < step
                  ? "bg-blue-600 text-white font-semibold shadow"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }
            `}
            disabled={i > step}
          >
            <stepObj.icon size="22" />
            <span className="ml-1 text-sm">{stepObj.label}</span>
          </button>
          {i < steps.length - 1 && (
            <span
              className={`flex-shrink-0 w-6 h-1 rounded transition-colors
                ${i < step ? "bg-blue-600" : "bg-slate-300"}
              `}
            />
          )}
        </React.Fragment>
      ))}
    </nav>
    {/* Tablet */}
    <nav className="hidden sm:flex lg:hidden items-center justify-center gap-2 mb-8">
      <button
        className="p-2 rounded-full bg-blue-600 text-white disabled:bg-slate-200 disabled:text-slate-400"
        onClick={() => setStep(Math.max(0, step - 1))}
        disabled={step === 0}
        aria-label="Previous step"
        type="button"
      >
        <ArrowRight size={22} className="rotate-180" />
      </button>
      <div className="flex gap-2">
        {steps.map((stepObj, i) => (
          <span
            key={stepObj.label}
            className={`flex items-center justify-center rounded-full transition-all duration-200
              ${i === step
                ? "bg-white text-[#2563eb] font-semibold shadow-lg scale-110"
                : "bg-slate-200 text-slate-400"
              }
              w-10 h-10`}
          >
            <stepObj.icon size="22" />
          </span>
        ))}
      </div>
      <button
        className="p-2 rounded-full bg-blue-600 text-white disabled:bg-slate-200 disabled:text-slate-400"
        onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
        disabled={step === steps.length - 1 || selected === null}
        aria-label="Next step"
        type="button"
      >
        <ArrowRight size={22} />
      </button>
    </nav>
    {/* Mobile */}
    <nav className="flex sm:hidden items-center justify-center gap-2 mb-8">
      <button
        className="p-2 rounded-full bg-blue-600 text-white disabled:bg-slate-200 disabled:text-slate-400"
        onClick={() => setStep(Math.max(0, step - 1))}
        disabled={step === 0}
        aria-label="Previous step"
        type="button"
      >
        <ArrowRight size={22} className="rotate-180" />
      </button>
      <span className="flex items-center px-3 py-1 rounded-full font-semibold shadow text-base bg-white text-[#2563eb]">
        {React.createElement(steps[step].icon, { size: 22 })}
        <span className="ml-2">{steps[step].label}</span>
      </span>
      <button
        className="p-2 rounded-full bg-blue-600 text-white disabled:bg-slate-200 disabled:text-slate-400"
        onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
        disabled={step === steps.length - 1 || selected === null}
        aria-label="Next step"
        type="button"
      >
        <ArrowRight size={22} />
      </button>
    </nav>
  </>
);

export default ProgressNav;