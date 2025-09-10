import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressRing from "@/components/ProgressRing";
import Chatbot from "@/components/Chatbot";

export default function StudentDashboard() {
  const [, setLocation] = useLocation();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const resources = [
    {
      title: "Math Study Group",
      description: "Join peers for collaborative learning",
      action: "Learn More"
    },
    {
      title: "Time Management Workshop", 
      description: "Boost your productivity skills",
      action: "Register"
    },
    {
      title: "Career Counseling",
      description: "Explore your future pathways", 
      action: "Schedule"
    }
  ];

  const activities = [
    "Completed Physics Assignment #5",
    "Attended Chemistry Lab Session", 
    "Participated in Math Study Group",
    "Submitted English Essay Draft"
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">V</span>
              </div>
              <span className="text-lg font-semibold">My Learning Journey</span>
            </div>
            <Button 
              variant="ghost"
              onClick={() => setLocation("/")}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-logout-student"
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, <span data-testid="text-student-name">Alex</span>!
          </h1>
          <p className="text-muted-foreground">Track your progress and access personalized support</p>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-card-foreground">Overall Progress</h3>
                <ProgressRing percentage={78} />
              </div>
              <p className="text-sm text-muted-foreground">You're doing great! Keep up the good work.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-card-foreground mb-2">Attendance</h3>
              <p className="text-2xl font-bold text-primary mb-1" data-testid="text-attendance">92%</p>
              <p className="text-sm text-muted-foreground">Excellent attendance this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-card-foreground mb-2">Current Grade</h3>
              <p className="text-2xl font-bold text-secondary mb-1" data-testid="text-grade">B+</p>
              <p className="text-sm text-muted-foreground">↑ Improved from last semester</p>
            </CardContent>
          </Card>
        </div>

        {/* Support Resources */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg" data-testid={`card-resource-${index}`}>
                    <h4 className="font-medium">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                    <Button 
                      variant="link" 
                      className="mt-2 text-primary text-sm hover:text-primary/80 p-0"
                      data-testid={`button-resource-${index}`}
                    >
                      {resource.action} →
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`activity-${index}`}>
                    <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}></div>
                    <span className="text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Chatbot Button */}
      <Button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-smooth z-50 p-0"
        data-testid="button-chatbot-toggle"
      >
        <span className="text-2xl">💬</span>
      </Button>

      {/* Chatbot Component */}
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
}
