import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsPageComponent} from './detailsPage.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AsteroidsService} from '../services/asteroids.service';
import {AsteroidsServiceMock} from '../services/asteroids.service.mock';

describe('DetailsPageComponent', () => {
  let component: DetailsPageComponent;
  let fixture: ComponentFixture<DetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPageComponent],
      imports: [RouterTestingModule],
      providers: [{provide: AsteroidsService, useClass: AsteroidsServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
