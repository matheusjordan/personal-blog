import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-container',
  templateUrl: './avatar-container.component.html',
  styleUrls: ['./avatar-container.component.scss']
})
export class AvatarContainerComponent implements OnInit {
  avatarImage = 'https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/110042783_650417739155087_4770279522928906262_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=mjf1ET1ZtH4AX8XpQQy&_nc_ht=scontent.fjdo10-1.fna&oh=bfaf72ea13bcf0d7abab0b517c185b3e&oe=5F5A29B4';
  username = 'Matheus Jordan';
  titlename = '👨🏾‍💻 Software Developer';

  constructor() { }

  ngOnInit(): void {
  }

}
