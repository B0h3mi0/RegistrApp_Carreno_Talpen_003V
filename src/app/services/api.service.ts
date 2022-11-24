import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }


  getTopHeadLines(){
    return (this.httpclient.get<RespuestaTopHeadlines>('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d19a6bc4d53b40adbabc8347441ab7d4'));

  }
}
