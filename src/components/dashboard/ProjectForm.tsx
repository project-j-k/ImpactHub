import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ProjectForm() {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    priority: "",
    budget: "",
    deadline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project submitted:", projectData);
  };

  return (
    <Card className="bg-dashboard-section-bg border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-dashboard-primary">New Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-dashboard-primary">Project Name</Label>
            <Input
              id="name"
              value={projectData.name}
              onChange={(e) => setProjectData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter project name"
              className="border-dashboard-border focus:ring-dashboard-accent"
            />
          </div>
          
          <div>
            <Label htmlFor="description" className="text-dashboard-primary">Description</Label>
            <Textarea
              id="description"
              value={projectData.description}
              onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Project description"
              className="border-dashboard-border focus:ring-dashboard-accent h-20"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="priority" className="text-dashboard-primary">Priority</Label>
              <Select value={projectData.priority} onValueChange={(value) => setProjectData(prev => ({ ...prev, priority: value }))}>
                <SelectTrigger className="border-dashboard-border">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="budget" className="text-dashboard-primary">Budget</Label>
              <Input
                id="budget"
                type="number"
                value={projectData.budget}
                onChange={(e) => setProjectData(prev => ({ ...prev, budget: e.target.value }))}
                placeholder="0"
                className="border-dashboard-border focus:ring-dashboard-accent"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="deadline" className="text-dashboard-primary">Deadline</Label>
            <Input
              id="deadline"
              type="date"
              value={projectData.deadline}
              onChange={(e) => setProjectData(prev => ({ ...prev, deadline: e.target.value }))}
              className="border-dashboard-border focus:ring-dashboard-accent"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-dashboard-accent hover:bg-dashboard-accent/90 text-white"
          >
            Create Project
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}