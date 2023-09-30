import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions '; 
  private token = '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';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.token,
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getQuestion(data?: any) {
    return this.http.post(this.apiUrl, data, this.httpOptions);
  }
}
