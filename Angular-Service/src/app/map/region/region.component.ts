import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.sass']
})
export class RegionComponent implements OnInit {
  regionsData: any = {};
  constructor(private mapService: MapService) {
    mapService.cityRegionsSubject.subscribe(data => {
      this.regionsData = data;
    });

  }

  ngOnInit(): void {
    this.mapService.getCityRegions();
  }

}
