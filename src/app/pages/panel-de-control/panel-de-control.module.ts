import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelDeControlRoutingModule } from './panel-de-control-routing.module';
import { PanelDeControlComponent } from './panel-de-control.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanelDeControlComponent
  ],
  imports: [
    CommonModule,
    PanelDeControlRoutingModule,
    MatSliderModule,
    MatTabsModule,
    FormsModule
  ]
})
export class PanelDeControlModule { }
