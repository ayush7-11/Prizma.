import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [{ title: "CRAFTED PAYMENT GET-WAY", category: "App Design", image: "projects/img1.jpg" }, { title: "BRAND SURVEILLANCE AND ANALYSIS", category: "Branding", image: "projects/img2.jpg" }, { title: "DIGITAL STRATEGY CONSULTING", category: "Marketing", image: "projects/img3.jpg" }, { title: "WEBSITE MAINTENANCE AND SUPPORT", category: "Development", image: "projects/img4.jpg" }];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" } });

      tl.from(".projects-number", { scale: 0.5, opacity: 0, duration: 1, ease: "power4.out" })
        .from(".projects-plus", { scale: 0, rotation: -90, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.6")
        .from(".projects-heading", { y: 100, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.5")
        .from(".projects-button", { y: 30, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.5");

      gsap.utils.toArray(".project-card").forEach((card, index) => {
        const image = card.querySelector(".project-image");
        const title = card.querySelector(".project-title");
        const category = card.querySelector(".project-category");

        const cardTimeline = gsap.timeline({ scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" } });

        cardTimeline.from(image, { y: 100, opacity: 0, scale: 1.08, duration: 1, delay: index * 0.1, ease: "power4.out" })
          .from(title, { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
          .from(category, { y: 20, opacity: 0, duration: 0.5, ease: "power3.out" }, "-=0.4");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f7f7f7] px-6 py-20 text-black md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex items-center">
            <span className="projects-number text-[160px] font-medium leading-none tracking-[-0.08em] md:text-[230px]">300</span>
            <span className="projects-plus -ml-8 flex h-16 w-16 items-center justify-center rounded-full bg-black text-4xl text-white md:-ml-12 md:h-20 md:w-20">+</span>
          </div>

          <div>
            <h2 className="projects-heading text-5xl font-medium leading-[0.95] md:text-7xl">PROJECTS<br />COMPLETED<br />RECENTLY</h2>
            <button className="projects-button mt-8 border border-black px-5 py-3 text-xs transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white">View More Projects →</button>
          </div>
        </div>

        <div className="mt-20 grid justify-items-center gap-16 md:grid-cols-2 md:gap-x-20 md:gap-y-20">
          {projects.map((project, index) => (
            <div key={project.title} className={`project-card ${index % 2 !== 0 ? "md:mt-24" : ""}`}>
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="project-image w-md object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <h3 className="project-title mt-3 max-w-sm text-2xl font-medium leading-tight">{project.title}</h3>
              <span className="project-category mt-3 inline-block border border-gray-200 px-2 py-1 text-gray-500 md:text-[20px]">{project.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}