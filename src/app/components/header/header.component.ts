import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbol:boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  inicio(){
    this.router.navigateByUrl('/home');
  }

  sideNav() {
    this.navbol = !this.navbol;
    if(this.navbol){
    (<HTMLInputElement>document.getElementById('mySidenav')).style.width = '235px';
    }
    else{
    (<HTMLInputElement>document.getElementById('mySidenav')).style.width = '0';
    }
  }
}
