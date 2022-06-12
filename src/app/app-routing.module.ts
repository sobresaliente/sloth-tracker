import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponentComponent } from "./pages/main-page-component/main-page-component.component";

const routes: Routes = [
  {path: '', component: MainPageComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
