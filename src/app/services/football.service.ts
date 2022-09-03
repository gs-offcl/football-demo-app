import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TeamStanding } from '../classes/team.standing';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private baseUrl = "http://localhost:8080/api/v1/teams/standing";

  constructor(private httpClient : HttpClient) { }

  getData(teamStanding : TeamStanding){
	
    let params = new HttpParams()
                    .set('teamName', teamStanding.team)
	                .set('countryName', teamStanding.country)
	                .set('leagueName', teamStanding.league);
	
	console.log(params);                

    return this.httpClient.get(this.baseUrl, { params } );
  }
}