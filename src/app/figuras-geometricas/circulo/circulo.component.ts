import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Circulo } from 'src/app/modelos/circulo'; 

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number = 0;

  calcularPerimetro() {
    const circulo = new Circulo(this.radio);
    this.perimetro = circulo.calcularPerimetro();
  }
}
