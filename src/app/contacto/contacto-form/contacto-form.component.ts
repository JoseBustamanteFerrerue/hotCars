import { Component } from '@angular/core'; 

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent {
 user = {
    name: '',
    primerApellido: '',
    segundoApellido: '',
    fechaNacimiento: '',
    email: '',
    password: ''
  };

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log(this.user);
  }
}
