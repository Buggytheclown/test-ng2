import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  @Input() maxPage;
  @Input() currentPage;
  @Output() goToPage = new EventEmitter();

  onSelect(e: any) {
    this.goToPage.emit(+e.target.value);
  }
}
