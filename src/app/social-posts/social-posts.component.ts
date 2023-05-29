import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  posts : Post[] = [
    {title:"Sample Title", thought:"Sample Text"},
    {title:"Alternative Title", thought:"Alternative Text"}
  ]

  newPost(p : Post) : void {
    this.posts.push(p);
  }
}
