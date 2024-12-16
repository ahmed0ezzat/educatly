import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
  @Output() retryFetch = new EventEmitter<void>();

  retry() {
    this.retryFetch.emit();
  }

}
