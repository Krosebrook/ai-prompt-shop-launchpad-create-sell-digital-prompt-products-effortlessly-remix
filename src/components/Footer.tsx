import { Rocket } from "lucide-react";

export function Footer() {
  const footerLinks = {
    product: [
      { label: 'Browse Prompts', href: '/products' },
      { label: 'Bundles', href: '/bundles' },
      { label: 'Pricing', href: '/#pricing' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refunds' },
    ],
  };

  return (
    <footer className="py-16 px-4 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Rocket className="h-5 w-5 text-black" />
          </div>
          <span className="text-xl font-black tracking-tighter">PROMPT<span className="text-primary italic">SHOP</span></span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Licensing Agreement</a>
          <a href="#" className="hover:text-primary transition-colors">Contact Support</a>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Prompt Shop Launch Kit. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.2em]">
            Built for creators, by creators.
          </p>
        </div>
      </div>
    </footer>
  );
}
