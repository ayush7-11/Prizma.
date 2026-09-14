import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Aperture, Asterisk, Atom, Sparkles, Workflow } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [{ name: "DAVID K. ROZAR", role: "Founder & CEO", image: "/testimonials/picc1.jpg" }, { name: "REBECCA KAYLA", role: "Lead Developer", image: "/testimonials/pic2.jpg" }, { name: "ANTHONY STEVEN", role: "Lead Designer", image: "/testimonials/pic3.jpg" }];

const logos = [
        { name: "NORTHSTAR", Icon: Aperture },
        { name: "BRAND STANDARD", Icon: Asterisk },
        { name: "ATOMIC", Icon: Atom },
        { name: "LUMIN", Icon: Sparkles },
        { name: "WORKFLOW", Icon: Workflow },
        ];

export default function TeamSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current.querySelector(".team-heading");
      const members = sectionRef.current.querySelectorAll(".team-member");
      const memberImages = sectionRef.current.querySelectorAll(".team-image");
      const companyTitle = sectionRef.current.querySelector(".company-title");
      const logosElements = sectionRef.current.querySelectorAll(".company-logo");
      const newsletter = sectionRef.current.querySelector(".newsletter");
      const newsletterHeading = sectionRef.current.querySelector(".newsletter-heading");
      const newsletterText = sectionRef.current.querySelector(".newsletter-text");
      const newsletterForm = sectionRef.current.querySelector(".newsletter-form");

      gsap.set(heading, { y: 100, opacity: 0 });
      gsap.set(members, { y: 100, opacity: 0 });
      gsap.set(memberImages, { scale: 1.1 });
      gsap.set(companyTitle, { y: 40, opacity: 0 });
      gsap.set(logosElements, { y: 30, opacity: 0 });
      gsap.set(newsletter, { y: 80, opacity: 0 });
      gsap.set(newsletterHeading, { x: -50, opacity: 0 });
      gsap.set(newsletterText, { x: -30, opacity: 0 });
      gsap.set(newsletterForm, { x: 50, opacity: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .to(heading, { y: 0, opacity: 1, duration: 0.9, ease: "power4.out" })
        .to(members, { y: 0, opacity: 1, duration: 0.8, stagger: 0.18, ease: "power4.out" }, "-=0.4")
        .to(memberImages, { scale: 1, duration: 1, stagger: 0.18, ease: "power3.out" }, "-=0.9")
        .to(companyTitle, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.3")
        .to(logosElements, { y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: "power3.out" }, "-=0.3")
        .to(newsletter, { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }, "-=0.1")
        .to(newsletterHeading, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.5")
        .to(newsletterText, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.3")
        .to(newsletterForm, { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white text-[#11140e]">
      <div className="mx-auto max-w-350 px-6 py-24 md:px-12 md:py-32">
        <h2 className="team-heading max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-8xl">A FAST-GROWING<br />REMOTE-FOCUSED<br />TEAM</h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-14">
          {team.map((member) => (
            <div key={member.name} className="team-member group">
              <div className="relative overflow-hidden">
                <img src={member.image} alt={member.name} className="team-image aspect-[0.92] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-br-full bg-white text-gray-600 transition-all duration-500 group-hover:h-11 group-hover:w-11 group-hover:bg-lime-400"><span className="text-sm">♧</span></div>
              </div>
              <h3 className="mt-4 text-base font-medium uppercase transition-colors duration-300 group-hover:text-lime-600">{member.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-28">
          <div className="flex items-center justify-center gap-5">
            <div className="h-px flex-1 bg-gray-200" />
            <p className="company-title whitespace-nowrap text-xs font-medium uppercase md:text-sm">WE WORKED WITH THE WORLD'S BEST COMPANIES</p>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <section className="border-b border-white/10 bg-[#050705] mt-5  px-6 py-10 md:px-16">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
                    {logos.map(({ name, Icon }) => (
                    <div key={name} className="group flex items-center justify-center gap-3 text-white/35 transition-colors duration-300 hover:text-lime-400">
                        <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" strokeWidth={1.5} />
                        <span className="text-xs font-semibold tracking-[0.12em]">{name}</span>
                    </div>
                    ))}
                </div>
            </section>
        </div>
      </div>

      <div className="newsletter bg-[#f7f7f7]">
        <div className="mx-auto flex max-w-350 flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-12 md:py-20">
          <div>
            <h2 className="newsletter-heading text-4xl font-medium leading-none md:text-5xl">DON'T MISS A THING!</h2>
            <p className="newsletter-text mt-4 max-w-md text-lg leading-6 text-gray-500">Get our latest tips on how to improve your digital presence, subscribe to our free newsletter.</p>
          </div>

          <form className="newsletter-form flex w-full max-w-xl">
            <input type="email" placeholder="example@gmail.com" className="min-w-0 flex-1 border border-gray-200 bg-white px-5 py-4 text-sm outline-none placeholder:text-gray-400 transition-colors focus:border-black" />
            <button type="submit" className="bg-[#11140e] px-7 py-4 text-xs font-semibold text-white transition-all duration-300 hover:bg-lime-400 hover:text-black hover:px-9">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}