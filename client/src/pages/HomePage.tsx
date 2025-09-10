import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import libraryImagePath from "@assets/istockphoto-1351416161-612x612_1757502560121.jpg";

export default function HomePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Empowering Students,
                  <span className="text-primary"> Enabling Success</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  VidyaGrid helps schools and students stay connected, track academic progress, and access personalized counseling through AI-driven insights — for brighter futures and stronger communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setLocation("/login/admin")}
                  className="px-8 py-4 text-lg font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-smooth shadow-lg hover:shadow-xl"
                  data-testid="button-admin-login"
                >
                  Admin Login
                </Button>
                <Button 
                  onClick={() => setLocation("/login/student")}
                  className="px-8 py-4 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/80 transition-smooth shadow-lg hover:shadow-xl"
                  data-testid="button-student-login"
                >
                  Student Login
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>AI-Powered Insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span>Personalized Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={libraryImagePath} 
                  alt="Teacher counseling students in library setting" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  data-testid="img-hero-library"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Supporting Every Student's Journey</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              AI-Powered Student Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining advanced analytics with compassionate support to ensure no student is left behind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border transition-smooth hover:shadow-xl" data-testid="card-feature-analytics">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Predictive Analytics</h3>
              <p className="text-muted-foreground">AI-driven insights identify at-risk students early, enabling timely interventions.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border transition-smooth hover:shadow-xl" data-testid="card-feature-counseling">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-secondary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Personalized Counseling</h3>
              <p className="text-muted-foreground">Tailored guidance and resources to support each student's unique needs.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border transition-smooth hover:shadow-xl" data-testid="card-feature-support">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Real-time Support</h3>
              <p className="text-muted-foreground">24/7 AI chatbot provides immediate assistance and emotional support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">V</span>
                </div>
                <span className="text-xl font-semibold text-card-foreground">VidyaGrid</span>
              </div>
              <p className="text-muted-foreground">Empowering students and enabling success through AI-driven insights and compassionate support.</p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Security</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Integration</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 VidyaGrid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
