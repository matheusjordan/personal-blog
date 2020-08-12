import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-container',
  templateUrl: './tags-container.component.html',
  styleUrls: ['./tags-container.component.scss']
})
export class TagsContainerComponent implements OnInit {
  tags: any[] = [
    'Javascript', 'Html', 'Css', 'Angular', 'Ionic', 'Node', 'Java', 'Springboot'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
