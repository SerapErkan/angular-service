import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-plaque',
  templateUrl: './plaque.component.html',
  styleUrls: ['./plaque.component.sass']
})
export class PlaqueComponent implements OnInit {
  
  plaquesData:any={};
  constructor(private mapService:MapService) { }

  ngOnInit(): void {
    this.plaquesData=this.mapService.getCityPlaques();
  }

}
