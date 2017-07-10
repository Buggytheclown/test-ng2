import {Component} from '@angular/core';
import {AsteroidsService} from '../services/asteroids.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-list-page',
  templateUrl: './listPage.component.html',
  styleUrls: ['./listPage.component.css']
})
export class ListPageComponent {
  currentPage$ = new BehaviorSubject(1);

  asteroids$ = this.currentPage$
    .switchMap(page=>this.asteroidsService.getByPage(page))
    .share();

  asteroidsNear$ = this.asteroids$
    .pluck('near_earth_objects');

  maxPage$ = this.asteroids$
    .pluck('page', 'total_pages');

  onFilter$ = new BehaviorSubject('');

  asteroidsNearFiltered$ = Observable.combineLatest(
    this.asteroidsNear$,
    this.onFilter$
  ).map(([asteroids, filterKey])=>(<any>asteroids).filter(asteroid=>asteroid.name.includes(filterKey)));


  constructor(private asteroidsService: AsteroidsService, private router: Router) {
  }

  goToPage(page: number) {
    this.currentPage$.next(page);
  }

  goToDetails(id: number) {
    this.router.navigate(['/Details', id]);
  }

  onFilter(e) {
    this.onFilter$.next(e);
  }

}
