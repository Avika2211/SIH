import { useLocation, useParams } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const { userType } = useParams();
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAdmin = userType === "admin";
  const title = isAdmin ? "Admin Login" : "Student Login";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdmin) {
      setLocation("/admin");
    } else {
      setLocation("/student");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-md w-full">
        <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-2xl">V</span>
            </div>
            <h2 className="text-2xl font-bold text-card-foreground" data-testid="text-login-title">{title}</h2>
            <p className="text-muted-foreground mt-2">Welcome back to VidyaGrid</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">Email</Label>
              <Input 
                id="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                placeholder="Enter your email" 
                data-testid="input-email"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-card-foreground mb-2">Password</Label>
              <Input 
                id="password"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                placeholder="Enter your password" 
                data-testid="input-password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-muted-foreground">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-primary hover:text-primary/80">Forgot password?</a>
            </div>
            <Button 
              type="submit" 
              className="w-full"
              data-testid="button-signin"
            >
              Sign In
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Button 
              variant="ghost"
              onClick={() => setLocation("/")}
              className="text-muted-foreground hover:text-foreground transition-smooth"
              data-testid="button-back-home"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
