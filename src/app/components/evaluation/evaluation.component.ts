import { Component, Input, OnInit } from '@angular/core';
import { ProfessionsService } from 'src/app/services/professions.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  matchedProfessions: any[] = [];
  
  @Input('keywords') keywords!: string[];

  constructor(
    private professionsService: ProfessionsService,
  ) {}

  ngOnInit() {
    this.matchedProfessions = this.getTopProfessions(this.keywords);
    console.log(this.matchedProfessions);
  }

  getTopProfessions(targetKeywords: string[]): string[] {
    return this.professionsService.getProfessions()
      .map(profession => ({
        ...profession,
        matchCount: profession.keywords.filter(keyword => targetKeywords.includes(keyword)).length
      }))
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 10)
      .map(profession => profession.profession);
  }
}
