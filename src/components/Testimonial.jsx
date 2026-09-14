import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [{ name: "Sarah Johnson", role: "Creative Director", image: "/testimonials/picc1.jpg", text: "Working with the team completely transformed our digital presence. They understood our vision and turned it into something beyond what we imagined." }, { name: "Michael Brown", role: "Founder & CEO", image: "/testimonials/pic2.jpg", text: "The entire process was smooth, creative and professional. They delivered exactly what our brand needed." }, { name: "Emily Davis", role: "Marketing Manager", image: "/testimonials/pic3.jpg", text: "From strategy to execution, the team was exceptional. Our new digital experience has made a huge difference." }];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current.querySelector(".testimonial-heading");
      const mainImage = sectionRef.current.querySelector(".testimonial-main-image");
      const quote = sectionRef.current.querySelector(".testimonial-quote");
      const quoteMark = sectionRef.current.querySelector(".testimonial-quote-mark");
      const mainInfo = sectionRef.current.querySelector(".testimonial-main-info");
      const cards = sectionRef.current.querySelectorAll(".testimonial-card");

      gsap.set(heading, { y: 80, opacity: 0 });
      gsap.set(mainImage, { y: 100, opacity: 0, scale: 1.08 });
      gsap.set(quoteMark, { scale: 0, opacity: 0, rotation: -20 });
      gsap.set(quote, { x: 80, opacity: 0 });
      gsap.set(mainInfo, { y: 40, opacity: 0 });
      gsap.set(cards, { y: 70, opacity: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .to(heading, { y: 0, opacity: 1, duration: 0.9, ease: "power4.out" })
        .to(mainImage, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" }, "-=0.4")
        .to(quoteMark, { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: "back.out(2)" }, "-=0.7")
        .to(quote, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .to(mainInfo, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .to(cards, { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out" }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#f5f5f5] px-6 py-24 text-black md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="testimonial-heading mx-auto max-w-5xl text-center text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl">HEAR WHAT OUR SATISFIED<br />CLIENTS HAVE TO SAY</h2>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div className="overflow-hidden">
            <img src={testimonials[0].image} alt={testimonials[0].name} className="testimonial-main-image h-105 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-130" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="testimonial-quote-mark text-7xl leading-none">“</span>
            <p className="testimonial-quote mt-4 max-w-xl text-2xl leading-relaxed md:text-3xl">{testimonials[0].text}</p>
            <div className="testimonial-main-info mt-10">
              <h3 className="text-lg font-semibold">{testimonials[0].name}</h3>
              <p className="mt-1 text-sm text-gray-500">{testimonials[0].role}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card border-t border-black/10 pt-6 transition-all duration-500 hover:-translate-y-3 hover:border-black/30">
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full">
                  <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}