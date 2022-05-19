import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { FormsModule } from '@angular/forms';

import { CityComponent } from './city/city.component';
import { MapComponent } from './map/map.component';
import { PlaqueComponent } from './plaque/plaque.component';
import { RegionComponent } from './region/region.component';



@NgModule({
  declarations: [

    CityComponent,
    MapComponent,
    PlaqueComponent,
    RegionComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,FormsModule
  ]
})
export class MapModule { }
