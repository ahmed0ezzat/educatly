import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  
  @Input() currentPage!: number;
  @Output() pageChange = new EventEmitter<number>();

  onNext() {
    this.pageChange.emit(this.currentPage + 1);
  }

  onPrevious() {
    if (this.currentPage > 1) this.pageChange.emit(this.currentPage - 1);
  }
}
