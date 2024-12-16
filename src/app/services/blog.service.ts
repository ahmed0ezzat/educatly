import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface BlogPost {
  id: number;
  title: string;
  user: { name: string };
  published_at: string;
  cover_image: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'https://dev.to/api/articles';
  constructor(private http: HttpClient) {}

  getPosts(page: number = 1, pageSize: number = 6): Observable<BlogPost[]> {
    return this.http
      .get<BlogPost[]>(`${this.baseUrl}?page=${page}&per_page=${pageSize}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Error fetching blog posts. Try again later.'));
  }
}
