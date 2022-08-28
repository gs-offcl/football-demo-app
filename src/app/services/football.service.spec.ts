import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FootballService } from './football.service';

describe('FootballService', () => {
  let service: FootballService;
  beforeEach(() => {
     TestBed.configureTestingModule({
	 imports: [HttpClientTestingModule]
     });
     service = TestBed.inject(FootballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});