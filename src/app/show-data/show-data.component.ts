import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TeamStanding } from '../classes/team.standing';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  private teamStanding = new TeamStanding();
  
  data : any;

  constructor(private footballService : FootballService) { }

  ngOnInit() {
     // this.getData(this.teamStanding);
  }

  form = new FormGroup({
    country : new FormControl(),
    league : new FormControl(),
    team : new FormControl()
  });

  getData(teamStanding : TeamStanding){
      this.footballService.getData(teamStanding).subscribe(
        response => {
		  console.log("teamstanding response: "+response);
          this.data = response;
        },
        error => {
          console.log("error while getting teamstanding details: "+error);
          this.data = error;
        }
      );
  }

  searchForm(searchInfo : any){
	if(this.Country != null)
       this.teamStanding.country = this.Country.value;
    if(this.League != null)
       this.teamStanding.league = this.League.value;
    if(this.Team != null) 
       this.teamStanding.team = this.Team.value;
     
     this.getData(this.teamStanding);
  }

  get Country(){
    return this.form.get('country');
  }

  get League(){
    return this.form.get('league');
  }
  
  get Team(){
    return this.form.get('team');
  }
}
