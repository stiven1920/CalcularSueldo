import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelDeControlComponent } from './panel-de-control.component';

const routes: Routes = [{ path: '', component: PanelDeControlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelDeControlRoutingModule { }
