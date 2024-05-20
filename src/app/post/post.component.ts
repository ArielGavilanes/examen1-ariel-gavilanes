import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  posts: any[] = [];

  getPosts() {
    return this.postsService.getPosts().subscribe(
      (response) => {
        this.posts = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
