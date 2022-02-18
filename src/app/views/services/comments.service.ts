import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
import { CommentUser } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch comments list
  getComments(): Observable<CommentUser[]> {
    return this.http
      .get<CommentUser[]>(this.apiURL + '/comments')
      .pipe(map((res) => res));
  }

  // newComment(): Observable<CommentUser[]> {
  //   return this.http
  //     .post<CommentUser[]>(this.apiURL + '/comments')
  //     .pipe(map((res) => res));
  // }
}
