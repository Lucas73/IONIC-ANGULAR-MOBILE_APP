import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  title = 'app';
  elementType = 'url';
  value = 'Socio 2101 Sunset 80s';

  constructor() { }

  ngOnInit() {}


}
