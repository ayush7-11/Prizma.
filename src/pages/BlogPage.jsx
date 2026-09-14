import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, MoveRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  { id: 1, number: "01", category: "DESIGN", title: "WHY MINIMALISM ISN'T ABOUT MAKING THINGS EMPTY", excerpt: "The strongest visual systems do less on purpose, leaving room for the ideas people need to notice.", date: "08 SEP 2026", read: "6 MIN READ", image: "/projects/img1.jpg" },
  { id: 2, number: "02", category: "TECH", title: "WHY A FAST WEBSITE IS PART OF YOUR BRAND", excerpt: "Performance is not only a technical metric. It changes the confidence, momentum and trust people feel.", date: "03 SEP 2026", read: "5 MIN READ", image: "/projects/img2.jpg" },
  { id: 3, number: "03", category: "BRANDING", title: "YOUR BRAND IS MORE THAN A LOGO", excerpt: "A recognisable brand lives in every small decision, interaction and experience around the mark.", date: "27 AUG 2026", read: "7 MIN READ", image: "/projects/img3.jpg" },
  { id: 4, number: "04", category: "DESIGN", title: "DESIGNING EXPERIENCES PEOPLE REMEMBER", excerpt: "The most useful digital products are the ones that feel clear, considered and unexpectedly human.", date: "21 AUG 2026", read: "8 MIN READ", image: "/projects/img4.jpg" },
  { id: 5, number: "05", category: "STRATEGY", title: "FROM BUSINESS IDEA TO DIGITAL EXPERIENCE", excerpt: "A good digital direction turns an ambitious thought into a system people can actually use.", date: "15 AUG 2026", read: "6 MIN READ", image: "/teamHero.jpg" },
  { id: 6, number: "06", category: "CULTURE", title: "THE LITTLE INTERACTIONS THAT CHANGE EVERYTHING", excerpt: "Motion, feedback and small moments of care can completely change how a brand feels online.", date: "08 AUG 2026", read: "5 MIN READ", image: "/testimonials/picc1.jpg" },
];

const categories = ["ALL", "DESIGN", "BRANDING", "TECH", "CULTURE", "STRATEGY"];

