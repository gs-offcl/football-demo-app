import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TeamStanding } from '../classes/team.standing';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private baseUrl = "http://localhost:8080/api/v1/teams/standing";

  constructor(private httpClient : HttpClient) { }

  getData(teamStanding : TeamStanding)
  {
    let params = new HttpParams();
    
    let headers= new HttpHeaders()
    .set('X-API-KEY', 'suresh123');

    params = params.append('teamName', teamStanding.team);
    params = params.append('countryName', teamStanding.country);
    params = params.append('leagueName', teamStanding.league);
    
    return this.httpClient.get(this.baseUrl,  { params: params, headers:  headers });
  }
}