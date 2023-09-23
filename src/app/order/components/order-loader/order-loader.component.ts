import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-loader',
  templateUrl: './order-loader.component.html',
  styleUrls: ['./order-loader.component.scss'],
})
export class OrderLoaderComponent {
  @Input() loading: boolean;
}
