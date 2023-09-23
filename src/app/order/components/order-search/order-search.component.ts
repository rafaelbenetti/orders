import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss'],
})
export class OrderSearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(event: any): void {
    this.search.emit(event.target.value);
  }
}
