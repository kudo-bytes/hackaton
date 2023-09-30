import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ChatgptService } from 'src/app/services/chatgpt.service';
import { KeywordsService } from 'src/app/services/keywords.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  counter = 0;
  isLoading = false;
  keywords = this.keywordsService.getKeywords();
  coreQuestion = {
    "role": "user",
    "content": "I am the student, I have just finished school. Ask me aquestion to assess my interests and natural talent, skills and my ability to learn. In the end I need to understand what profession should I choose. Limit the characters to 100. Dont give me a feedback, just keep asking questions related to previous answer until I say to stop. Only ask me question that I could answer yes or no!",
  };
  chat = {
    "model": "gpt-3.5-turbo",
    "messages": [this.coreQuestion],
  };

  @ViewChild('question') question!: ElementRef;
  @Output('triggerVideos') triggerVideos = new EventEmitter<string[]>();

  constructor(
    private chatService: ChatgptService,
    private keywordsService: KeywordsService,
  ) {}

  ngOnInit(): void {
    this.chatService.getQuestion(this.chat).subscribe((res: any) => {
      this.counter++;
      const question = res.choices[0].message;
      this.concatAnswer(question);
      const questionText = question.content;
      this.question.nativeElement.innerText = questionText;
    });
  }

  concatAnswer(answer: any) {
    this.chat.messages.push(answer);
  }

  answer(answer: string) {
    this.counter++;
    if (this.counter === 5) {
      answer += `, Take a look at our conversation. I need 6 keywords that would relate to profession that I might like. Choose these keywords from this array ${this.keywords}. Return only 6 keywords in this format [keyword, keyword...]`;  
    }
    const formattedAnswer = {
      "role": "user",
      "content": answer,
    }

    this.concatAnswer(formattedAnswer);
    this.sendAnswer();
  }

  sendAnswer() {
    this.isLoading = true;
    
    this.chatService.getQuestion(this.chat).subscribe((res: any) => {
      const question = res.choices[0].message;
      this.concatAnswer(question);
      const questionText = question.content; 
      this.question.nativeElement.innerText = questionText;

      this.isLoading = false;

      if (this.counter === 5) {
        const currentKeywords = questionText.split(", ").map((item: any) => item.trim());
        this.triggerVideos.emit(currentKeywords);
      }
    });
  }

}
