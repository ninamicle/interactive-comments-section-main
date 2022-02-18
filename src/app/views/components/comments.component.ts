import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentsService } from '../services/comments.service';
import { map, Observable } from 'rxjs';
import { CommentUser } from '../models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: CommentUser[] = [];

  constructor(public restApi: CommentsService) {}
  ngOnInit() {
    console.log(this.comments);
    this.loadComments();
  }
  // Get Comments list
  loadComments() {
    return this.restApi.getComments().subscribe((res) => (this.comments = res));
  }
}
