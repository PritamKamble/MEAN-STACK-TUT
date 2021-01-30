import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService
  ) { }

  login(body) {
    return this.httpService.post('/auth/login', body);
  }

  register(body) {
    return this.httpService.post('/auth/register', body);
  }
}
