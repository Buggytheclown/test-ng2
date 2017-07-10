import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AsteroidsService} from './services/asteroids.service';
import {HttpModule} from '@angular/http';

import {ListPageComponent} from './listPage/listPage.component';

// import WHOLE Rx!
import 'rxjs/Rx';

import {ListComponent} from './listPage/list/list.component';
import {SearchComponent} from './listPage/search/search.component';
import {PaginationComponent} from './listPage/pagination/pagination.component';
import {SharedModule} from "./shared/shared.module";
import { DetailsPageComponent } from './detailsPage/detailsPage.component';

@NgModule({
  imports: [
    BrowserModule, HttpModule, AppRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent, ListPageComponent, ListComponent,
    SearchComponent, PaginationComponent, DetailsPageComponent

  ],
  providers: [AsteroidsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
