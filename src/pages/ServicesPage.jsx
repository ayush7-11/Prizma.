import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, Check, Plus } from "lucide-react";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { number: "01", title: "DIGITAL STRATEGY", description: "We turn ambitious ideas into clear digital strategies that give brands direction, purpose and room to grow.", image: "/projects/img1.jpg", items: ["Brand Strategy", "Market Research", "Digital Positioning", "Creative Direction"] },
  { number: "02", title: "UI / UX DESIGN", description: "We design digital experiences that look distinctive, feel effortless and keep people coming back.", image: "/projects/img2.jpg", items: ["User Experience", "Interface Design", "Design Systems", "Prototyping"] },
  { number: "03", title: "WEB DEVELOPMENT", description: "We transform bold designs into fast, responsive and memorable digital experiences built for the modern web.", image: "/projects/img3.jpg", items: ["React Development", "Responsive Websites", "Performance", "Interactions"] },
  { number: "04", title: "BRANDING", description: "We create identities that give businesses a recognizable voice and make them impossible to overlook.", image: "/projects/img4.jpg", items: ["Visual Identity", "Art Direction", "Brand Guidelines", "Campaign Design"] },
];

const process = [
  { number: "01", title: "DISCOVER", text: "We understand your business, audience, challenges and ambitions before creating anything." },
  { number: "02", title: "STRATEGIZE", text: "We define the creative direction and build a clear strategy around your goals." },
  { number: "03", title: "DESIGN", text: "Ideas become visual systems, interfaces and experiences designed to make an impact." },
  { number: "04", title: "BUILD", text: "We bring everything together through clean development and purposeful interactions." },
  { number: "05", title: "LAUNCH", text: "We test, refine and launch your digital experience into the real world." },
];

