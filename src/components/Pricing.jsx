import { useState } from "react";

const plans = [{ name: "BASIC", price: "89", description: "Ideal for regular upkeep and maintenance cleaning your home." }, { name: "PROFESSIONAL", price: "199", description: "Ideal for regular upkeep and maintenance cleaning your home." }, { name: "ENTERPRISE", price: "250", description: "Ideal for regular upkeep and maintenance cleaning your home." }];

const features = ["Multi-user Access", "Customer Success Manager", "Marketing Automation", "CRM Platform", "Priority Sending", "Future Updates"];

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="overflow-hidden bg-white px-6 py-24 text-black md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-3xl text-center text-5xl font-medium leading-[0.95] md:text-7xl">WE PROVIDES THE<br />BEST PRICING.</h2>

        <div className="mt-20 grid items-start gap-8 md:px-10 md:grid-cols-2 lg:grid-cols-3 md:gap-0">
          {plans.map((plan, index) => {
            const isHovered = hoveredCard === index;
            const isAnotherHovered = hoveredCard !== null && hoveredCard !== index;
            const isMiddleCard = index === 1;
            const cardIsDark = isHovered || (isMiddleCard && hoveredCard === null);

            return (
              <div key={plan.name} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)} className={`relative min-h-142.5 p-10 transition-all duration-500 ease-out ${isHovered ? "z-30 scale-110 rotate-0 bg-[#080d05] text-white shadow-2xl" : isAnotherHovered ? "z-0 scale-95 opacity-70" : index === 0 ? "z-10 bg-[#f7f7f7] md:rotate-[-9deg]" : index === 1 ? "z-20 bg-[#080d05] text-white md:scale-105" : "z-10 bg-[#f7f7f7] md:rotate-[9deg]"}`}>
                
                <p className="text-sm font-medium">{plan.name}</p>

                <div className="mt-6 flex items-start"><span className="text-8xl font-medium leading-none">{plan.price}</span><span className="mt-2 text-3xl">$</span></div>

                <p className={`mt-3 max-w-sm text-sm leading-6 transition-colors duration-500 ${cardIsDark ? "text-gray-400" : "text-gray-500"}`}>{plan.description}</p>

                <button className={`mt-6 w-full border px-5 py-4 text-sm font-semibold transition-all duration-300 ${cardIsDark ? "border-lime-400 bg-lime-400 text-black hover:bg-lime-300" : "border-black bg-transparent text-black hover:bg-black hover:text-white"}`}>Get started →</button>

                <div className="mt-8 space-y-5">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4">
                      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs transition-all duration-500 ${cardIsDark ? "bg-white text-black" : "bg-gray-200 text-black"}`}>✓</span>
                      <span className={`text-sm transition-colors duration-500 ${cardIsDark ? "text-gray-400" : "text-gray-500"}`}>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}