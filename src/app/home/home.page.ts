import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  images: any[] = [];
  processRunning = false;
  result : number | undefined
  lists : any[] = []

  startProcess() {
    this.processRunning = true;
    this.images = [];

    // Lade 20 Bilder aus dem Netz
    for (let i = 0; i < 20; i++) {
      this.images.push({
        url: `https://picsum.photos/200/300?image=${i}`
      });
    }

    // Führe eine komplexe Berechnung durch (z. B. Fibonacci)
    const fibonacci = (n: number): number => {
      if (n <= 1) {
        return n;
      }
      return fibonacci(n - 1) + fibonacci(n - 2);
    };

     this.result = fibonacci(40);

    // Füge 100 Elemente zu einer Liste hinzu
    this.lists = Array(100).fill(null);
  }
}
