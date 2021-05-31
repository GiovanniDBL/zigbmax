import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgsRevealConfig} from 'ngx-scrollreveal';
import { MessageService } from '../../services/message.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgsRevealConfig],
})
export class HomeComponent implements OnInit {

  protected aFormGroup: FormGroup | undefined;
  recaptcha = new FormControl('');
  constructor(config: NgsRevealConfig,public _MessageService: MessageService, private formBuilder: FormBuilder,  private _renderer: Renderer2, private _http: HttpClient) { 
    // *CONFIGURACIÓN DEL SCROLLREVEAL
    config.duration = 5000;
    config.scale = 10;
    config.origin = 'left';
    config.origin = 'top';
    config.distance = '400px';
  }
  contactForm(form: any) {

    if (form.invalid) {
          Swal.fire({
            icon: 'warning',
            title: 'Todos los campos del formulario son obligatorios',
            text: '*Todos los campos deben tener más de 5 letras*',
            backdrop: `rgba(0,0,0,0.7)`
          }
            );

          return;
    }
    this._MessageService.sendMessage(form.value).subscribe(() =>  {

          Swal.fire({
             icon: 'success',
              title: 'Mensaje enviado correctamente',
              backdrop: `rgba(0,0,0,0.7)`
          }
          );
        });

        }
        ngOnInit(): void {
          this.aFormGroup = this.formBuilder.group({
            recaptcha: ['', Validators.required]
          });
      
          // add te script
          const script = this._renderer.createElement('script');
          script.defer = true;
          script.async = true;
          script.src = 'https://www.google.com/recaptcha/api.js';
          this._renderer.appendChild(document.body, script);
        }
  
}