export default function BlogPage() {
  const pageRef = useRef(null);
  const listRef = useRef(null);
  const cursorImageRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [hoveredArticle, setHoveredArticle] = useState(null);

  const filteredArticles = useMemo(() => activeCategory === "ALL" ? articles : articles.filter((article) => article.category === activeCategory), [activeCategory]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set(".journal-kicker", { y: 20, opacity: 0 });
      gsap.set(".journal-title-line", { yPercent: 110 });
      gsap.set(".journal-ticker", { xPercent: 12, opacity: 0 });
      gsap.set(".journal-hero-note", { y: 24, opacity: 0 });

      heroTimeline
        .to(".journal-kicker", { y: 0, opacity: 1, duration: 0.6 })
        .to(".journal-title-line", { yPercent: 0, duration: 1.1, stagger: 0.1 }, "-=0.25")
        .to(".journal-ticker", { xPercent: 0, opacity: 1, duration: 0.9 }, "-=0.55")
        .to(".journal-hero-note", { y: 0, opacity: 1, duration: 0.65 }, "-=0.55");

      gsap.to(".journal-ticker-track", {
        xPercent: -22,
        ease: "none",
        scrollTrigger: { trigger: ".journal-hero", start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.set(".feature-image-mask", { clipPath: "inset(0 100% 0 0)" });
      gsap.set(".feature-copy > *", { y: 32, opacity: 0 });

      const featureTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".feature-section", start: "top 72%", toggleActions: "play none none reverse" },
      });

      featureTimeline
        .to(".feature-image-mask", { clipPath: "inset(0 0% 0 0)", duration: 1.25, ease: "power4.inOut" })
        .to(".feature-copy > *", { y: 0, opacity: 1, duration: 0.75, stagger: 0.1 }, "-=0.6");

      gsap.to(".feature-image", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: ".feature-section", start: "top bottom", end: "bottom top", scrub: 1 },
      });

      gsap.set(".journal-heading > *", { y: 50, opacity: 0 });
      gsap.to(".journal-heading > *", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".journal-section", start: "top 75%", toggleActions: "play none none reverse" },
      });

      gsap.set(".journal-ending-line", { yPercent: 110 });
      gsap.set(".journal-ending-meta", { y: 20, opacity: 0 });

      const endingTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".journal-ending", start: "top 75%", toggleActions: "play none none reverse" },
      });

      endingTimeline
        .to(".journal-ending-meta", { y: 0, opacity: 1, duration: 0.6 })
        .to(".journal-ending-line", { yPercent: 0, duration: 1, stagger: 0.1, ease: "power4.out" }, "-=0.2");
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const cursorImage = cursorImageRef.current;
    if (!list || !cursorImage) return undefined;

    const rows = gsap.utils.toArray(".journal-row", list);
    const cleanups = [];
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let frameId;

    const followCursor = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      gsap.set(cursorImage, { x: currentX, y: currentY });
      frameId = requestAnimationFrame(followCursor);
    };

    const onPointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const onWindowLeave = () => {
      setHoveredArticle(null);
      gsap.to(cursorImage, { autoAlpha: 0, scale: 0.92, duration: 0.25, overwrite: true });
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("blur", onWindowLeave);
    document.addEventListener("mouseleave", onWindowLeave);
    frameId = requestAnimationFrame(followCursor);

    const listTimeline = gsap.timeline();
    listTimeline.fromTo(rows, { clipPath: "inset(0 0 100% 0)", y: 18 }, { clipPath: "inset(0 0 0% 0)", y: 0, duration: 0.65, stagger: 0.075, ease: "power3.out" });

    rows.forEach((row) => {
      const articleId = Number(row.dataset.articleId);
      const title = row.querySelector(".journal-row-title");
      const number = row.querySelector(".journal-row-number");
      const arrow = row.querySelector(".journal-row-arrow");

      const onEnter = () => {
        setHoveredArticle(articles.find((article) => article.id === articleId));
        gsap.to(cursorImage, { autoAlpha: 1, scale: 1, duration: 0.3, ease: "power3.out", overwrite: true });
        gsap.to(title, { x: 16, duration: 0.35, ease: "power3.out", overwrite: true });
        gsap.to(number, { color: "#a3e635", duration: 0.25, overwrite: true });
        gsap.to(arrow, { x: 0, opacity: 1, duration: 0.25, overwrite: true });
      };

      const onLeave = () => {
        setHoveredArticle(null);
        gsap.to(cursorImage, { autoAlpha: 0, scale: 0.92, duration: 0.25, overwrite: true });
        gsap.to(title, { x: 0, duration: 0.35, ease: "power3.out", overwrite: true });
        gsap.to(number, { color: "#a1a1aa", duration: 0.25, overwrite: true });
        gsap.to(arrow, { x: -12, opacity: 0, duration: 0.25, overwrite: true });
      };

      row.addEventListener("mouseenter", onEnter);
      row.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        row.removeEventListener("mouseenter", onEnter);
        row.removeEventListener("mouseleave", onLeave);
      });
    });

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", onWindowLeave);
      document.removeEventListener("mouseleave", onWindowLeave);
      cleanups.forEach((cleanup) => cleanup());
      listTimeline.kill();
    };
  }, [activeCategory]);

  return (
    <>
      <main ref={pageRef} className="overflow-hidden bg-[#f4f4f1] text-black">
        <div ref={cursorImageRef} className="pointer-events-none fixed left-0 top-0 z-50 hidden h-52 w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-0 shadow-2xl md:block">
          {hoveredArticle && <img src={hoveredArticle.image} alt="" className="h-full w-full scale-110 object-cover" />}
        </div>

        <section className="journal-hero min-h-screen overflow-hidden bg-black px-6 pb-16 pt-32 text-white md:px-16 md:pb-20 md:pt-40">
          <div className="mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/20 pb-5">
                <p className="journal-kicker text-xs uppercase tracking-[0.28em] text-white/50">Prizma Journal / Vol. 01</p>
                <span className="journal-kicker text-xs uppercase tracking-[0.24em] text-lime-400">Selected Thinking</span>
              </div>

              <div className="mt-12">
                <div className="overflow-hidden"><h1 className="journal-title-line text-[17vw] font-medium leading-[0.75] tracking-[-0.08em] md:text-[12vw]">THE</h1></div>
                <div className="overflow-hidden"><h1 className="journal-title-line text-[17vw] font-medium leading-[0.75] tracking-[-0.08em] text-white/35 md:text-[12vw]">PRIZMA</h1></div>
                <div className="overflow-hidden"><h1 className="journal-title-line text-[17vw] font-medium leading-[0.75] tracking-[-0.08em] text-lime-400 md:text-[12vw]">JOURNAL.</h1></div>
              </div>
            </div>

            <div className="journal-hero-note mt-16 grid gap-8 border-t border-white/20 pt-6 md:grid-cols-[1fr_0.7fr]">
              <p className="max-w-xl text-lg leading-7 text-white/55">Observations on design, culture, brands and the digital details that make a lasting impression.</p>
              <p className="text-sm uppercase tracking-[0.2em] text-white/40 md:text-right">Read slowly. Make better things.</p>
            </div>
          </div>
        </section>

        <section className="journal-ticker overflow-hidden border-b border-black/15 bg-lime-400 py-4">
          <div className="journal-ticker-track flex w-max whitespace-nowrap text-sm font-semibold uppercase tracking-[0.24em]">
            <span>Design / Culture / Technology / Strategy / Opinion / Design / Culture / Technology / Strategy / Opinion / </span>
            <span>Design / Culture / Technology / Strategy / Opinion / Design / Culture / Technology / Strategy / Opinion / </span>
          </div>
        </section>

        <section className="feature-section bg-white px-6 py-28 md:px-16 md:py-44">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-center justify-between border-b border-black/15 pb-5 text-xs uppercase tracking-[0.22em] text-black/45">
              <span>Featured story</span>
              <span>08 Sep 2026</span>
            </div>

            <article className="grid gap-10 md:grid-cols-[1.35fr_0.65fr] md:gap-16">
              <div className="feature-image-mask aspect-16/10verflow-hidden bg-black">
                <img src="/projects/img1.jpg" alt="Minimalist design details" className="feature-image h-[115%] w-full object-cover" />
              </div>

              <div className="feature-copy flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black/45"><span className="text-lime-700">Design</span><span className="h-px w-8 bg-black/20" /><span>6 Min Read</span></div>
                  <h2 className="mt-8 text-5xl font-medium leading-[0.88] tracking-[-0.055em] md:text-7xl">WHY MINIMALISM ISN'T ABOUT MAKING THINGS EMPTY.</h2>
                  <p className="mt-8 max-w-md text-lg leading-7 text-black/55">Great design is not about stripping everything away. It is about knowing exactly what deserves to remain.</p>
                </div>

                <button className="group mt-12 flex w-fit items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em]">
                  Read the story
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black transition-colors duration-300 group-hover:bg-black group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span>
                </button>
              </div>
            </article>
          </div>
        </section>

        <section className="journal-section px-6 py-28 md:px-16 md:py-44">
          <div className="mx-auto max-w-7xl">
            <div className="journal-heading mb-16 flex flex-col gap-8 border-b border-black/15 pb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-black/45">More from the journal</p>
                <h2 className="mt-5 text-6xl font-medium leading-[0.8] tracking-[-0.07em] md:text-9xl">ALL<br /><span className="text-black/20">THOUGHTS.</span></h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-black/50">Hover a story to reveal its visual world. Choose a subject to narrow the reading list.</p>
            </div>

            <div className="mb-14 flex flex-wrap gap-x-6 gap-y-3">
              {categories.map((category) => (
                <button key={category} onClick={() => setActiveCategory(category)} className={`border-b pb-1 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${activeCategory === category ? "border-black text-black" : "border-transparent text-black/35 hover:text-black"}`}>
                  {category}
                </button>
              ))}
            </div>

            <div ref={listRef} className="journal-list border-t border-black/15">
              {filteredArticles.map((article) => (
                <article key={article.id} data-article-id={article.id} className="journal-row group relative grid cursor-none gap-5 border-b border-black/15 py-7 md:grid-cols-[0.16fr_1fr_0.26fr] md:items-center md:gap-10 md:py-9">
                  <span className="journal-row-number text-sm font-medium tracking-widest text-zinc-400">{article.number}</span>

                  <div>
                    <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-black/40"><span>{article.category}</span><span className="h-px w-6 bg-black/20" /><span>{article.read}</span></div>
                    <h3 className="journal-row-title mt-3 max-w-3xl text-3xl font-medium leading-[0.92] tracking-[-0.04em] md:text-5xl">{article.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-black/50 md:hidden">{article.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between gap-6 md:justify-end">
                    <p className="hidden max-w-44 text-sm leading-6 text-black/45 md:block">{article.excerpt}</p>
                    <span className="text-xs uppercase tracking-[0.16em] text-black/40">{article.date}</span>
                    <ArrowUpRight className="journal-row-arrow h-5 w-5 -translate-x-3 opacity-0" />
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && <p className="py-12 text-sm uppercase tracking-[0.18em] text-black/45">No stories in this section yet.</p>}
          </div>
        </section>

        <section className="journal-ending bg-black px-6 py-28 text-white md:px-16 md:py-44">
          <div className="mx-auto max-w-7xl">
            <div className="journal-ending-meta mb-12 flex items-center justify-between border-b border-white/20 pb-5 text-xs uppercase tracking-[0.22em] text-white/45">
              <span>Have something to say?</span>
              <MoveRight className="h-4 w-4" />
            </div>

            <a href="/contact" className="group block">
              <div className="overflow-hidden"><h2 className="journal-ending-line text-[13vw] font-medium leading-[0.8] tracking-[-0.075em] md:text-[10vw]">LET'S START</h2></div>
              <div className="overflow-hidden"><h2 className="journal-ending-line text-[13vw] font-medium leading-[0.8] tracking-[-0.075em] text-white/35 transition-colors duration-500 group-hover:text-white md:text-[10vw]">A CONVERSATION.</h2></div>
              <div className="mt-12 flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-white/55"><span>Get in touch</span><ArrowDownRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" /></div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}