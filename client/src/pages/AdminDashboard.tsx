import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, AlertTriangle, Target, Wrench } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function AdminDashboard() {
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);

  const query = [
    {
      name: "Aruna Sinha",
      attendance: "2 min ago",
      grade: "Physics lab resistance box is not working",
      risk: "",
      gradeBreakdown: {
        practicalMarks: 40,
        theoryGrade: 50,
        classPerformance: 55,
        interactivityGrade: 45,
        teacherComments: "Needs to improve consistency and participation.",
      },
    }
  ];
  const finaid = [
    {
      name: "Pragati Scholarship for Girls (AICTE)",
      attendance: "Active",
      grade: "Till 2028",
      risk: "Only female students",
      gradeBreakdown: {
        practicalMarks: 40,
        theoryGrade: 50,
        classPerformance: 55,
        interactivityGrade: 45,
        teacherComments: "Needs to improve consistency and participation.",
      },
    },
    {
      name: "INSPIRE Scholarship (DST)",
      attendance: "Active",
      grade: "No End Date",
      risk: "Students scoring 80% or above",
      gradeBreakdown: {
        practicalMarks: 65,
        theoryGrade: 70,
        classPerformance: 60,
        interactivityGrade: 68,
        teacherComments: "Good effort, but theory understanding needs work.",
      },
    },
    {
      name: "Post Matric Scholarship for SC/ST/OBC/Minority Students",
      attendance: "Active",
      grade: "Class 10-12",
      risk: "SC/ST/OBC/Minority Students",
      gradeBreakdown: {
        practicalMarks: 75,
        theoryGrade: 70,
        classPerformance: 72,
        interactivityGrade: 74,
        teacherComments: "Decent performance, but can push for higher grades.",
      },
    },
  ];
  const atRiskStudents = [
    {
      name: "Rohan Deshmukh",
      attendance: "45%",
      grade: "D",
      risk: "High",
      gradeBreakdown: {
        practicalMarks: 40,
        theoryGrade: 50,
        classPerformance: 55,
        interactivityGrade: 45,
        teacherComments: "Needs to improve consistency and participation.",
      },
    },
    {
      name: "Ananya Singh",
      attendance: "67%",
      grade: "C-",
      risk: "Medium",
      gradeBreakdown: {
        practicalMarks: 65,
        theoryGrade: 70,
        classPerformance: 60,
        interactivityGrade: 68,
        teacherComments: "Good effort, but theory understanding needs work.",
      },
    },
    {
      name: "Ishita Nair",
      attendance: "72%",
      grade: "C",
      risk: "Medium",
      gradeBreakdown: {
        practicalMarks: 75,
        theoryGrade: 70,
        classPerformance: 72,
        interactivityGrade: 74,
        teacherComments: "Decent performance, but can push for higher grades.",
      },
    },
  ];
  

  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen animated-gradient-bg relative overflow-hidden">
      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      {/* Navbar */}
      <nav className="bg-card/90 backdrop-blur-sm border-b border-border relative z-10 hover-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 fade-in-left animate">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center pulse-glow ">
                <Wrench className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">VidyaVerse Admin</span>
            </div>
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="text-muted-foreground hover:text-foreground hover-glow ripple"
              data-testid="button-logout-admin"
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>
      {/* Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8 fade-in-up animate">
          <h1
            className="text-3xl font-bold text-foreground mb-2 typewriter"
            data-testid="text-dashboard-title"
          >
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">
            Monitor student progress and at-risk indicators with AI-powered
            insights
          </p>
        </div>
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-3d hover-glow pulse-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Total Students
                  </p>
                  <p
                    className="text-2xl font-bold text-card-foreground counter"
                    data-testid="text-total-students"
                  >
                    1,247
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-3d hover-glow pulse-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">At Risk</p>
                  <p
                    className="text-2xl font-bold text-destructive counter"
                    data-testid="text-at-risk"
                  >
                    23
                  </p>
                </div>
                <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-3d hover-glow pulse-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Engagement Rate
                  </p>
                  <p
                    className="text-2xl font-bold text-[#40762d] counter"
                    data-testid="text-success-rate"
                  >
                    94.2%
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-3d hover-glow pulse-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Interventions</p>
                  <p
                    className="text-2xl font-bold text-secondary counter"
                    data-testid="text-interventions"
                  >
                    156
                  </p>
                </div>
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Charts + At-Risk Students */}
        <div className="grid lg:grid-cols-2 gap-8 fade-in-up animate">
          <Card className="card-3d hover-glow">
            <CardHeader>
              <CardTitle className="">Risk Level Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center animated-gradient-bg overflow-hidden">
                <img
                  src="\yo.png" // ✅ replace with your image path
                  alt="Risk Level Distribution Chart"
                  className="object-contain h-full"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="card-3d hover-glow">
            <CardHeader>
              <CardTitle>At-Risk Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {atRiskStudents.map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover-glow card-3d"
                    data-testid={`row-student-${index}`}
                  >
                    <div>
                      <button
                        onClick={() => {
                          setSelectedStudent(student);
                          setIsGradeModalOpen(true);
                        }}
                        className="font-medium text-left hover:underline cursor-pointer"
                      >
                        {student.name}
                      </button>
                      <p className="text-sm text-muted-foreground">
                        Attendance: {student.attendance} | Grade:{" "}
                        {student.grade}
                      </p>
                    </div>
                    <Badge
                      variant={
                        student.risk === "High" ? "destructive" : "secondary"
                      }
                      className={`${
                        student.risk === "High"
                          ? "bg-destructive/10 text-destructive pulse-glow"
                          : "bg-secondary/30 text-secondary"
                      }`}
                    >
                      {student.risk} Risk
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="card-3d hover-glow">
            <CardHeader>
              <CardTitle>Active Financial Aids </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {finaid.map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover-glow card-3d"
                    data-testid={`row-student-${index}`}
                  >
                    <div>
                      <button
                        onClick={() => {
                          setSelectedStudent(student);
                          setIsGradeModalOpen(true);
                        }}
                        className="font-medium text-left hover:underline cursor-pointer"
                      >
                        {student.name}
                      </button>
                      <p className="text-sm text-muted-foreground">
                        Status: {student.attendance} | Validity:{" "}
                        {student.grade}
                      </p>
                    </div>
                    <Badge
                      variant={
                        student.risk === "High" ? "destructive" : "secondary"
                      }
                      className={`${
                        student.risk === "High"
                          ? "bg-destructive/10 text-destructive pulse-glow"
                          : "bg-secondary/30 text-secondary"
                      }`}
                    >
                      {student.risk} 
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="card-3d hover-glow">
            <CardHeader>
              <CardTitle>Student Queries and Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {query.map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover-glow card-3d"
                    data-testid={`row-student-${index}`}
                  >
                    <div>
                      <button
                        onClick={() => {
                          setSelectedStudent(student);
                          setIsGradeModalOpen(true);
                        }}
                        className="font-medium text-left hover:underline cursor-pointer"
                      >
                        {student.name}
                      </button>
                      <p className="text-sm text-muted-foreground">
                        Time: {student.attendance} | Issue:{" "}
                        {student.grade}
                      </p>
                    </div>
                    <Badge
                      variant={
                        student.risk === "High" ? "destructive" : "secondary"
                      }
                      className={`${
                        student.risk === "High"
                          ? "bg-destructive/10 text-destructive pulse-glow"
                          : "bg-secondary/30 text-secondary"
                      }`}
                    >
                      {student.risk} 
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 🎓 Grade Breakdown Dialog */}
          {selectedStudent && (
            <Dialog open={isGradeModalOpen} onOpenChange={setIsGradeModalOpen}>
              <DialogContent className="max-w-md mx-auto bg-card/95 backdrop-blur-lg border border-border rounded-3xl shadow-2xl text-white text-center">
                <DialogHeader>
                  <DialogTitle className="text-[#d7dea2] text-center pb-3">
                    🎖️ {selectedStudent.name} — Grade Breakdown
                  </DialogTitle>
                  <DialogDescription>
                    View detailed breakdown of {selectedStudent.name}'s grade
                    components and teacher feedback
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg hover-glow">
                      <p className="text-sm text-muted-foreground">
                        🔬 Practical Marks
                      </p>
                      <p className="text-xl font-bold text-primary">
                        {selectedStudent.gradeBreakdown.practicalMarks}%
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg hover-glow">
                      <p className="text-sm text-muted-foreground">
                        📚 Theory Grade
                      </p>
                      <p className="text-xl font-bold text-secondary">
                        {selectedStudent.gradeBreakdown.theoryGrade}%
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg hover-glow">
                      <p className="text-sm text-muted-foreground">
                        🎯 Class Performance
                      </p>
                      <p className="text-xl font-bold text-primary">
                        {selectedStudent.gradeBreakdown.classPerformance}%
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg hover-glow">
                      <p className="text-sm text-muted-foreground">
                        💬 Interactivity
                      </p>
                      <p className="text-xl font-bold text-secondary">
                        {selectedStudent.gradeBreakdown.interactivityGrade}%
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#d7dea2] mb-2">
                      💭 Teacher's Comments
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedStudent.gradeBreakdown.teacherComments}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>{" "}
        {/* ✅ closes grid */}
      </div>{" "}
      {/* ✅ closes container */}
    </div>
  );
}
