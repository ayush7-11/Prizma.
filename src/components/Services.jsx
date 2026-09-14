import { useEffect, useRef } from "react";
import { Shapes, Accessibility, Blocks, Megaphone, Clapperboard, PanelsTopLeft } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" } });

      tl.from(".services-title", { y: 100, opacity: 0, duration: 1, ease: "power4.out" })
      .from(".services-description", { y: 40, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.6")
      .from(".service-card", { y: 80, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" }, "-=0.3")
      .from(".service-icon", { scale: 0, rotation: -45, opacity: 0, duration: 0.5, stagger: 0.12, ease: "back.out(1.7)" }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-6 py-30 text-black md:px-16">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.5fr]">
        <div>
          <h1 className="services-title text-5xl font-medium leading-[0.95] md:text-7xl">TO PROVIDE<br />DIGITAL<br />SOLUTION.</h1>
          <p className="services-description mt-8 max-w-sm text-md leading-6 text-gray-500">If you're looking for a specialist to build a meaningful digital project you can easily reach us by clicking here</p>
          <button className="services-button mt-8 bg-lime-400 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20">Explore Services →</button>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="service-card group flex items-start gap-5 border-b border-gray-200 p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="service-icon shrink-0"><Shapes size={35} className="mt-2 transition-transform duration-300 group-hover:rotate-12" /></div>
            <div className="flex flex-col gap-3"><div className="text-2xl font-bold">Brand Strategy</div><div className="font-medium text-gray-500">Crafting distinctive placing resonte ensuring your brand stands out and a last impression.</div><div className="text-gray-800 transition-colors duration-300 group-hover:text-lime-600">Veiw Details →</div></div>
          </div>

          <div className="service-card group flex items-start gap-5 border-b border-l border-gray-200 p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="service-icon shrink-0"><Accessibility size={35} className="mt-2 transition-transform duration-300 group-hover:rotate-12" /></div>
            <div className="flex flex-col gap-3"><div className="text-2xl font-bold">UI/UX Design</div><div className="font-medium text-gray-500">Creating intuitive and engaging user experiences that drive user satisfaction and business growth.</div><div className="text-gray-800 transition-colors duration-300 group-hover:text-lime-600">Veiw Details →</div></div>
          </div>

          <div className="service-card group flex items-start gap-5 border-b border-gray-200 p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="service-icon shrink-0"><Blocks size={35} className="mt-2 transition-transform duration-300 group-hover:rotate-12" /></div>
            <div className="flex flex-col gap-3"><div className="text-2xl font-bold">Web Development</div><div className="font-medium text-gray-500">Building robust and scalable web applications that meet your business needs.</div><div className="text-gray-800 transition-colors duration-300 group-hover:text-lime-600">Veiw Details →</div></div>
          </div>

          <div className="service-card group flex items-start gap-5 border-b border-l border-gray-200 p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="service-icon shrink-0"><Megaphone size={35} className="mt-2 transition-transform duration-300 group-hover:rotate-12" /></div>
            <div className="flex flex-col gap-3"><div className="text-2xl font-bold">Digital Marketing</div><div className="font-medium text-gray-500">Promoting your brand and products through various digital channels to reach your target audience.</div><div className="text-gray-800 transition-colors duration-300 group-hover:text-lime-600">Veiw Details →</div></div>
          </div>

          <div className="service-card group flex items-start gap-5 border-gray-200 p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="service-icon shrink-0"><Clapperboard size={35} className="mt-2 transition-transform duration-300 group-hover:rotate-12" /></div>
            <div className="flex flex-col gap-3"><div className="text-2xl font-bold">Video Production</div><div className="font-medium text-gray-500">Creating compelling video content that tells your story and engages your audience.</div><div className="text-gray-800 transition-colors duration-300 group-hover:text-lime-600">Veiw Details →</div></div>
          </div>

          <div className="service-card group flex items-start gap-5 border-l border-gray-200 p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="service-icon shrink-0"><PanelsTopLeft size={35} className="mt-2 transition-transform duration-300 group-hover:rotate-12" /></div>
            <div className="flex flex-col gap-3"><div className="text-2xl font-bold">UI/UX Design</div><div className="font-medium text-gray-500">Creating beautiful and user-friendly interfaces that enhance the user experience.</div><div className="text-gray-800 transition-colors duration-300 group-hover:text-lime-600">Veiw Details →</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}