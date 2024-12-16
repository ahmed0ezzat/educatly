import { Component } from '@angular/core';
import { BlogListComponent } from './components/blog-list/blog-list.component';

@Component({
  selector: 'app-root',
  imports: [BlogListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'educatly-blog';
}
