import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zigbmax';
  // langs: string[] = [];

  // constructor(public translate: TranslateService){
  
  //   this.translate.setDefaultLang('en');
  //   this.translate.use('en');
  //   this.translate.addLangs(['en', 'es',]);
  //   this.langs = this.translate.getLangs();


  // }

  // changeLang(lang: string){
  //   this.translate.use(lang);
  // }
 

  fecha: Date = new Date();

}
