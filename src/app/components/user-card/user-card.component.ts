import { Component, OnInit, Input } from '@angular/core';
import {
  faBook,
  faMapMarkerAlt,
  faGraduationCap,
  faEnvelope,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user;

  faGraduationCap = faGraduationCap;
  faBook = faBook;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faBuilding = faBuilding;

  constructor() {}

  ngOnInit(): void {}
}
