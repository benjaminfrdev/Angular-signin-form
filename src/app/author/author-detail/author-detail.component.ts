import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../author-list/author-list.component';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss'],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author?: Author;
  @Output() deleteAuthorAct = new EventEmitter<Author>();
  constructor() {}

  ngOnInit(): void {}
  handleDelete(): void{
      if(this.author) this.deleteAuthorAct.emit(this.author);
  }
}
