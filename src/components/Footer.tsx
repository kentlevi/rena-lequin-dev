export default function Footer() {
  return (
    <footer className="bg-ink text-sand py-12 px-6 md:px-12 border-t border-sand/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-2 text-sm font-light text-sand/60">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>Rena Lequin.</span>
          <span className="hidden md:inline">All rights reserved.</span>
        </div>
        
        <a href="#" className="font-serif text-2xl tracking-tight text-white hover:text-stone transition-colors">
          RL.
        </a>

        <div className="flex gap-6 text-xs uppercase tracking-widest text-sand/60">
          <a href="#about" className="hover:text-sand transition-colors">About</a>
          <a href="#work" className="hover:text-sand transition-colors">Work</a>
          <a href="#contact" className="hover:text-sand transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
