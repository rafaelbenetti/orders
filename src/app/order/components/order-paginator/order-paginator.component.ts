import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-paginator',
  templateUrl: './order-paginator.component.html',
  styleUrls: ['./order-paginator.component.scss'],
})
export class OrderPaginatorComponent {
  @Output() changePage = new EventEmitter<number>();

  page: number = 0;
  options: number[] = [1, 2, 3, 4, 5];

  onPageChange(page: number): void {
    this.page = page;
    this.changePage.emit(this.page);
  }

  onNext(): void {
    this.page++;
    this.changePage.emit(this.page);
  }

  onPrevious(): void {
    this.page--;
    this.changePage.emit(this.page || 0);
  }
}
