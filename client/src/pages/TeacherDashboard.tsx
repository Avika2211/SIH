import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wrench } from "lucide-react";

export default function TeacherDashboard() {
  const [, setLocation] = useLocation();

  const students = [
    { roll: "101", name: "Aarav Sharma" },
    { roll: "102", name: "Riya Verma" },
    { roll: "103", name: "Vivaan Patel" },
    { roll: "104", name: "Ananya Singh" },
    { roll: "105", name: "Kabir Mehta" },
    { roll: "106", name: "Sanya Gupta" },
    { roll: "107", name: "Aditya Rao" },
    { roll: "108", name: "Ishita Nair" },
    { roll: "109", name: "Krishna Iyer" },
    { roll: "110", name: "Pooja Joshi" },
    { roll: "111", name: "Rohan Deshmukh" },
    { roll: "112", name: "Neha Chauhan" },
    { roll: "113", name: "Yash Malhotra" },
    { roll: "114", name: "Shruti Sharma" },
    { roll: "115", name: "Manav Kapoor" },
];


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
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center pulse-glow">
                <Wrench className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">VidyaVerse Teacher</span>
            </div>
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="text-muted-foreground hover:text-foreground hover-glow ripple"
              data-testid="button-logout-teacher"
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8 fade-in-up animate text-center">
          <h1
            className="text-3xl font-bold text-foreground mb-2 typewriter"
            data-testid="text-dashboard-title"
          >
            Teacher Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage student attendance, feedback, and grades
          </p>
        </div>

        <Card className="card-3d hover-glow fade-in-up animate">
          <CardHeader>
            <CardTitle className="text-center">📋 Student Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead className="bg-muted/30">
                  <tr className="text-left text-foreground">
                    <th className="p-3">Roll Number</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Weekly Attendance *</th>
                    <th className="p-3">Feedback</th>
                    <th className="p-3">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr
                      key={index}
                      className="border-t border-border hover:bg-muted/20 transition-colors"
                    >
                      <td className="p-3 text-center">{student.roll}</td>
                      <td className="p-3 text-center">{student.name}</td>
                      <td className="p-3 text-center">
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          required
                          placeholder="Enter %"
                          className="w-24 text-center mx-auto"
                        />
                      </td>
                      <td className="p-3 text-center">
                        <Textarea
                          placeholder="Optional"
                          className="w-48 mx-auto"
                        />
                      </td>
                      <td className="p-3 text-center">
                        <Input
                          type="text"
                          placeholder="Optional"
                          className="w-24 text-center mx-auto"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
