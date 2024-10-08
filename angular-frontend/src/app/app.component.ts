import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicioService } from './servicios/servicio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>{{ greeting }}</h1>',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit

{
  greeting!: string;

  constructor(private ServicioService: ServicioService){}
  title = 'angular-frontend';

  ngOnInit() {
    this.ServicioService.getGreeting().subscribe(data => {
      this.greeting = data;
    });
  }


  

  
}
