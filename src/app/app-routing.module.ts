import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CityComponent } from './city/city.component';
import { ErrorComponent } from './error/error.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  { path: '', component: CityComponent , pathMatch: 'full'},
  { path: '**', redirectTo: 'ErrorComponent' },
  { path: 'about', component: AboutComponent },
  { path: 'panel', component: PanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
