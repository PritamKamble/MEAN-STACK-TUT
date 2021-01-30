import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  hostURL = environment.hostURL;

  constructor(
    private http: HttpClient
  ) { }

  get(api: string) {
    return this.http.get(this.hostURL + api);
  }

  post(api: string, body: {}) {
    return this.http.post(this.hostURL + api, body);
  }

  put(api: string, body: {}) {
    return this.http.put(this.hostURL + api, body);
  }

  delete(api: string) {
    return this.http.delete(this.hostURL + api);
  }
}
