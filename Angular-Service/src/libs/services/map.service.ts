import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface city {
  id: number;
  name: string;
  region: string;
  plaque: number;
}



@Injectable({
  providedIn: 'root'
})
export class MapService {


  cities = [
    {
      id: 1,
      name: "İstanbul",
      region: "Marmara",
      plaque: 34
    },
    {
      id: 2,
      name: "İzmir",
      region: "Ege",
      plaque: 35
    },

    {
      id: 3,
      name: "Ankara",
      region: "Anadolu",
      plaque: 6
    },

    {
      id: 4,
      name: "Kütahya",
      region: "Anadolu",
      plaque: 43
    },

    {
      id: 5,
      name: "Antalya",
      region: "Akdeniz",
      plaque: 7
    },

    {
      id: 6,
      name: "Samsun",
      region: "Karadeniz",
      plaque: 55
    },

  ]


  public cityNameSubject = new Subject<any>();
  public cityRegionsSubject = new Subject<any>();
  public cityPlaquesSubject = new Subject<any>();

  constructor() { }


  // getCityNames() {
  //   return this.cities.map(el => ({
  //     id: el.id,
  //     name: el.name
  //   }))

  // }

  getCityNames() {
    const data = this.cities.map(el => ({
      id: el.id,
      name: el.name
    }));
    this.cityNameSubject.next(data);

  }

  getCityPlaques() {
    const data = this.cities.map(el => ({
      id: el.id,
      name: el.name,
      plaque: el.plaque

    }))
    this.cityPlaquesSubject.next(data);
  }
  getCityRegions() {
    const data = this.cities.map(el => ({
      id: el.id,
      name: el.name,
      region: el.region
    }))
    this.cityRegionsSubject.next(data);

  }

  save(value: city) {
    const index = this.cities.findIndex(el => el.id === value.id);

    if (index > -1) {
      this.cities[index] = value;

    } else {
      this.cities.push(value);
    }


    this.getCityNames();
    this.getCityPlaques();
    this.getCityRegions();

  }


}
