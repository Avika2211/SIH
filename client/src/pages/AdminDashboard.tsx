import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();

  const atRiskStudents = [
    {
      name: "Sarah Johnson",
      attendance: "45%",
      grade: "D",
      risk: "High"
    },
    {
      name: "Mike Chen", 
      attendance: "67%",
      grade: "C-",
      risk: "Medium"
    },
    {
      name: "Emma Davis",
      attendance: "72%", 
      grade: "C",
      risk: "Medium"
    }
  ];

  return (
    <div className="min-h-screen animated-gradient-bg relative overflow-hidden">
      {/* 🎆 FLOATING PARTICLES BACKGROUND 🎆 */}
      <div className="floating-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      <nav className="bg-card/90 backdrop-blur-sm border-b border-border relative z-10 hover-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 fade-in-left animate">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center pulse-glow heartbeat">
                <span className="text-primary-foreground font-bold">🛠️</span>
              </div>
              <span className="text-lg font-semibold shimmer">🚀 VidyaGrid Admin</span>
            </div>
            <Button 
              variant="ghost"
              onClick={() => setLocation("/")}
              className="text-muted-foreground hover:text-foreground hover-glow ripple"
              data-testid="button-logout-admin"
            >
              🚪 Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8 fade-in-up animate">
          <h1 className="text-3xl font-bold text-foreground mb-2 typewriter" data-testid="text-dashboard-title">📊 Dashboard Overview</h1>
          <p className="text-muted-foreground shimmer">Monitor student progress and at-risk indicators with AI-powered insights</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-3d hover-glow pulse-glow bounce-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">👥 Total Students</p>
                  <p className="text-2xl font-bold text-card-foreground counter" data-testid="text-total-students">1,247</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg heartbeat flex items-center justify-center">
                  <span className="text-primary">🎓</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-3d hover-glow pulse-glow bounce-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">⚠️ At Risk</p>
                  <p className="text-2xl font-bold text-destructive counter" data-testid="text-at-risk">23</p>
                </div>
                <div className="w-10 h-10 bg-destructive/10 rounded-lg heartbeat flex items-center justify-center">
                  <span className="text-destructive">🚨</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-3d hover-glow pulse-glow bounce-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">✅ Success Rate</p>
                  <p className="text-2xl font-bold text-primary counter" data-testid="text-success-rate">94.2%</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg heartbeat flex items-center justify-center">
                  <span className="text-primary">🎯</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-3d hover-glow pulse-glow bounce-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">💡 Interventions</p>
                  <p className="text-2xl font-bold text-secondary counter" data-testid="text-interventions">156</p>
                </div>
                <div className="w-10 h-10 bg-secondary/10 rounded-lg heartbeat flex items-center justify-center">
                  <span className="text-secondary">🛠️</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Alerts */}
        <div className="grid lg:grid-cols-2 gap-8 fade-in-up animate">
          <Card className="card-3d hover-glow">
            <CardHeader>
              <CardTitle className="shimmer">📈 Risk Level Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center animated-gradient-bg">
                <span className="text-muted-foreground bounce-in">🎯 Chart visualization would be implemented here</span>
              </div>
            </CardContent>
          </Card>
          <Card className="card-3d hover-glow">
            <CardHeader>
              <CardTitle className="shimmer">⚠️ At-Risk Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {atRiskStudents.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover-glow card-3d" data-testid={`row-student-${index}`}>
                    <div>
                      <p className="font-medium">👤 {student.name}</p>
                      <p className="text-sm text-muted-foreground">📊 Attendance: {student.attendance} | 📝 Grade: {student.grade}</p>
                    </div>
                    <Badge 
                      variant={student.risk === "High" ? "destructive" : "secondary"}
                      className={`${student.risk === "High" ? "bg-destructive/10 text-destructive pulse-glow" : "bg-secondary/30 text-secondary"} heartbeat`}
                    >
                      {student.risk === "High" ? "🚨" : "⚠️"} {student.risk} Risk
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
