import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getAllElements() {
    return this.http.get(this.baseUrl + '/operation')
  }

  getOnlySelectedElements(type: string) {
    return this.http.get(this.baseUrl + '/operation/' + type)
  }

  editElementById(id: number, data: any) {
    return this.http.put(this.baseUrl + '/operation/' + id, data)
  }

  deleteElementById(id: number) {
    return this.http.delete(this.baseUrl + '/operation/' + id)
  }

  deleteAllElements() {
    return this.http.delete(this.baseUrl + '/operation')
  }

  createAnElement(data: any) {
    return this.http.post(this.baseUrl + '/operation', data)
  }
}
