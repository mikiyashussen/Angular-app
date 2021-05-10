import { Component, OnInit } from '@angular/core';
import { LocationService } from "../../services/location.service";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  locationData!: any;
  constructor(private location: LocationService) { }

  ngOnInit(): void {
    this.location.getLocation().subscribe(data => 
      this.locationData = data
     )
  }
 
  // getDeviceLocation(){
   
  // }
}





