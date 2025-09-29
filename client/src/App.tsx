import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import AdminDashboard from "@/pages/AdminDashboard";
import StudentDashboard from "@/pages/StudentDashboard";
import NotFound from "@/pages/not-found";
import TeacherDashboard from "./pages/TeacherDashboard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/login/:userType" component={LoginPage} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/student" component={StudentDashboard} />
      <Route path="/teacher" component={TeacherDashboard } />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
