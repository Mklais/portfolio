import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthorizeResponse } from '../../model/authorize-response.model';
import { Observable, tap } from 'rxjs';
import { error, log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class WellnessService {

private stravaActivities = `${environment.stravaApiUrl}`;

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

  private updateTokens(result: AuthorizeResponse): void {
    environment.stravaAccessToken = result.access_token;
    environment.refreshToken = result.refresh_token;
  }

  public findActivities(accessToken: string) {
    return this.http.get(`${environment.stravaApiUrl}?access_token=${accessToken}`).pipe();
  }
}
