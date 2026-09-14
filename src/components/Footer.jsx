import { useEffect, useRef } from "react";
import { ArrowUp, Box, Hexagon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const columns = footerRef.current.querySelectorAll(".footer-column");
      const divider = footerRef.current.querySelector(".footer-divider");
      const topButton = footerRef.current.querySelector(".footer-top-button");
      const socials = footerRef.current.querySelectorAll(".footer-social");
      const giantText = footerRef.current.querySelector(".footer-logo");
      const shapes = footerRef.current.querySelectorAll(".footer-shape");

      gsap.set(columns, { y: 60, opacity: 0 });
      gsap.set(divider, { scaleX: 0, transformOrigin: "center" });
      gsap.set(topButton, { scale: 0, opacity: 0 });
      gsap.set(socials, { y: 20, opacity: 0 });
      gsap.set(giantText, { y: 100, opacity: 0 });
      gsap.set(shapes, { opacity: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .to(shapes, { opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" })
        .to(columns, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power4.out" }, "-=0.5")
        .to(divider, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, "-=0.3")
        .to(topButton, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" }, "-=0.4")
        .to(socials, { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power3.out" }, "-=0.2")
        .to(giantText, { y: 0, opacity: 1, duration: 0.2, ease: "power4.out" }, "-=0.3");

      gsap.to(shapes, {
        y: 20,
        x: 15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: "sine.inOut",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-[#080d08] text-white">
      <div className="footer-shape pointer-events-none absolute -left-24 top-72 h-64 w-64 rounded-full border-[3.75rem] border-white/2.5" />

      <Hexagon className="footer-shape pointer-events-none absolute left-40 -top-5 h-32 w-32 text-white/5" strokeWidth={1} />

      <Box className="footer-shape pointer-events-none absolute right-32 top-8 h-20 w-20 text-white/5" strokeWidth={1} />

      <Hexagon className="footer-shape pointer-events-none absolute right-80 top-56 h-20 w-20 text-white/5" strokeWidth={1} />

      <div className="relative z-10 mx-auto max-w-350 px-8 pb-8 pt-28 md:px-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-20 lg:pl-80">

          <div className="footer-column">
            <h3 className="mb-7 text-xl font-medium">SERVICE</h3>

            <div className="space-y-4 text-base text-white/60">
              <p className="cursor-pointer transition hover:text-lime-400">Web Design</p>
              <p className="cursor-pointer transition hover:text-lime-400">Video Production</p>
              <p className="cursor-pointer transition hover:text-lime-400">Digital Marketing</p>
              <p className="cursor-pointer transition hover:text-lime-400">Web Development</p>
              <p className="cursor-pointer transition hover:text-lime-400">UI/UX Design</p>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="mb-7 text-xl font-medium">COMPANY</h3>

            <div className="space-y-4 text-base text-white/60">
              <p className="cursor-pointer transition hover:text-lime-400">About</p>
              <p className="cursor-pointer transition hover:text-lime-400">Services</p>
              <p className="cursor-pointer transition hover:text-lime-400">Portfolios</p>
              <p className="cursor-pointer transition hover:text-lime-400">Blogs</p>
              <p className="cursor-pointer transition hover:text-lime-400">Contact</p>
              <p className="cursor-pointer transition hover:text-lime-400">Licenses</p>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="mb-7 text-xl font-medium">ADDRESS</h3>

            <p className="max-w-56 text-base leading-7 text-white/60 underline decoration-white/30 underline-offset-2">1772 Street charleston, New York</p>

            <p className="mt-8 text-base text-white/60">+1 287-360-633</p>

            <p className="mt-3 text-base text-white/60">Info@Yourwebsite.Com</p>
          </div>

        </div>

        <div className="footer-divider mt-20 flex origin-center items-center gap-4 md:mt-28 md:gap-6">
          <div className="h-px flex-1 bg-white/8" />

          <button onClick={scrollToTop} aria-label="Back to top" className="footer-top-button flex h-14 w-11 shrink-0 items-center justify-center rounded-full border border-lime-400/20 text-lime-400 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:-translate-y-1 md:h-16 md:w-12">
            <ArrowUp size={23} strokeWidth={1.5} />
          </button>

          <div className="h-px flex-1 bg-white/8" />
        </div>

        <div className="mt-8 flex justify-center gap-4 text-xs text-white/60 md:-mt-6 md:justify-end md:gap-7 md:pr-2 md:text-sm">
          <a href="#" className="footer-social underline underline-offset-4 transition hover:text-lime-400">Facebook</a>
          <span className="footer-social text-white/20">|</span>
          <a href="#" className="footer-social underline underline-offset-4 transition hover:text-lime-400">LinkedIn</a>
          <span className="footer-social text-white/20">|</span>
          <a href="#" className="footer-social underline underline-offset-4 transition hover:text-lime-400">Dribbble</a>
        </div>

        <div className="mt-16 overflow-hidden">
          <h2 className="footer-logo whitespace-nowrap bg-linear-to-b from-white/40 via-white/15 to-transparent bg-clip-text text-center text-[18vw] font-medium leading-[0.75] tracking-[-0.08em] text-transparent transition-all duration-700 hover:from-lime-400/60 hover:via-lime-400/20 hover:to-transparent md:text-[17vw]">PRIZMA</h2>
        </div>

      </div>
    </footer>
  );
}