import { Component, OnInit, ViewEncapsulation, AfterViewInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }
  
}
