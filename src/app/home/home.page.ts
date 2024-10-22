import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CirculoComponent } from '../figuras-geometricas/circulo/circulo.component';
import { TrianguloComponent } from '../figuras-geometricas/triangulo/TrianguloComponent';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, CirculoComponent, TrianguloComponent],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  selectedFigura?: string;
  constructor() {}
}
