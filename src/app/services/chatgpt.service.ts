import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CHAT_TOKEN } from 'src/environmental';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; 
  private token = CHAT_TOKEN;

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
