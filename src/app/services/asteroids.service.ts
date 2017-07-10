import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

interface NearEarthObjectList {
  "links": {
    "next": string;
    "self": string;
  },
  "page": {
    "size": number;
    "total_elements": number;
    "total_pages": number;
    "number": number;
  },
  "near_earth_objects": [
    {
      "links": {
        "self": string;
      },
      "neo_reference_id": string;
      "name": string;
      "nasa_jpl_url": string;
      "absolute_magnitude_h": number;
      "estimated_diameter": {
        "kilometers": EstimatedDiameters;
        "meters": EstimatedDiameters;
        "miles": EstimatedDiameters;
        "feet": EstimatedDiameters;
      },
      "is_potentially_hazardous_asteroid": boolean;
    }
    ]
}


interface EstimatedDiameters {
  "estimated_diameter_min": number;
  "estimated_diameter_max": number;
}

@Injectable()
export class AsteroidsService {
  private API_KEY = 'OPNiN7ILEKciZknKH0e4vKHQr26sLs2npg42ZsRN';
  private NEO_API = 'https://api.nasa.gov/neo/rest/v1/neo';

  constructor(private http: Http) {
  }

  getByPage(page: number): Observable<NearEarthObjectList> {
    return this.http
      .get(`${this.NEO_API}/browse?page=${page}&size=20&api_key=${this.API_KEY}`)
      .map(res=>res.json());
  }

  getById(id: string): Observable<NearEarthObjectList> {
    return this.http
      .get(`${this.NEO_API}/${id}?api_key=${this.API_KEY}`)
      .map(res=>res.json());
  }

}
