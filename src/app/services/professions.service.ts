import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessionsService {
  professions = [
    {
      profession: "Doctor (General Practitioner)",
      keywords: [
        "Helping others",
        "Communication",
        "Medical knowledge",
        "Empathy",
        "Decision-making"
      ]
    },
    {
      profession: "Civil Engineer",
      keywords: [
        "Technical proficiency",
        "Analytical thinking",
        "Problem-solving",
        "Project management",
        "Detail-oriented"
      ]
    },
    {
      profession: "Graphic Designer",
      keywords: [
        "Creative innovation",
        "Design aesthetics",
        "Detail-oriented",
        "Technical proficiency",
        "Client relations"
      ]
    },
    {
      profession: "Biologist",
      keywords: [
        "Research skills",
        "Scientific understanding",
        "Analytical thinking",
        "Data analysis",
        "Continuous learning"
      ]
    },
    {
      profession: "Software Developer",
      keywords: [
        "Technical proficiency",
        "Problem-solving",
        "Continuous learning",
        "Analytical thinking",
        "Teamwork"
      ]
    },
    {
      profession: "School Teacher",
      keywords: [
        "Teaching/training",
        "Communication",
        "Empathy",
        "Time management",
        "Continuous learning"
      ]
    },
    {
      profession: "Attorney/Lawyer",
      keywords: [
        "Analytical thinking",
        "Communication",
        "Negotiation",
        "Detail-oriented",
        "Client relations"
      ]
    },
    {
      profession: "Accountant",
      keywords: [
        "Detail-oriented",
        "Financial acumen",
        "Analytical thinking",
        "Time management",
        "Technical proficiency"
      ]
    },
    {
      profession: "Farmer",
      keywords: [
        "Hands-on tasks",
        "Practical skills",
        "Decision-making",
        "Physical activity",
        "Resource management"
      ]
    },
    {
      profession: "Actor/Actress",
      keywords: [
        "Creative innovation",
        "Social interaction",
        "Networking",
        "Artistic talent",
        "Public speaking"
      ]
    }
  ];
;  

  constructor() { }

  getProfessions() {
    return this.professions;
  }
}
