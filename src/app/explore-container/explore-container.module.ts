import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, NgxQRCodeModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
