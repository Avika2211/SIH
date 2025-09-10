import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [, setLocation] = useLocation();

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40 hover-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 fade-in-left animate">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center pulse-glow heartbeat">
              <span className="text-primary-foreground font-bold text-lg">🎓</span>
            </div>
            <span className="text-xl font-semibold text-foreground shimmer">VidyaGrid</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 bounce-in">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-smooth hover-glow">🏠 Home</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth hover-glow">✨ Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth hover-glow">💡 About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth hover-glow">📧 Contact</a>
          </div>
          <div className="flex items-center space-x-3 fade-in-right animate">
            <Button 
              onClick={() => setLocation("/login/admin")}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium hover-glow ripple"
              data-testid="button-nav-admin-login"
            >
              🛠️ Admin Login
            </Button>
            <Button 
              onClick={() => setLocation("/login/student")}
              className="px-4 py-2 text-sm font-medium hover-glow ripple pulse-glow"
              data-testid="button-nav-student-login"
            >
              🎓 Student Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
