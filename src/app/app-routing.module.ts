import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListPageComponent} from './listPage/listPage.component';
import {DetailsPageComponent} from './detailsPage/detailsPage.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ListPageComponent
      },
      {
        path: 'Details/:id',
        component: DetailsPageComponent
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
