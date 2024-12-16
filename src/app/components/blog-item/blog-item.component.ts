import { Component, Input } from '@angular/core';
import { BlogPost } from '../../services/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-item',
  imports: [CommonModule],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  @Input() post!: BlogPost;
}
