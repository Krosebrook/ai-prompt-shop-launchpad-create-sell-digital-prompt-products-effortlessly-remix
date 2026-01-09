import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Rocket className="h-5 w-5 text-black" />
          </div>
          <span className="text-xl font-black tracking-tighter">PROMPT<span className="text-primary italic">SHOP</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-tight uppercase">
          <a href="#" className="hover:text-primary transition-colors">The Opportunity</a>
          <a href="#" className="hover:text-primary transition-colors">How it works</a>
          <a href="#" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <div>
          <Button size="sm" className="rounded-full px-6 font-bold shadow-glow">
            Get Access
          </Button>
        </div>
      </div>
    </nav>
  );
}
