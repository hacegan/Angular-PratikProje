import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

class Veri {
  label: string;
  type: string;
  expanded: boolean;
  data: { 'name', 'avatar' };
}


@Injectable({
  providedIn: 'root'
})
export class HttpcagrilariService {

  constructor(private http: HttpClient) { }

  registerUser(User: any) {
    return this.http.post(`${baseUrl}/kayitol`, User);
  }

  loginUser(User: any) {
    return this.http.post(`${baseUrl}/girisyap`, User);
  }

  userTree() {
    return this.http.get(`${baseUrl}/calisanlar`);
  }




}
