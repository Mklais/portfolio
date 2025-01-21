import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthorizeResponse } from '../../model/authorize-response.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WellnessService {

  constructor(private http: HttpClient) { }

  public reAuthorize(): Observable<AuthorizeResponse> {
    const url = environment.authorizationLink;
    const payload = {
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      refresh_token: environment.refreshToken,
      grant_type: 'refresh_token'
    };

    return this.http.post<AuthorizeResponse>(url, payload);
  }
  
  public findActivities(accessToken: string) {
    return this.http.get(`${environment.stravaApiUrl}?access_token=${accessToken}`).pipe();
  }
}
