import { Component, Input, OnInit } from '@angular/core';
import { Satellite} from '../satellite';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  
  }

//typeCount : number = 0;
typeArray = ['Total', 'Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];

  counts(typeToCount : string): number{
    let typeCount: number = 0;

    if (typeToCount === 'Total') {
      typeCount = this.satellites.length;   
      console.log(typeToCount + ' ' + this.satellites);
      return typeCount;
    }
    for (let i=0; i<this.satellites.length; i++){
     
      if (this.satellites[i].type === typeToCount) {
         typeCount = typeCount + 1;
      }
    }
    //this.satelliteCounts.totalSatelliteCount = this.satellites.length;
    
    return typeCount;
 }
//need to figure out how to reset typecount after call;
}