export default function ServicesPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set(".services-hero-line", { yPercent: 110 });
      gsap.set(".services-hero-small", { y: 40, opacity: 0 });
      gsap.set(".services-hero-image", { scale: 1.2, opacity: 0 });
      gsap.set(".services-hero-circle", { scale: 0, opacity: 0 });
      gsap.set(".services-scroll", { y: 30, opacity: 0 });

      heroTimeline
        .to(".services-hero-small", { y: 0, opacity: 1, duration: 0.8 })
        .to(".services-hero-line", { yPercent: 0, duration: 1.2, stagger: 0.12 }, "-=0.5")
        .to(".services-hero-image", { scale: 1, opacity: 1, duration: 1.4 }, "-=0.8")
        .to(".services-hero-circle", { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }, "-=0.8")
        .to(".services-scroll", { y: 0, opacity: 1, duration: 0.7 }, "-=0.5");

      gsap.to(".services-hero-image", { yPercent: -12, ease: "none", scrollTrigger: { trigger: ".services-hero", start: "top top", end: "bottom top", scrub: 1 } });

      gsap.to(".services-hero-circle", { rotation: 180, ease: "none", scrollTrigger: { trigger: ".services-hero", start: "top top", end: "bottom top", scrub: 1.5 } });

      gsap.utils.toArray(".service-item").forEach((item, index) => {
        const image = item.querySelector(".service-image");
        const content = item.querySelector(".service-content");
        const number = item.querySelector(".service-number");
        const line = item.querySelector(".service-line");
        const checks = item.querySelectorAll(".service-check");

        gsap.set(image, { y: 100, opacity: 0, scale: 1.12 });
        gsap.set(content, { x: index % 2 === 0 ? 80 : -80, opacity: 0 });
        gsap.set(number, { scale: 0.5, opacity: 0 });
        gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(checks, { x: 30, opacity: 0 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        timeline
          .to(number, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" })
          .to(image, { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power4.out" }, "-=0.5")
          .to(content, { x: 0, opacity: 1, duration: 1, ease: "power4.out" }, "-=0.8")
          .to(line, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, "-=0.5")
          .to(checks, { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" }, "-=0.4");

        gsap.to(image, { yPercent: -8, ease: "none", scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: 1 } });
      });

      gsap.utils.toArray(".process-item").forEach((item, index) => {
        gsap.set(item, { y: 80, opacity: 0 });
        gsap.to(item, { y: 0, opacity: 1, duration: 0.9, delay: index * 0.05, ease: "power4.out", scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none reverse" } });
      });

      gsap.set(".process-heading", { y: 100, opacity: 0 });
      gsap.to(".process-heading", { y: 0, opacity: 1, duration: 1.1, ease: "power4.out", scrollTrigger: { trigger: ".process-section", start: "top 75%", toggleActions: "play none none reverse" } });

      gsap.set(".cta-line", { yPercent: 120 });
      gsap.set(".cta-small", { y: 40, opacity: 0 });
      gsap.set(".cta-button", { scale: 0.7, opacity: 0 });
      gsap.set(".cta-shape", { scale: 0, rotation: -90, opacity: 0 });

      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-cta",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      ctaTimeline
        .to(".cta-small", { y: 0, opacity: 1, duration: 0.7 })
        .to(".cta-line", { yPercent: 0, duration: 1.1, stagger: 0.12 }, "-=0.4")
        .to(".cta-shape", { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.5)" }, "-=0.7")
        .to(".cta-button", { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");

      gsap.to(".cta-shape", { rotation: 360, duration: 18, repeat: -1, ease: "none" });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (

    <>
        <main ref={pageRef} className="overflow-hidden bg-[#080d08] text-white">

        <section className="services-hero relative flex min-h-screen items-center overflow-hidden px-6 py-32 md:px-16">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_50%,rgba(163,230,53,0.12),transparent_30%),radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.05),transparent_25%)]" />
            <div className="absolute right-[8%] top-[18%] h-32 w-32 rounded-full border border-lime-400/30 md:h-52 md:w-52" />
            <div className="services-hero-circle absolute right-[13%] top-[23%] h-20 w-20 rounded-full border border-lime-400 bg-lime-400/10 backdrop-blur-sm md:h-32 md:w-32" />
            <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="services-hero-small mb-8 text-sm uppercase tracking-[0.3em] text-lime-400">What we do / 001</p>
            <div className="overflow-hidden"><h1 className="services-hero-line text-[15vw] font-light leading-[0.78] tracking-[-0.06em] md:text-[11vw]">WE BUILD</h1></div>
            <div className="overflow-hidden"><h1 className="services-hero-line text-[15vw] font-bold leading-[0.78] tracking-[-0.06em] text-white md:text-[11vw]">DIGITAL</h1></div>
            <div className="flex items-end gap-4 overflow-hidden"><h1 className="services-hero-line text-[15vw] font-light leading-[0.78] tracking-[-0.06em] text-lime-400 md:text-[11vw]">IMPACT.</h1><ArrowDownRight className="services-hero-small mb-2 hidden h-16 w-16 text-lime-400 md:block" strokeWidth={1} /></div>
            <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
                <p className="services-hero-small max-w-lg text-lg leading-7 text-white/50">Strategy, design, development and branding for ambitious businesses that refuse to blend in.</p>
                <div className="services-hero-image relative h-48 overflow-hidden md:h-64"><img src="/teamHero.jpg" alt="Creative team" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-lime-400/10 mix-blend-screen" /></div>
            </div>
            <div className="services-scroll mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/40"><ArrowDownRight className="h-4 w-4" /> Scroll to explore</div>
            </div>
        </section>

        <section className="bg-white px-6 py-24 text-black md:px-16 md:py-40">
            <div className="mx-auto max-w-7xl">
            <div className="mb-24 flex items-end justify-between border-b border-black/10 pb-8"><div><p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-400">Our expertise</p><h2 className="text-5xl font-medium leading-[0.9] tracking-tight md:text-8xl">WHAT WE<br /><span className="text-gray-300">BRING</span> TO<br />THE TABLE.</h2></div><span className="hidden text-sm text-gray-400 md:block">04 SERVICES</span></div>

            <div className="space-y-32 md:space-y-52">
                {services.map((service, index) => (
                <article key={service.number} className={`service-item relative grid items-center gap-12 md:grid-cols-2 md:gap-24 ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className="service-number absolute -top-16 left-0 text-[12vw] font-bold leading-none tracking-[-0.08em] text-black/6 md:-top-24 md:text-[10vw]">{service.number}</div>
                    <div className="service-image relative z-10 aspect-4/3 overflow-hidden bg-gray-100"><img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /><div className="absolute inset-0 bg-linear-to-trom-black/30 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" /></div>
                    <div className="service-content relative z-10">
                    <div className="mb-8 flex items-center gap-4"><span className="text-sm font-semibold text-lime-600">{service.number}</span><div className="service-line h-px flex-1 bg-black/20" /></div>
                    <h3 className="text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">{service.title}</h3>
                    <p className="mt-8 max-w-lg text-lg leading-7 text-gray-500">{service.description}</p>
                    <div className="mt-10 grid grid-cols-2 gap-y-4 border-t border-black/10 pt-6">{service.items.map((item) => <div key={item} className="service-check flex items-center gap-3 text-sm font-medium"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400"><Check className="h-3 w-3" /></span>{item}</div>)}</div>
                    <button className="group mt-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider">Explore service <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black transition-all duration-300 group-hover:bg-black group-hover:text-white"><ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" /></span></button>
                    </div>
                </article>
                ))}
            </div>
            </div>
        </section>

        <section className="process-section relative overflow-hidden bg-[#080d08] px-6 py-32 md:px-16 md:py-48">
            <div className="absolute -right-40 top-20 h-96 w-96 rounded-full border border-lime-400/10" />
            <div className="mx-auto max-w-7xl">
            <div className="process-heading mb-20 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
                <div><p className="mb-5 text-sm uppercase tracking-[0.3em] text-lime-400">How we work / 002</p><h2 className="text-5xl font-light leading-[0.9] tracking-tight md:text-8xl">FROM IDEA<br />TO <span className="font-bold">IMPACT.</span></h2></div>
                <p className="max-w-md text-lg leading-7 text-white/40">Great work doesn't happen by accident. Our process keeps creativity focused, collaborative and built around results.</p>
            </div>
            <div className="border-t border-white/10">{process.map((step) => <div key={step.number} className="process-item group grid gap-5 border-b border-white/10 py-10 transition-all duration-500 hover:bg-white/3 md:grid-cols-[0.2fr_0.5fr_1fr] md:items-center"><span className="text-sm text-lime-400">{step.number}</span><h3 className="text-3xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">{step.title}</h3><p className="max-w-lg text-white/40 md:justify-self-end">{step.text}</p></div>)}</div>
            </div>
        </section>

        <section className="services-cta relative flex min-h-[80vh] items-center overflow-hidden bg-lime-400 px-6 py-32 text-black md:px-16">
            <div className="cta-shape absolute right-[8%] top-[15%] h-40 w-40 rounded-full border-[1.5rem] border-black/10 md:h-72 md:w-72 md:border-[3rem]" />
            <div className="cta-shape absolute bottom-[10%] left-[8%] h-20 w-20 rotate-45 border border-black/20 md:h-32 md:w-32" />
            <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="cta-small mb-8 text-sm font-semibold uppercase tracking-[0.3em]">Have a project in mind?</p>
            <div className="overflow-hidden"><h2 className="cta-line text-[16vw] font-light leading-[0.75] tracking-[-0.07em] md:text-[12vw]">LET'S</h2></div>
            <div className="overflow-hidden"><h2 className="cta-line text-[16vw] font-bold leading-[0.75] tracking-[-0.07em] md:text-[12vw]">CREATE.</h2></div>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><p className="max-w-md text-lg text-black/60">Tell us what you're building. We'll bring the strategy, creativity and technology to make it happen.</p><button className="cta-button group flex w-fit items-center gap-5 rounded-full bg-black px-7 py-5 text-sm font-semibold text-white transition-all duration-500 hover:scale-105 hover:bg-white hover:text-black">Let's Talk <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-black transition-transform duration-500 group-hover:rotate-45"><Plus className="h-4 w-4" /></span></button></div>
            </div>
        </section>

        </main>

        <Footer />
    </>
  );
}