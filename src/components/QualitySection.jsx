import { useEffect, useRef } from "react";
import { Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QualitySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const image = sectionRef.current.querySelector(".quality-image");
      const card = sectionRef.current.querySelector(".quality-card");
      const icon = sectionRef.current.querySelector(".quality-icon");
      const award = sectionRef.current.querySelector(".quality-award");
      const heading = sectionRef.current.querySelector(".quality-heading");
      const points = sectionRef.current.querySelectorAll(".quality-point");
      const button = sectionRef.current.querySelector(".quality-button");

      gsap.set(image, { y: 100, opacity: 0, scale: 1.08 });
      gsap.set(card, { x: 120, y: 60, opacity: 0, rotate: 5 });
      gsap.set(icon, { scale: 0, rotation: -45, opacity: 0 });
      gsap.set(award, { y: 30, opacity: 0 });
      gsap.set(heading, { y: 40, opacity: 0 });
      gsap.set(points, { x: 30, opacity: 0 });
      gsap.set(button, { y: 30, opacity: 0, scale: 0.9 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .to(image, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" })
        .to(card, { x: 0, y: 0, opacity: 1, rotate: 0, duration: 1, ease: "back.out(1.4)" }, "-=0.7")
        .to(icon, { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" }, "-=0.6")
        .to(award, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.3")
        .to(heading, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .to(points, { x: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: "power3.out" }, "-=0.3")
        .to(button, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white px-6 py-24 text-black md:px-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative">
          <div className="overflow-hidden">
            <img src="/teamHero.jpg" alt="Creative agency team working" className="quality-image h-[500px] w-full object-cover md:h-[600px]" />
          </div>

          <div className="quality-card relative mx-auto -mt-16 w-[90%] bg-lime-400 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:absolute md:right-30 md:top-24 md:mx-0 md:mt-0 md:w-90 md:p-10">
            <Award size={48} strokeWidth={1.5} className="quality-icon mb-6 text-black" />

            <div className="quality-award mb-10 flex items-center gap-5"><span className="text-5xl font-bold">W.</span><span className="text-md font-medium uppercase leading-4">Best Award Winner<br />Creative Agency</span></div>

            <h2 className="quality-heading text-3xl font-bold leading-[1.05]">WE BELIEVE IN QUALITY, NOT QUANTITY</h2>

            <div className="mt-6 space-y-3 text-lg">
              <p className="quality-point">+ Specialized Skills</p>
              <p className="quality-point">+ Client Focused</p>
              <p className="quality-point">+ Award Winning</p>
            </div>

            <button className="quality-button mt-8 bg-black px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/80 hover:shadow-lg">Get Started Now →</button>
          </div>
        </div>
      </div>
    </section>
  );
}