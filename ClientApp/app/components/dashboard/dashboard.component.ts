import { Component, OnInit } from '@angular/core';
import { Home } from '../../shared/home';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    public homes: Home[] = [];

    constructor() {
        this.homes.push({
            ownerId: 1,
            encoding: 'pictures/house1.jpg'
          });
        this.homes.push({
            ownerId: 2,
            encoding: 'pictures/house2.jpg'
             });
        this.homes.push({
            ownerId: 3,
            encoding: 'pictures/house3.jpg'
        });
        console.log(this.homes[0].encoding);
    }

    ngOnInit() {

    }
}
