import { Component, OnInit } from '@angular/core';
import { ServicioService } from './servicios/servicio.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule] // Asegúrate de importar FormsModule y HttpClientModule
})
export class AppComponent implements OnInit {
  username: string = '';
  password: string = '';
  greeting: string = '';

  constructor(private servicioService: ServicioService) { }

  ngOnInit() { }

  onSubmit() {
    // Aquí puedes agregar la lógica para autenticar al usuario
    // Por ahora, simplemente llamaremos al servicio para obtener el saludo
    this.servicioService.getGreeting().subscribe(
      data => this.greeting = data,
      error => console.error(error)
    );
  }
}