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
  toSecurity(){
    document.getElementById('security')?.scrollIntoView({behavior: 'smooth'});
  }
  toSectors(){
    document.getElementById('sectors')?.scrollIntoView({behavior: 'smooth'});
  }
  toContact(){
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
  }
  toSolutions(){
    document.getElementById('solutions')?.scrollIntoView({behavior: 'smooth'});
  }
  toNoticias(){
    document.getElementById('noticias')?.scrollIntoView({behavior: 'smooth'});
  }
  toSoluciones(){
    document.getElementById('soluciones')?.scrollIntoView({behavior: 'smooth'});
  }

}
