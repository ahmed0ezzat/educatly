import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { BlogService, BlogPost } from '../../services/blog.service';
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-blog-list',
  imports: [  NgIf, 
              NgFor, 
              LoadingIndicatorComponent, 
              FontAwesomeModule, 
              BlogItemComponent, 
              ErrorMessageComponent, 
              PaginationComponent
            ],
  providers: [ BlogService ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogPosts: BlogPost[] = [];
  loading = true;
  error = false;
  currentPage = 1;
  pageSize = 6;
  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts(page: number = 1) {
    this.loading = true;
    this.error = false;
    this.blogService.getPosts(page, this.pageSize).subscribe({
      next: (data) => {
        this.blogPosts = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchPosts(page);
  }

  retryFetch() {
    this.fetchPosts(this.currentPage);
  }
}
