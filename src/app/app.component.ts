import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSuperiorComponent } from "./menu-superior/menu-superior.component";
import { MediaSimplesComponent } from './media-simples/media-simples.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuSuperiorComponent, MediaSimplesComponent, CalculadoraComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula3';
}
