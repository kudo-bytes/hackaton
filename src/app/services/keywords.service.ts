import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeywordsService {

  constructor() { }

  getKeywords() {
    return [
      "Social interaction",
      "Helping others",
      "Hands-on tasks",
      "Physical activity",
      "Teamwork",
      "Practical skills",
      "Analytical thinking",
      "Creative innovation",
      "Technical proficiency",
      "Leadership",
      "Autonomous working",
      "Detail-oriented",
      "Strategic planning",
      "Problem-solving",
      "Communication",
      "Time management",
      "Multitasking",
      "Client relations",
      "Project management",
      "Mentoring",
      "Negotiation",
      "Persuasion",
      "Sales aptitude",
      "Research skills",
      "Continuous learning",
      "Adaptability",
      "Financial acumen",
      "Teaching/training",
      "Design aesthetics",
      "Risk management",
      "Networking",
      "Decision-making",
      "Empathy",
      "Conflict resolution",
      "Organizational skills",
      "Resource management",
      "Mathematical expertise",
      "Scientific understanding",
      "Data analysis",
      "Public speaking",
      "Entrepreneurial mindset",
      "Customer service",
      "Writing proficiency",
      "Cultural awareness",
      "Process optimization",
      "Technical writing",
      "Counseling",
      "Medical knowledge",
      "Artistic talent",
      "Event coordination"
    ];    
  }
}
