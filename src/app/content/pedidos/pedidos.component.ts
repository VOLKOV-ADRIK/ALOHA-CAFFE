import { Component } from '@angular/core';
import { CargarscripsService } from 'src/app/cargarscrips.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  constructor(private cargarscripts: CargarscripsService){
    cargarscripts.cargar([
      "assets/vendor/aos/aos.js",
      "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "assets/vendor/glightbox/js/glightbox.min.js",
      "assets/vendor/isotope-layout/isotope.pkgd.min.js",
      "assets/vendor/swiper/swiper-bundle.min.js",
      "assets/vendor/php-email-form/validate.js",
      "assets/js/main.js"
    ])
  }
}
