import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed left-4 right-4 top-5 z-50 overflow-hidden rounded-3xl border border-white/10 backdrop-blur-2xl transition-all duration-500 md:left-1/2 md:right-auto md:w-[92%] md:max-w-6xl md:-translate-x-1/2 ${scrolled ? "bg-black/60 shadow-[0_0.5rem_2.5rem_rgba(0,0,0,0.45)]" : "bg-white/4"}`}>
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-b from-white/8 via-transparent to-transparent" />
      <div className="relative flex h-13 items-center justify-between px-5 md:px-6">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="transition-transform duration-300 hover:scale-110">
            <div className="text-lg font-semibold tracking-wide text-white">
                Prizma<span className="text-lime-400">.</span>
            </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-md text-white/70 transition hover:text-white">Home</Link>
          <Link to="/services" className="text-md text-white/70 transition hover:text-white">Services</Link>
          <Link to="/about" className="text-md text-white/70 transition hover:text-white">About</Link>
          <Link to="/blog" className="text-md text-white/70 transition hover:text-white">Blog</Link>
        </div>

        <button className="hidden rounded-full border border-lime-400/30 bg-lime-400/10 px-5 py-2 text-sm font-medium text-lime-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_1.5rem_rgba(163,230,53,0.25)] md:block">Let's Talk →</button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white transition-transform duration-300 hover:scale-110 md:hidden">{menuOpen ? <X size={25} /> : <Menu size={25} />}</button>
      </div>

        <div className={`overflow-hidden border-t border-white/10 transition-all duration-500 ease-out md:hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"}`}>
            <div className={`flex origin-top flex-col gap-5 px-5 py-6 transition-all duration-500 ease-out ${menuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"}`}>
                <Link onClick={() => setMenuOpen(false)} to="/" className="text-md text-white/70 transition hover:text-white">Home</Link>
                <Link onClick={() => setMenuOpen(false)} to="/services" className="text-md text-white/70 transition hover:text-white">Services</Link>
                <Link onClick={() => setMenuOpen(false)} to="/about" className="text-md text-white/70 transition hover:text-white">About</Link>
                <Link onClick={() => setMenuOpen(false)} to="/blog" className="text-md text-white/70 transition hover:text-white">Blog</Link>
                <button onClick={() => setMenuOpen(false)} className="w-fit rounded-full bg-lime-400 px-5 py-2 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300">Let's Talk →</button>
            </div>
        </div>
    </nav>
  );
}