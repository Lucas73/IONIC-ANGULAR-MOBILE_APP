import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {


  title = 'app';
  elementType = 'url';
  value = 'Socio 2101 Sunset 80s';

  constructor() { }

  ngOnInit() {}

}
