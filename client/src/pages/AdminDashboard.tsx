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
    <div className="min-h-screen bg-background">
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">V</span>
              </div>
              <span className="text-lg font-semibold">VidyaGrid Admin</span>
            </div>
            <Button 
              variant="ghost"
              onClick={() => setLocation("/")}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-logout-admin"
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2" data-testid="text-dashboard-title">Dashboard Overview</h1>
          <p className="text-muted-foreground">Monitor student progress and at-risk indicators</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Students</p>
                  <p className="text-2xl font-bold text-card-foreground" data-testid="text-total-students">1,247</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">At Risk</p>
                  <p className="text-2xl font-bold text-destructive" data-testid="text-at-risk">23</p>
                </div>
                <div className="w-10 h-10 bg-destructive/10 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Success Rate</p>
                  <p className="text-2xl font-bold text-primary" data-testid="text-success-rate">94.2%</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Interventions</p>
                  <p className="text-2xl font-bold text-secondary" data-testid="text-interventions">156</p>
                </div>
                <div className="w-10 h-10 bg-secondary/10 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Alerts */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Risk Level Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Chart visualization would be implemented here</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>At-Risk Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {atRiskStudents.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg" data-testid={`row-student-${index}`}>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">Attendance: {student.attendance} | Grade: {student.grade}</p>
                    </div>
                    <Badge 
                      variant={student.risk === "High" ? "destructive" : "secondary"}
                      className={student.risk === "High" ? "bg-destructive/10 text-destructive" : "bg-secondary/30 text-secondary"}
                    >
                      {student.risk} Risk
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
