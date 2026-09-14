import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".about-heading-line", {
      yPercent: 115,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-heading",
        start: "top 78%",
        toggleActions: "play none none reverse",
      },
    });

    const intro = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    intro
      .from(".about-image", { scale: 0.7, opacity: 0, duration: 0.9, ease: "power3.out" })
      .from(".about-funding", { y: 60, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".about-description", { x: 60, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".about-button", { y: 30, opacity: 0, scale: 0.9, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} className="bg-white px-6 py-24 text-black md:px-16">
      <div className="mx-auto max-w-7xl">

       <h2 className="about-heading max-w-6xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            <span className="block overflow-hidden"><span className="about-heading-line block">AGENTISE <span className="text-gray-300">CRAFTS</span></span></span>
            <span className="block overflow-hidden"><span className="about-heading-line block">RALLYING IDEAS TO SHAPE</span></span>
            <span className="block overflow-hidden"><span className="about-heading-line block">MARKET POSITIONS, INCREASE</span></span>
            <span className="block overflow-hidden"><span className="about-heading-line block">BRAND <span className="text-gray-300">REVENUE</span>, AND ENHANCE</span></span>
            <span className="block overflow-hidden"><span className="about-heading-line block">COMPANY VALUE THROUGH</span></span>
            <span className="block overflow-hidden"><span className="about-heading-line block"><span className="text-gray-300">INNOVATIVE</span> AND EFFECTIVE</span></span>
            <span className="block overflow-hidden"><span className="about-heading-line block">STRATEGIES.</span></span>
        </h2>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-[0.8fr_0.8fr_1.2fr]">
          <div className="flex justify-center">
            <img src="/team.jpg" alt="Our team" className="about-image h-56 w-56 rounded-full object-cover md:h-64 md:w-64" />
          </div>

          <div className="about-funding flex items-center justify-center border-x border-gray-200 py-8">
            <div>
              <div className="about-number flex items-start">
                <span className="text-8xl font-medium leading-none md:text-9xl">21</span>
                <span className="mt-2 text-4xl">M</span>
              </div>
              <p className="mt-5 max-w-65 text-md leading-5 text-gray-500">We assisted companies in securing over $21M in funding successfully.</p>
            </div>
          </div>

          <div className="about-description max-w-md">
            <p className="text-md leading-6 text-gray-500">Welcome to Agentise, where creativity meets innovation. Founded in 2015, we are a digital agency committed to transforming ideas into impactful digital experiences. Our passionate team of designers, developers, and strategists works collaboratively to deliver tailored solutions that drive results and elevate your brand.</p>
            <button className="about-button mt-7 flex items-center gap-2 bg-lime-400 px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20">About Us <ArrowUpRight size={14} /></button>
          </div>
        </div>
      </div>

      <div className="relative mt-20 min-h-0 md:mt-40 md:min-h-157.5">
        <div className="about-stat relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:absolute md:left-[19%] md:top-0 md:block md:h-75 md:w-[28%] md:border md:border-gray-200 md:p-10">
          <div className="border border-gray-200 p-6 md:border-0 md:p-0">
            <div className="text-7xl font-medium leading-none sm:text-8xl md:text-9xl">26</div>
            <p className="mt-4 max-w-45 text-sm uppercase text-gray-500 sm:text-base md:text-lg">Years of Agency Experience</p>
            <div className="absolute right-0 top-0 hidden h-5 w-5 bg-black [clip-path:polygon(0_0,100%_0,100%_100%)] md:block" />
          </div>

          <div className="border border-gray-200 p-6 md:hidden">
            <div className="text-7xl font-medium leading-none sm:text-8xl">40<span className="align-top text-2xl font-normal sm:text-3xl">+</span></div>
            <p className="mt-4 text-sm uppercase text-gray-500 sm:text-base">Experience Engineering Members</p>
          </div>
        </div>

        <div className="about-stat relative border border-gray-200 p-6 md:absolute md:right-0 md:top-0 md:h-75 md:w-[28%] md:p-10">
          <div className="text-7xl font-medium leading-none sm:text-8xl md:text-9xl">40<span className="align-top text-2xl font-normal sm:text-3xl md:text-3xl">+</span></div>
          <p className="mt-4 text-sm uppercase text-gray-500 sm:text-base md:text-lg">Experience Engineering Members</p>
          <div className="absolute right-0 top-0 h-5 w-5 bg-black [clip-path:polygon(0_0,100%_0,100%_100%)]" />
        </div>

        <div className="about-stat relative border border-gray-200 p-6 md:absolute md:left-0 md:top-75-[300px] md:w-[27%] md:p-10">
          <div className="text-7xl font-medium leading-none sm:text-8xl md:text-9xl">2K<span className="align-top text-2xl font-normal sm:text-3xl md:text-3xl">+</span></div>
          <p className="mt-4 text-sm uppercase text-gray-500 sm:text-base md:text-lg">Successfully Finished Project</p>
          <div className="absolute right-0 top-0 h-5 w-5 bg-black [clip-path:polygon(0_0,100%_0,100%_100%)]" />
        </div>

        <div className="about-stat relative border border-lime-400 bg-lime-400 p-6 md:absolute md:left-[48%] md:top-75 md:h-75 md:w-[28%] md:border-0 md:p-10">
          <div className="text-7xl font-medium leading-none sm:text-8xl md:text-9xl">25</div>
          <p className="mt-4 text-sm uppercase text-black/60 sm:text-base md:text-lg">Good Award Winning Agency</p>
          <div className="absolute right-0 top-0 h-5 w-5 bg-black [clip-path:polygon(0_0,100%_0,100%_100%)]" />
        </div>
      </div>
    </section>
  );
}