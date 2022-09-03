import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	console.log("Before Headers :: ", request.headers.keys());
	request = request.clone({
        headers: request.headers.set(environment.headerName, environment.token)
    });
    console.log("After Headers :: ", request.headers.keys());
    return next.handle(request);
  }
}