import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AsteroidsService} from '../services/asteroids.service';
import {AsteroidsServiceMock} from '../services/asteroids.service.mock';
import {ListComponent} from '../listPage/list/list.component';
import {SearchComponent} from '../listPage/search/search.component';
import {PaginationComponent} from '../listPage/pagination/pagination.component';
import {SharedModule} from '../shared/shared.module';
import {ListPageComponent} from './listPage.component';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent, SearchComponent,
        PaginationComponent, ListPageComponent
      ],
      imports: [RouterTestingModule, SharedModule],
      providers: [{provide: AsteroidsService, useClass: AsteroidsServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

