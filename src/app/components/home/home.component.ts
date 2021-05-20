import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig} from 'ngx-scrollreveal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgsRevealConfig],
})
export class HomeComponent implements OnInit {

  constructor(config: NgsRevealConfig) { 
    // *CONFIGURACIÓN DEL SCROLLREVEAL
    config.duration = 5000;
    config.scale = 10;
    config.origin = 'left';
    config.origin = 'top';
    config.distance = '400px';
  }

  ngOnInit(): void {
  }

  
}
