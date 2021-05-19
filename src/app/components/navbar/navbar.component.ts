import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  header_variable = false;
  
  @HostListener('document:scroll')
  scrollfunction(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    }
    else{
      this.header_variable = false;
    }
  }

  
  toInicio(){
    document.getElementById('home')?.scrollIntoView({behavior: 'smooth'});
  }
  toAboutUs(){
    document.getElementById('aboutus')?.scrollIntoView({behavior: 'smooth'});
  }

}
