import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.sass']
})
export class CityComponent implements OnInit {
  citiesData: any = {};
  citiesData$;

  constructor(private mapService: MapService) {

 //Subject
    
    // mapService.cityNameSubject.subscribe(data => {
    //   this.citiesData = data;
    // });

 //BehaviorSubject

this.citiesData$=mapService.cityNameDataSubject;

  }

  ngOnInit(): void {
    // this.citiesData=this.mapService.getCityNames();

    this.mapService.getCityNames();
  }

}
