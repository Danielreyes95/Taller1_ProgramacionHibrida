import { Component } from '@angular/core';
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'mi.primer.proyecto',
  appName: 'mi-primer-proyecto',
  webDir: 'www'
};

export default config;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() { }
}
