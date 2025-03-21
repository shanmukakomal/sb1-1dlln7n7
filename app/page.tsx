"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A revolutionary AI-powered analytics platform",
      tags: ["React", "TypeScript", "AI", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
      title: "EcoTrack",
      description: "Environmental monitoring system using IoT sensors",
      tags: ["IoT", "Python", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2340&auto=format&fit=crop"
    },
    {
      title: "HealthHub",
      description: "Telemedicine platform for remote healthcare",
      tags: ["Next.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2340&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
        <div className="container relative z-20 px-4">
          <div className="text-center space-y-8">
            <Avatar className="w-32 h-32 mx-auto border-4 border-primary">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Full Stack Developer & UI/UX Designer crafting beautiful digital experiences
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vue.js"].map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "AWS"].map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tools & Design</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe XD", "Git", "Docker", "Jest", "CI/CD"].map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Button size="lg" className="px-8">
            Get In Touch
            <Mail className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}