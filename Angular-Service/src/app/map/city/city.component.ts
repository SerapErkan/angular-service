import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.sass']
})
export class CityComponent implements OnInit {
  citiesData:any={};

  constructor(private mapService:MapService) { }

  ngOnInit(): void {
    this.citiesData=this.mapService.getCityNames();
  }

}
