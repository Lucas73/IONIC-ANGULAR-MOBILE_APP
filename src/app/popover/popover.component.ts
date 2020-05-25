import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  result:string = this.navParams.data.values.value;

  constructor(private navParams: NavParams, private popoverController:PopoverController) { }

  ngOnInit() {}
  cerrarPopover(){
    this.popoverController.dismiss();
  }

}
