import {Component, EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Output() onFilter = new EventEmitter();

}
