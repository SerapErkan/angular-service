import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-plaque',
  templateUrl: './plaque.component.html',
  styleUrls: ['./plaque.component.sass']
})
export class PlaqueComponent implements OnInit {

  plaquesData: any = {};
  constructor(private mapService: MapService) {

    mapService.cityPlaquesSubject.subscribe(data => {
      this.plaquesData = data;
    });
  }

  ngOnInit(): void {
    this.mapService.getCityPlaques();
  }

}
