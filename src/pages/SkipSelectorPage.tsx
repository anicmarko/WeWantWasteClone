import type { Skip } from "@/types/types";
import { useEffect, useState } from "react";
import ProgressNav from "@/components/ProgressNav";
import SkipCard from "@/components/SkipCard";
import skipImg from "/images/5-yarder-skip.jpg"; // Ensure this path is correct


const SkipSelectorPage = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => {
        const skips: Skip[] = (data || []).map((s: any) => ({
          id: s.id,
          name: `${s.size} Yard Skip`,
          size: `${s.size} Yards`,
          price: s.price_before_vat,
          hirePeriod: `${s.hire_period_days} day`,
          allows_heavy_waste: s.allows_heavy_waste,
          image: skipImg ,
          notAllowedOnRoad: !s.allowed_on_road,
        }));
        setSkips(skips);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#c7d2fe] text-[#1e293b] font-sans">
        <main className={`max-w-5xl mx-auto px-2 sm:px-4 py-6 transition-all duration-300 pb-18 sm:pb-18`}>
        {/* Progress Nav */}
        {/* Progress Nav - Desktop */}
        <ProgressNav step={step} setStep={setStep} selected={selected} />


        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold mb-2 tracking-tight">
            Select Your Skip
          </h2>
          <p className="text-slate-500 text-base">
            Find the perfect skip size for your needs
          </p>
        </div>

        {/* Skips */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <span className="animate-spin rounded-full border-4 border-blue-200 border-t-blue-600 w-10 h-10 inline-block" />
          </div>
        ) : (
          <section
  className={`
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
  `}
>
            {skips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                selected={selected}
                onSelect={(id) => setSelected(selected === id ? null : id)}
              />
            ))}
          </section>
        )}
        {selected !== null && (
          <div aria-hidden className="h-28 md:h-20" />
        )}
      </main>
      
    </div>
  );

};

export default SkipSelectorPage;
