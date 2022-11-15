import { Component, OnInit } from '@angular/core';

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})

export class AuthorListComponent implements OnInit {
  authors : Author[] = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];
  constructor() {}

  ngOnInit(): void {}
  deleteAuthor(author:Author){
    this.authors =this.authors.filter(each => each.id != author.id)
    console.log(this.authors)
    
  }
}
