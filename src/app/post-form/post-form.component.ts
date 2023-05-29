import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  toDisplay : boolean = false;
  newPost : Post = {title:"", thought:""};
  @Output() submitted = new EventEmitter<Post>();

  addPost() {
    this.submitted.emit(this.newPost);
  }
}
