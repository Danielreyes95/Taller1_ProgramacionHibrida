import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrianguloEscaleno } from 'src/app/modelos/trianguloescaleno';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number = 0;

  calcularPerimetro() {
    const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.perimetro = triangulo.calcularPerimetro();
  }
}
