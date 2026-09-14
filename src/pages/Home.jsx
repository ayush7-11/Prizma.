import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import QualitySection from "../components/QualitySection";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonial";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const homeRef = useRef(null);
  const heroRef = useRef(null);
  const creativeRef = useRef(null);
  const agencyRef = useRef(null);
  const heroImageRef = useRef(null);
  const ratingRef = useRef(null);
  const descriptionRef = useRef(null);
  const leftShapeRef = useRef(null);
  const rightShapeRef = useRef(null);
  const marqueeRef = useRef(null);
  const heroEyebrowRef = useRef(null);
  const scrollRef = useRef(null);
  const magneticButtonRef = useRef(null);
  const sectionRefs = useRef([]);

  const addSectionRef = (element) => {
    if (element && !sectionRefs.current.includes(element)) sectionRefs.current.push(element);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([creativeRef.current, agencyRef.current], { yPercent: 115 });
      gsap.set(heroImageRef.current, { clipPath: "inset(100% 0 0 0)", scale: 1.18 });
      gsap.set([ratingRef.current, descriptionRef.current], { y: 36, opacity: 0 });
      gsap.set([leftShapeRef.current, rightShapeRef.current], { opacity: 0, scale: 0.82 });
      gsap.set([heroEyebrowRef.current, scrollRef.current], { y: 18, opacity: 0 });

      heroTimeline
        .to([leftShapeRef.current, rightShapeRef.current], { opacity: 1, scale: 1, duration: 1.4, stagger: 0.08, ease: "power3.out" })
        .to(heroEyebrowRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.85")
        .to(creativeRef.current, { yPercent: 0, duration: 1.15 }, "-=0.35")
        .to(agencyRef.current, { yPercent: 0, duration: 1.15 }, "-=0.92")
        .to(heroImageRef.current, { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.35, ease: "power4.inOut" }, "-=0.8")
        .to([ratingRef.current, descriptionRef.current], { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }, "-=0.6")
        .to(scrollRef.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.45");

      gsap.to(heroImageRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.to(leftShapeRef.current, {
        xPercent: 10,
        rotation: 6,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.4 },
      });

      gsap.to(rightShapeRef.current, {
        xPercent: -12,
        rotation: -8,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.4 },
      });

      gsap.to(marqueeRef.current, { xPercent: -50, duration: 20, repeat: -1, ease: "none" });

      sectionRefs.current.forEach((section, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        const children = Array.from(section.children);

        gsap.fromTo(section, { clipPath: "inset(0 0 100% 0)" }, {
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          ease: "power4.inOut",
          scrollTrigger: { trigger: section, start: "top 82%", toggleActions: "play none none reverse" },
        });

        gsap.fromTo(children, { x: direction * 42, y: 34, opacity: 0 }, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.08,
          scrollTrigger: { trigger: section, start: "top 76%", toggleActions: "play none none reverse" },
        });
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const image = heroImageRef.current;
    const button = magneticButtonRef.current;
    if (!hero || !image || !button) return undefined;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return undefined;

    const onHeroMove = (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      gsap.to(image, { x: x * -24, y: y * -16, duration: 0.8, ease: "power3.out", overwrite: "auto" });
    };

    const onHeroLeave = () => gsap.to(image, { x: 0, y: 0, duration: 1, ease: "power3.out", overwrite: "auto" });

    const onButtonMove = (event) => {
      const bounds = button.getBoundingClientRect();
      gsap.to(button, { x: (event.clientX - bounds.left - bounds.width / 2) * 0.22, y: (event.clientY - bounds.top - bounds.height / 2) * 0.22, duration: 0.35, ease: "power3.out", overwrite: "auto" });
    };

    const onButtonLeave = () => gsap.to(button, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.45)", overwrite: "auto" });

    hero.addEventListener("pointermove", onHeroMove);
    hero.addEventListener("pointerleave", onHeroLeave);
    button.addEventListener("pointermove", onButtonMove);
    button.addEventListener("pointerleave", onButtonLeave);

    return () => {
      hero.removeEventListener("pointermove", onHeroMove);
      hero.removeEventListener("pointerleave", onHeroLeave);
      button.removeEventListener("pointermove", onButtonMove);
      button.removeEventListener("pointerleave", onButtonLeave);
    };
  }, []);

  return (
    <div ref={homeRef} className="overflow-hidden bg-[#050705]">
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#050705] px-5 md:px-10">

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_45%,rgba(163,230,53,0.12),transparent_28%),radial-gradient(circle_at_20%_100%,rgba(132,204,22,0.06),transparent_32%)]" />

        <div ref={leftShapeRef} className="pointer-events-none absolute -left-168 top-1/2 h-352 w-5xl -translate-y-1/2 rounded-full" style={{ background: "repeating-radial-gradient(ellipse, transparent 0, transparent 1.1rem, rgba(255,255,255,0.07) 1.2rem, rgba(255,255,255,0.07) 1.45rem)" }} />
        <div ref={rightShapeRef} className="pointer-events-none absolute -right-100 top-1/2 h-248 w-248 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.16) 0, rgba(255,255,255,0.08) 0.2rem, transparent 0.56rem), repeating-conic-gradient(from 0deg, rgba(255,255,255,0.08) 0deg, transparent 3deg, transparent 12deg), radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.04) 35%, transparent 70%)", maskImage: "radial-gradient(circle, black 0%, black 45%, transparent 75%)", WebkitMaskImage: "radial-gradient(circle, black 0%, black 45%, transparent 75%)" }} />

        <img ref={heroImageRef} src="/SilverSurfer.png" alt="Silver Surfer" className="absolute -right-20 bottom-0 z-10 h-[70rem] w-[70rem] object-cover will-change-transform md:-right-10" />

        <div className="relative z-20 px-0 pt-32 md:px-6 md:pt-40">
          <div ref={heroEyebrowRef} className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-lime-400"><span className="h-px w-8 bg-lime-400" />Independent creative studio</div>

          <h1 className="text-7xl font-extralight leading-[0.82] text-white md:text-8xl lg:text-9xl">
            <span className="block overflow-hidden"><span ref={creativeRef} className="inline-block">CREATIVE</span></span>
            <span className="block overflow-hidden"><span ref={agencyRef} className="inline-block font-bold">AGENCY</span></span>
          </h1>
        </div>

        <div className="relative z-20 mt-12 flex flex-col pb-14 text-white md:mt-16 md:flex-row md:items-center md:pb-10">
          <div ref={ratingRef} className="flex flex-col gap-3 px-5">
            <div className="flex items-center gap-3"><span className="text-7xl font-bold text-lime-400">4.9</span><div className="text-lg leading-5">(2.5k+<br />Reviews)</div></div>
            <div className="text-xl">❇️❇️❇️❇️❇️</div>
            <span className="max-w-52 text-base leading-5 text-white/60">Average rating based on client feedback</span>
          </div>

          <div ref={descriptionRef} className="mt-10 border-t border-white/20 px-5 pt-8 md:ml-12 md:mt-0 md:max-w-md md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-lime-400">What we make</p>
            <p className="text-lg leading-7 text-white/70">We create digital experiences that inspire, engage and connect brands with their audience.</p>
            <button ref={magneticButtonRef} className="mt-6 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition-colors hover:text-lime-400">Learn More <span className="text-xl">↗</span></button>
          </div>
        </div>

        <div ref={scrollRef} className="absolute bottom-7 left-5 z-20 hidden items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/40 md:flex md:left-10"><span className="h-px w-10 bg-white/40" />Scroll to explore</div>
      </section>

      <section className="overflow-hidden bg-lime-400 py-8 md:py-10">
        <div ref={marqueeRef} className="flex w-max items-center">
          {[0, 1].map((item) => <div key={item} className="flex items-center gap-8 whitespace-nowrap pr-8 text-3xl font-bold text-black md:text-4xl"><span>UI/UX DESIGN</span><span>✦</span><span>GET STARTED</span><span>✦</span><span>DESIGN</span><span>✦</span><span>DEVELOPMENT</span><span>✦</span><span>MARKETING</span><span>✦</span><span>UI/UX DESIGN</span><span>✦</span><span>GET STARTED</span><span>✦</span><span>DESIGN</span><span>✦</span><span>DEVELOPMENT</span><span>✦</span><span>MARKETING</span><span>✦</span></div>)}
        </div>
      </section>

      <div ref={addSectionRef}><Services /></div>
      <div ref={addSectionRef}><Projects /></div>
      <div ref={addSectionRef}><AboutSection /></div>
      <div ref={addSectionRef}><QualitySection /></div>
      <div ref={addSectionRef}><Pricing /></div>
      <div ref={addSectionRef}><Testimonials /></div>
      <div ref={addSectionRef}><TeamSection /></div>
      <div ref={addSectionRef}><Footer /></div>
    </div>
  );
}