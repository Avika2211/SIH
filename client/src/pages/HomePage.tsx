import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import libraryImagePath from "@assets/istockphoto-1351416161-612x612_1757502560121.jpg";

export default function HomePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen animated-gradient-bg relative overflow-hidden">
      {/* 🎆 FLOATING PARTICLES BACKGROUND 🎆 */}
      <div className="floating-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* 🌠 SHOOTING STARS 🌠 */}
      <div
        className="shooting-star"
        style={{ top: "20%", animationDelay: "0s" }}
      ></div>
      <div
        className="shooting-star"
        style={{ top: "60%", animationDelay: "2s" }}
      ></div>

      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-left animate">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight typewriter ">
                  Empowering Students,
                  <span className="text-primary  elegant-text">
                    {" "}
                    Enabling Success
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed ">
                  VidyaGrid helps schools and students stay connected, track
                  academic progress, and access personalized counseling through
                  AI-driven insights — for brighter futures and stronger
                  communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Button
                  onClick={() => setLocation("/login/admin")}
                  className="px-8 py-4 text-lg font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-smooth shadow-lg hover:shadow-xl hover:scale-[1.03] ripple hover-glow "
                  data-testid="button-admin-login"
                >
                  Admin Login
                </Button>
                <Button
                  onClick={() => setLocation("/login/student")}
                  className="px-8 py-4 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/80 transition-smooth shadow-lg hover:shadow-xl hover-glow hover:scale-[1.03] "
                  data-testid="button-student-login"
                >
                  Student Login
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground fade-in-up animate">
                <div className="flex items-center space-x-2 hover-glow">
                  <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                  <span> AI-Powered Insights</span>
                </div>
                <div className="flex items-center space-x-2 hover-glow">
                  <div className="w-3 h-3 bg-secondary rounded-full pulse-glow"></div>
                  <span> Personalized Support</span>
                </div>
              </div>
            </div>
            <div className="relative fade-in-right animate">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl card-3d hover-glow">
                <img
                  src={libraryImagePath}
                  alt="Teacher counseling students in library setting"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl shimmer"
                  data-testid="img-hero-library"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full "></div>
                    <span> Supporting Every Student's Journey</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 typewriter ">
               AI-Powered Student Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto shimmer transition-smooth duration-100 p-2 rounded-lg hover:scale-[1.2] hover:bg-[#c0bb91] ">
              Combining advanced analytics with compassionate support to ensure
              no student is left behind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 h-[300px]">
            <div className="group relative flex flex-col items-center justify-center bg-card/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border card-3d overflow-hidden ">
              <div
                className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/1f/b0/f7/1fb0f72c732c41bd70dd0052f14d2a6a.jpg')] 
                  bg-cover bg-center opacity-40 group-hover:opacity-0 transition-opacity duration-500"
              ></div>
              <h3 className="text-3xl font-semibold text-card-foreground educational-text w-full text-center absolute group-hover:opacity-0 ">
                ✨ Predictive Analytics
              </h3>
              <p
                className=" text-2xl absolute
               text-[#201712] text-muted-foreground  w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-2"
              >
                AI-driven insights identify at-risk students early, enabling
                timely interventions.
              </p>
            </div>

            <div
              className="group flex flex-col items-center justify-center bg-card/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border card-3d overflow-hidden hover:bg-[#a2d9ab] relative"
              data-testid="card-feature-counseling"
            >
              <div
                className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/8f/f3/03/8ff3032bccd3c09393e2abaeef0162d3.jpg')] 
                  bg-cover bg-center opacity-40 group-hover:opacity-0 transition-opacity duration-500"
              ></div>
              <h3 className="text-2xl font-semibold text-card-foreground educational-text w-full text-center absolute group-hover:opacity-0">
                🎯 Personalized Counseling
              </h3>
              <p className="text-2xl text-muted-foreground  w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute text-center p-2 text-[#201712]">
                Tailored guidance and resources to support each student's unique
                needs.
              </p>
            </div>

            <div
              className="group flex flex-col items-center justify-center bg-card/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border card-3d overflow-hidden hover:bg-[#a2d9ab] relative"
              data-testid="card-feature-support"
            >

              <div
                className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/07/f3/26/07f3263f1a1afb7277ca8b7b878e1299.jpg')] 
                  bg-cover bg-center opacity-40 group-hover:opacity-0 transition-opacity duration-500"
              ></div>
              <h3 className="text-2xl font-semibold text-card-foreground educational-text  text-center absolute w-full group-hover:opacity-0">
                🌟 Real-time AI Support
              </h3>
              <p className="text-2xl text-muted-foreground  w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute text-center p-2 text-[#201712]">
                24/7 AI chatbot provides immediate assistance and emotional
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/90 backdrop-blur-sm border-t border-border py-12 px-4 sm:px-6 lg:px-8 relative z-10">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-4 gap-8">
      <div className="space-y-4 fade-in-up animate">
        <div className="flex items-center space-x-3 hover-glow">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center pulse-glow">
            <span className="text-primary-foreground font-bold text-lg">
              V
            </span>
          </div>
          <span className="text-xl font-semibold text-card-foreground shimmer ">
            VidyaGrid
          </span>
        </div>
        <p className="text-muted-foreground ">
          Empowering students and enabling success through AI-driven
          insights and compassionate support.
        </p>
      </div>
      <div className="fade-in-up animate">
        <h4 className="font-semibold text-card-foreground mb-4  elegant-text">
          Platform
        </h4>
        <ul className="space-y-2 text-muted-foreground premium-text">
          <li>
            <a
              href="#"
              className="hover:text-foreground transition-smooth hover-glow"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-foreground transition-smooth hover-glow"
            >
              Security
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-foreground transition-smooth hover-glow"
            >
              Integration
            </a>
          </li>
        </ul>
      </div>
      <div className="fade-in-up animate">
        <h4 className="font-semibold text-card-foreground mb-4  elegant-text">
          Support
        </h4>
        <ul className="space-y-2 text-muted-foreground premium-text">
          <li>
            <a
              href="#"
              className="hover:text-foreground transition-smooth hover-glow"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-foreground transition-smooth hover-glow"
            >
              Help Center
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-foreground transition-smooth hover-glow"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="fade-in-up animate">
        <h4 className="font-semibold text-card-foreground mb-4  elegant-text">
          Legal
        </h4>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <a
              href="#"
              className="hover:text-foreground transition-smooth hover-glow"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-foreground transition-smooth hover-glow"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-foreground transition-smooth hover-glow"
            >
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground fade-in-up animate">
      <p className="shimmer premium-text">
        © 2024 VidyaGrid. All rights reserved. Made with love for
        students everywhere!
      </p>
    </div>
  </div>
</footer>

    </div>
  );
}
