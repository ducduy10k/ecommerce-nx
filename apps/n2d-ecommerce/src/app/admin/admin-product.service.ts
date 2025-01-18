import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  createPaginationOption,
  Page,
  Pagination,
} from '../shared/model/request.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminProductService {
  http = inject(HttpClient);

  createCategory(category: any): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/categories`,
      category
    );
  }

  deleteCategory(publicId: string): Observable<string> {
    const params = new HttpParams().set('publicId', publicId);
    return this.http.delete<string>(`${environment.apiUrl}/categories`, {
      params,
    });
  }

  findAllCategories(): Observable<Page<any>> {
    return this.http.get<Page<any>>(
      `${environment.apiUrl}/categories`
    );
  }

  createProduct(product: any): Observable<any> {
    const formData = new FormData();
    for (let i = 0; i < product.pictures.length; ++i) {
      formData.append('picture-' + i, product.pictures[i].file);
    }
    const clone = structuredClone(product);
    clone.pictures = [];
    formData.append('dto', JSON.stringify(clone));
    return this.http.post<any>(`${environment.apiUrl}/products`, formData);
  }

  deleteProduct(publicId: string): Observable<string> {
    const params = new HttpParams().set('publicId', publicId);
    return this.http.delete<string>(`${environment.apiUrl}/products`, {
      params,
    });
  }

  findAllProducts(pageRequest: Pagination): Observable<Page<any>> {
    const params = createPaginationOption(pageRequest);
    return this.http.get<Page<any>>(`${environment.apiUrl}/products`, {
      params,
    });
  }
}