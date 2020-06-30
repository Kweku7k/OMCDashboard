import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  activeRoute:string;
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.url.subscribe(response=>{
      this.activeRoute = response[response.length - 1].path;
    });
   }
  ngOnInit(): void {
  }
}
