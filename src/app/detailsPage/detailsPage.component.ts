import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AsteroidsService} from '../services/asteroids.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-details-page',
  templateUrl: './detailsPage.component.html',
  styleUrls: ['./detailsPage.component.css']
})
export class DetailsPageComponent {
  is404 = false;

  asteroid$ = this.activatedRoute.params
    .pluck('id')
    .switchMap((id: string)=>this.asteroidsService.getById(id))
    .catch((e)=> {
      this.is404 = true;
      return Observable.throw(e);
    });

  constructor(private activatedRoute: ActivatedRoute, private asteroidsService: AsteroidsService) {
  }

}
