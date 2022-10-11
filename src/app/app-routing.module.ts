import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './pages/adicionar/adicionar.component';

const routes: Routes = [{ path: '', component: AdicionarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
