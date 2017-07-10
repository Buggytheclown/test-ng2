import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() asteroids;
  @Output() onSelect = new EventEmitter();

}
