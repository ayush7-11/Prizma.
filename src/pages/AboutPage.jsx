import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { number: "01", title: "CREATIVITY", text: "We challenge the obvious, explore new perspectives and create work that refuses to disappear into the crowd." },
  { number: "02", title: "STRATEGY", text: "Every visual decision has a reason. We connect creativity with strategy to create work that actually moves businesses forward." },
  { number: "03", title: "COLLABORATION", text: "The best ideas don't happen in isolation. We work closely with our clients and turn shared thinking into meaningful work." },
  { number: "04", title: "QUALITY", text: "We care about the details. From the first idea to the final interaction, everything should feel intentional." },
];

const team = [
  { name: "DAVID K. ROZAR", role: "Founder & CEO", image: "/testimonials/picc1.jpg" },
  { name: "REBECCA KAYLA", role: "Lead Developer", image: "/testimonials/pic2.jpg" },
  { name: "ANTHONY STEVEN", role: "Lead Designer", image: "/testimonials/pic3.jpg" },
];

const stats = [
  { number: 26, suffix: "+", label: "Projects delivered" },
  { number: 40, suffix: "+", label: "Brands worked with" },
  { number: 2, suffix: "K+", label: "Creative hours" },
  { number: 25, suffix: "", label: "Awards & recognitions" },
];

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set(".about-hero-small", { y: 30, opacity: 0 });
      gsap.set(".about-hero-line", { yPercent: 110 });
      gsap.set(".about-hero-image", { scale: 1.15, opacity: 0 });
      gsap.set(".about-hero-arrow", { scale: 0, rotation: -45 });

      hero
        .to(".about-hero-small", { y: 0, opacity: 1, duration: 0.7 })
        .to(".about-hero-line", { yPercent: 0, duration: 1.1, stagger: 0.12 }, "-=0.35")
        .to(".about-hero-image", { scale: 1, opacity: 1, duration: 1.3 }, "-=0.7")
        .to(".about-hero-arrow", { scale: 1, rotation: 0, duration: 0.7, ease: "back.out(1.7)" }, "-=0.6");

      gsap.to(".about-hero-image", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.set(".manifesto-line", { y: 100, opacity: 0 });

      gsap.to(".manifesto-line", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".manifesto",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.set(".story-image", { x: -100, opacity: 0, scale: 1.08 });
      gsap.set(".story-content", { x: 100, opacity: 0 });
      gsap.set(".story-number", { scale: 0.5, opacity: 0 });

      const story = gsap.timeline({
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      story
        .to(".story-number", { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" })
        .to(".story-image", { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" }, "-=0.5")
        .to(".story-content", { x: 0, opacity: 1, duration: 1.1, ease: "power4.out" }, "-=0.9");

      gsap.to(".story-image", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".story-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray(".stat-card").forEach((card, index) => {
        const number = card.querySelector(".stat-number");

        gsap.set(card, { y: 80, opacity: 0, rotate: index % 2 === 0 ? -4 : 4 });
        gsap.to(card, {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          delay: index * 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        const counter = { value: 0 };

        gsap.to(counter, {
          value: stats[index].number,
          duration: 1.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            number.textContent = Math.round(counter.value) + stats[index].suffix;
          },
        });
      });

      gsap.set(".values-heading", { y: 80, opacity: 0 });

      gsap.to(".values-heading", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray(".value-card").forEach((card, index) => {
        gsap.set(card, { y: 70, opacity: 0 });

        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: index * 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.set(".team-heading", { y: 80, opacity: 0 });

      gsap.to(".team-heading", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray(".team-card").forEach((card, index) => {
        const image = card.querySelector(".team-image");
        const name = card.querySelector(".team-name");

        gsap.set(card, { y: 100, opacity: 0 });

        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".team-section",
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.set(image, { scale: 1.12 });

        card.addEventListener("mouseenter", () => {
          gsap.to(image, { scale: 1, duration: 0.7, ease: "power3.out" });
          gsap.to(name, { x: 8, color: "#a3e635", duration: 0.3 });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(image, { scale: 1.12, duration: 0.7, ease: "power3.out" });
          gsap.to(name, { x: 0, color: "", duration: 0.3 });
        });
      });

      gsap.set(".about-cta-line", { yPercent: 120 });
      gsap.set(".about-cta-small", { y: 30, opacity: 0 });
      gsap.set(".about-cta-button", { scale: 0.7, opacity: 0 });

      const cta = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-cta",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      cta
        .to(".about-cta-small", { y: 0, opacity: 1, duration: 0.7 })
        .to(".about-cta-line", { yPercent: 0, duration: 1.1, stagger: 0.12 }, "-=0.4")
        .to(".about-cta-button", { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");

      gsap.to(".about-cta-ring", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main ref={pageRef} className="overflow-hidden bg-[#080d08] text-white">

        <section className="about-hero relative flex min-h-screen items-center overflow-hidden px-6 py-32 md:px-16">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_45%,rgba(163,230,53,0.12),transparent_30%),radial-gradient(circle_at_15%_70%,rgba(255,255,255,0.04),transparent_25%)]" />
          <div className="absolute right-[10%] top-[18%] h-40 w-40 rounded-full border border-white/10 md:h-72 md:w-72" />
          <div className="about-hero-arrow absolute right-[18%] top-[30%] flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-black md:h-28 md:w-28"><ArrowDownRight className="h-8 w-8 md:h-12 md:w-12" /></div>
          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="about-hero-small mb-8 text-sm uppercase tracking-[0.3em] text-lime-400">Who we are / 002</p>
            <div className="overflow-hidden"><h1 className="about-hero-line text-[17vw] font-light leading-[0.78] tracking-[-0.07em] md:text-[12vw]">WE ARE</h1></div>
            <div className="overflow-hidden"><h1 className="about-hero-line text-[17vw] font-bold leading-[0.78] tracking-[-0.07em] text-lime-400 md:text-[12vw]">PRIZMA.</h1></div>
            <div className="mt-16 grid gap-10 md:grid-cols-[0.8fr_0.7fr] md:items-end">
              <p className="about-hero-small max-w-xl text-lg leading-7 text-white/50">We are a creative digital agency built around one simple belief: great ideas deserve great execution.</p>
              <div className="about-hero-image aspect-4/3verflow-hidden"><img src="/teamHero.jpg" alt="Prizma team" className="h-full w-full object-cover" /></div>
            </div>
          </div>
        </section>

        <section className="manifesto overflow-hidden bg-white px-6 py-32 text-black md:px-16 md:py-48">
          <div className="mx-auto max-w-7xl">
            <p className="mb-10 text-sm uppercase tracking-[0.3em] text-gray-400">Our philosophy / 003</p>
            <div className="overflow-hidden"><h2 className="manifesto-line text-5xl font-medium leading-[0.95] tracking-tight md:text-8xl">WE BELIEVE</h2></div>
            <div className="overflow-hidden"><h2 className="manifesto-line text-5xl font-medium leading-[0.95] tracking-tight text-gray-300 md:text-8xl">ORDINARY IS</h2></div>
            <div className="overflow-hidden"><h2 className="manifesto-line text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">NEVER ENOUGH.</h2></div>
            <p className="manifesto-line mt-12 max-w-2xl text-lg leading-7 text-gray-500">We combine strategy, design and technology to build brands and digital experiences that people remember.</p>
          </div>
        </section>

        <section className="story-section bg-[#080d08] px-6 py-32 md:px-16 md:py-48">
          <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_0.8fr] md:items-center md:gap-24">
            <div className="relative">
              <span className="story-number absolute -left-4 -top-20 text-[12vw] font-bold leading-none tracking-[-0.08em] text-white/5 md:-left-10 md:text-[10vw]">01</span>
              <div className="story-image relative z-10 aspect-4/5 overflow-hidden"><img src="/team.jpg" alt="Prizma team" className="h-full w-full object-cover" /></div>
            </div>
            <div className="story-content">
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-lime-400">Our story</p>
              <h2 className="text-5xl font-light leading-[0.9] tracking-tight md:text-7xl">BUILT TO MAKE<br /><span className="font-bold">A DIFFERENCE.</span></h2>
              <p className="mt-10 text-lg leading-8 text-white/40">Prizma started with a simple idea: digital work should be more than decoration. It should make people feel something, solve real problems and help businesses move forward.</p>
              <p className="mt-6 text-lg leading-8 text-white/40">Today, we bring together strategy, creativity and technology to create experiences that connect brands with the people who matter most.</p>
              <button className="group mt-10 flex items-center gap-4 text-sm font-semibold uppercase tracking-wider">Discover our approach <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:bg-lime-400 group-hover:text-black"><ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" /></span></button>
            </div>
          </div>
        </section>

        <section className="stats-section bg-lime-400 px-6 py-24 text-black md:px-16 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex items-end justify-between"><div><p className="mb-4 text-sm uppercase tracking-[0.3em]">By the numbers</p><h2 className="text-5xl font-medium leading-[0.9] tracking-tight md:text-7xl">A FEW<br />NUMBERS.</h2></div><span className="hidden text-sm md:block">004 / 004</span></div>
            <div className="grid gap-4 md:grid-cols-4">{stats.map((stat) => <div key={stat.label} className="stat-card min-h-64 border border-black/20 p-7 md:min-h-80"><span className="stat-number text-7xl font-bold leading-none tracking-tight md:text-8xl">{stat.number}{stat.suffix}</span><div className="mt-20 border-t border-black/20 pt-5 text-sm uppercase tracking-wider">{stat.label}</div></div>)}</div>
          </div>
        </section>

        <section className="values-section bg-white px-6 py-32 text-black md:px-16 md:py-48">
          <div className="mx-auto max-w-7xl">
            <div className="values-heading mb-20 grid gap-10 md:grid-cols-[1fr_0.6fr] md:items-end"><div><p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-400">What drives us / 005</p><h2 className="text-5xl font-medium leading-[0.9] tracking-tight md:text-8xl">THE WAY<br /><span className="text-gray-300">WE THINK.</span></h2></div><p className="text-lg leading-7 text-gray-500">Our principles shape every project, every decision and every interaction.</p></div>
            <div className="grid border-t border-black/10 md:grid-cols-2">{values.map((value) => <div key={value.number} className="value-card group border-b border-black/10 p-8 transition-all duration-500 hover:bg-black hover:text-white md:min-h-80 md:p-12"><div className="flex items-start justify-between"><span className="text-sm text-lime-600 group-hover:text-lime-400">{value.number}</span><ArrowUpRight className="h-5 w-5 opacity-30 transition-transform duration-500 group-hover:rotate-45 group-hover:opacity-100" /></div><h3 className="mt-16 text-3xl font-semibold md:text-5xl">{value.title}</h3><p className="mt-5 max-w-md text-gray-500 transition-colors duration-500 group-hover:text-white/40">{value.text}</p></div>)}</div>
          </div>
        </section>

        <section className="team-section bg-[#080d08] px-6 py-32 md:px-16 md:py-48">
          <div className="mx-auto max-w-7xl">
            <div className="team-heading mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="mb-5 text-sm uppercase tracking-[0.3em] text-lime-400">The people / 006</p><h2 className="text-5xl font-light leading-[0.9] md:text-8xl">MEET THE<br /><span className="font-bold">TEAM.</span></h2></div><p className="max-w-sm text-white/40">A small team with big ideas, working across strategy, design and technology.</p></div>
            <div className="grid gap-8 md:grid-cols-3">{team.map((member) => <article key={member.name} className="team-card group"><div className="relative aspect-3/4 overflow-hidden bg-white/5"><img src={member.image} alt={member.name} className="team-image h-full w-full object-cover" /><div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-black opacity-0 transition-all duration-500 group-hover:opacity-100"><ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" /></div></div><div className="mt-5 flex items-end justify-between border-b border-white/10 pb-5"><div><h3 className="team-name text-lg font-semibold transition-colors">{member.name}</h3><p className="mt-1 text-sm text-white/40">{member.role}</p></div></div></article>)}</div>
          </div>
        </section>

        <section className="about-cta relative flex min-h-[75vh] items-center overflow-hidden bg-white px-6 py-32 text-black md:px-16">
          <div className="about-cta-ring absolute right-[8%] top-[15%] h-48 w-48 rounded-full border-[1.5rem] border-black/10 md:h-80 md:w-80 md:border-[3rem]" />
          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="about-cta-small mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">Have something ambitious in mind?</p>
            <div className="overflow-hidden"><h2 className="about-cta-line text-[16vw] font-light leading-[0.75] tracking-[-0.07em] md:text-[12vw]">LET'S</h2></div>
            <div className="overflow-hidden"><h2 className="about-cta-line text-[16vw] font-bold leading-[0.75] tracking-[-0.07em]">MAKE</h2></div>
            <div className="overflow-hidden"><h2 className="about-cta-line text-[16vw] font-bold leading-[0.75] tracking-[-0.07em] text-lime-500 md:text-[12vw]">SOMETHING.</h2></div>
            <button className="about-cta-button group mt-12 flex items-center gap-5 rounded-full bg-black px-7 py-5 text-sm font-semibold text-white transition-all duration-500 hover:scale-105 hover:bg-lime-400 hover:text-black">Start a conversation <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-black transition-transform duration-500 group-hover:rotate-45 group-hover:bg-black group-hover:text-white"><Plus className="h-4 w-4" /></span></button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}