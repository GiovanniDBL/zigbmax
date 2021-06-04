import { Component, OnInit, Renderer2 } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-aguas-residuales',
  templateUrl: './aguas-residuales.component.html',
  styleUrls: ['./aguas-residuales.component.css']
})
export class AguasResidualesComponent implements OnInit {

  protected aFormGroup: FormGroup | undefined;
  recaptcha = new FormControl('');
  constructor(public _MessageService: MessageService, private formBuilder: FormBuilder,  private _renderer: Renderer2, private _http: HttpClient) { }

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
