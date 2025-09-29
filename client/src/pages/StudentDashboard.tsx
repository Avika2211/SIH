import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertFeedbackSchema, type InsertFeedback } from "@shared/schema";
import ProgressRing from "@/components/ProgressRing";
import Chatbot from "@/components/Chatbot";

export default function StudentDashboard() {
  const [, setLocation] = useLocation();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertFeedback>({
    resolver: zodResolver(
      insertFeedbackSchema.extend({
        title: insertFeedbackSchema.shape.title.min(1, "Title is required"),
        message: insertFeedbackSchema.shape.message.min(
          1,
          "Message is required"
        ),
      })
    ),
    defaultValues: {
      title: "",
      message: "",
      studentName: "Aruna", // In a real app, this would come from user session
    },
  });

  const todos = [
    { task: "Do Math Homework", done: false },
    { task: "Prepare for Nukkad Natak on Monday", done: true },
    { task: "Ask Riya Ma'am for help in Cell Diagram", done: false },
    { task: "Complete SST Assignment", done: false },
  ];
  const resources = [
    {
      title: "Math Study Group",
      description: "Join peers for collaborative learning",
      action: "Learn More",
    },
    {
      title: "Time Management Workshop",
      description: "Boost your productivity skills",
      action: "Register",
    },
    {
      title: "Career Counseling and Personality test",
      description: "Explore your future pathways",
      action: "Schedule",
    },
  ];

  const activities = [
    "Completed Physics Assignment #5",
    "Attended Chemistry Lab Session",
    "Participated in Math Study Group",
    "Submitted English Essay Draft",
  ];

  const gradeBreakdown = {
    practicalMarks: 85,
    theoryGrade: 88,
    classPerformance: 92,
    interactivityGrade: 95,
    teacherComments:
      "Excellent improvement from last semester! Your participation in class discussions has been outstanding. Focus on strengthening theoretical concepts for even better results. Keep up the great work!",
  };

  const feedbackMutation = useMutation({
    mutationFn: async (data: InsertFeedback) => {
      const response = await apiRequest("POST", "/api/feedback", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "✅ Feedback Submitted!",
        description: "Your feedback has been sent to the admin successfully.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/feedback"] });
    },
    onError: (error) => {
      toast({
        title: "❌ Submission Failed",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
      console.error("Feedback submission error:", error);
    },
  });

  const handleFeedbackSubmit = (data: InsertFeedback) => {
    feedbackMutation.mutate(data);
  };

  return (
    <>
      <style >{`
        .fill-corner {
          position: relative;
          overflow: hidden;
          text: white;
          z-index: 10; /* Ensure content is above the pseudo-element */
        }

        .fill-corner::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-radius: 30px;
          background-color: #00192c;
          transition: width 0.3s ease, height 0.3s ease;
          z-index: -1;
        }

        .fill-corner:hover::after {
          width: 100%;
          height: 100%;
        }

        /* You can customize the starting corner by changing the pseudo-element's position */
        .fill-corner.top-right::after {
          top: 0;
          right: 0;
          left: auto;
        }

        .fill-corner.bottom-left::after {
          top: auto;
          left: 0;
          bottom: 0;
        }

        .fill-corner.bottom-right::after {
          top: auto;
          right: 0;
          bottom: 0;
          left: auto;
        }
      `}</style>

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
          style={{ top: "30%", animationDelay: "1s" }}
        ></div>
        <div
          className="shooting-star"
          style={{ top: "70%", animationDelay: "3s" }}
        ></div>
        <nav className="bg-card/90 backdrop-blur-sm border-b border-border relative z-10 hover-glow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3 fade-in-left animate">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center pulse-glow heartbeat">
                  <span className="text-primary-foreground font-bold">🎓</span>
                </div>
                <span className="text-lg font-semibold shimmer ">
                  ✨ My Learning Journey
                </span>
              </div>
              <Button
                variant="ghost"
                onClick={() => setLocation("/")}
                className="text-muted-foreground hover:text-foreground hover-glow ripple"
                data-testid="button-logout-student"
              >
                🚪 Logout
              </Button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="mb-8 fade-in-up animate">
            <h1 className="text-3xl font-bold text-foreground mb-2 typewriter ">
              🌟 Welcome back,{" "}
              <span data-testid="text-student-name" className="shimmer ">
                Aruna
              </span>
              !
            </h1>
            <p className="text-muted-foreground ">
              Track your progress and access personalized support with
              AI-powered insights
            </p>
          </div>

          {/* Progress Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className=" text-center rounded-full fill-corner card-3d hover-glow  group">
              <CardContent className="p-6 ">
                <div className="flex items-center justify-between mb-4 group-hover:text-white">
                  <h3 className="font-semibold text-card-foreground group-hover:text-white">
                    📊 Overall Progress
                  </h3>
                  <ProgressRing percentage={78} />
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                  You're doing great! Keep up the good work.
                </p>
              </CardContent>
            </Card>

            <Card className=" text-center card-3d hover-glow group rounded-full fill-corner">
              <CardContent className="p-6 m-auto">
                <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-white">
                  📅 Attendance
                </h3>
                <p
                  className="text-2xl font-bold text-foreground group-hover:text-white mb-1 counter"
                  data-testid="text-attendance"
                >
                  92%
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                  Excellent attendance this month
                </p>
              </CardContent>
            </Card>

            <Dialog open={isGradeModalOpen} onOpenChange={setIsGradeModalOpen}>
              <DialogTrigger asChild>
                <Card
                  className="card-3d hover-glow cursor-pointer group fill-corner text-center rounded-full"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsGradeModalOpen(true);
                    }
                  }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-white">
                      🎖️ Current Grade
                    </h3>
                    <p
                      className="text-2xl font-bold text-secondary mb-1 counter "
                      data-testid="text-grade"
                    >
                      B+
                    </p>
                    <p className="text-sm text-muted-foreground group-hover:text-white">
                      Click to view breakdown
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent
                className="max-w-md mx-auto bg-card/95 backdrop-blur-lg border border-border rounded-3xl shadow-2xl text-white text-center 
              "
              >
                <DialogHeader>
                  <DialogTitle className=" text-[#d7dea2] text-center pb-3">
                    🎖️ Grade Breakdown
                  </DialogTitle>
                  <DialogDescription className="">
                    View detailed breakdown of your current grade components and
                    teacher feedback
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg hover-glow">
                      <p className="text-sm text-muted-foreground premium-text">
                        🔬 Practical Marks
                      </p>
                      <p
                        className="text-xl font-bold text-primary counter"
                        data-testid="text-practical"
                      >
                        {gradeBreakdown.practicalMarks}%
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg hover-glow">
                      <p className="text-sm text-muted-foreground premium-text">
                        📚 Theory Grade
                      </p>
                      <p
                        className="text-xl font-bold text-secondary counter"
                        data-testid="text-theory"
                      >
                        {gradeBreakdown.theoryGrade}%
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg hover-glow">
                      <p className="text-sm text-muted-foreground premium-text">
                        🎯 Class Performance
                      </p>
                      <p
                        className="text-xl font-bold text-primary counter"
                        data-testid="text-performance"
                      >
                        {gradeBreakdown.classPerformance}%
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg hover-glow">
                      <p className="text-sm text-muted-foreground premium-text">
                        💬 Interactivity
                      </p>
                      <p
                        className="text-xl font-bold text-secondary counter"
                        data-testid="text-interactivity"
                      >
                        {gradeBreakdown.interactivityGrade}%
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-card-foreground mb-2 educational-text text-[#FFFFFF]">
                      💭 Teacher's Comments
                    </h4>
                    <p
                      className="text-sm text-muted-foreground  leading-relaxed"
                      data-testid="text-teacher-comments"
                    >
                      {gradeBreakdown.teacherComments}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <Card className="text-center rounded-full fill-corner card-3d hover-glow group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4 group-hover:text-white">
                <h3 className="font-semibold text-card-foreground group-hover:text-white">
                  📚 Homework Completion
                </h3>
                <ProgressRing percentage={62.5} />
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-white">
                Keep up the momentum to finish your assignments on time!</p>
            </CardContent>
          </Card>
          <br></br>
          {/* Support Resources */}
          <div className="grid lg:grid-cols-3 gap-8 fade-in-up animate">
            <Card className="card-3d hover-glow">
              <CardHeader>
                <CardTitle className="shimmer">
                  🎯 Recommended Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className="p-4 bg-muted/30 rounded-lg hover-glow ripple group hover:bg-[#00192C] card-3d"
                      data-testid={`card-resource-${index}`}
                    >
                      {/* <h4 className="font-medium">
                        {index === 0 ? "📚" : index === 1 ? "⏰" : "🎯"}{" "}
                        {resource.title}
                      </h4> */}
                      <p className="text-sm text-muted-foreground mt-1 group-hover:text-white ">
                        {resource.description}
                      </p>
                      <Button
                        variant="link"
                        className="mt-2 text-primary text-sm hover:text-primary/80 p-0 hover-glow ripple"
                        data-testid={`button-resource-${index}`}
                      >
                        ✨ {resource.action} →
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="card-3d hover-glow">
              <CardHeader>
                <CardTitle className="shimmer">To-Do List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todos.map((todo, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 hover-glow fade-in-left animate"
                      data-testid={`todo-${index}`}
                    >
                      <input
                        type="checkbox"
                        defaultChecked={todo.done}
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span
                        className={`text-sm ${
                          todo.done ? "line-through text-muted-foreground" : ""
                        }`}
                      >
                        {todo.task}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="card-3d hover-glow">
              <CardHeader>
                <CardTitle className="shimmer">📋 Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 hover-glow fade-in-left animate"
                      data-testid={`activity-${index}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full heartbeat ${
                          index % 2 === 0 ? "bg-primary" : "bg-secondary"
                        }`}
                      ></div>
                      <span className="text-sm">
                        {/* {index === 0
                          ? "🔬"
                          : index === 1
                          ? "⚗️"
                          : index === 2
                          ? "📊"
                          : "📝"}{" "} */}
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <br></br>
          
          <br></br>
          <Card className="text-center rounded-full fill-corner card-3d hover-glow group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4 group-hover:text-white">
                <h3 className="font-semibold text-card-foreground group-hover:text-white">
                  $ Active Financial Aid
                </h3>
                <div className="flex items-center justify-between mb-4 group-hover:text-white"><h3 className="font-semibold text-card-foreground group-hover:text-white"> Pragati Scholarship for Girls (AICTE)</h3></div>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-white">
                You are covered with a scholarship!</p>
            </CardContent>
          </Card>
          <br></br>
          {/* Student Feedback Section */}
          <div className="mb-8 fade-in-up animate">
            <Card className="card-3d hover-glow">
              <CardHeader>
                <CardTitle className="shimmer educational-text">
                  📝 Submit Feedback & Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleFeedbackSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-card-foreground premium-text">
                            📋 Issue Title
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder=" Brief title for your feedback or issue..."
                              className="mt-1 hover-glow"
                              data-testid="input-feedback-title"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-card-foreground premium-text">
                            💬 Detailed Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder=" Describe your feedback, suggestions, or any issues you'd like the admin to know about..."
                              rows={4}
                              className="mt-1 hover-glow"
                              data-testid="textarea-feedback-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={feedbackMutation.isPending}
                      className="w-full hover-glow ripple pulse-glow"
                      data-testid="button-submit-feedback"
                    >
                      {feedbackMutation.isPending
                        ? " Submitting..."
                        : " Submit to Admin"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chatbot Component */}
        <Chatbot
          isOpen={isChatbotOpen}
          onClose={() => setIsChatbotOpen(false)}
        />
      </div>
    </>
  );
}
