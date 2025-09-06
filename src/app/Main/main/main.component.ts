import { Component } from '@angular/core';
import { NavbarComponent } from '../../Navbar/navbar/navbar.component';
import { SliderpageComponent } from '../../Landing Page/sliderpage/sliderpage.component';
import { AboutusComponent } from '../../About Us/aboutus/aboutus.component';
import { ProductsOverviewComponent } from "../../ProductContent/products-overview/products-overview.component";

@Component({
  selector: 'app-main',
  imports: [ SliderpageComponent, AboutusComponent, NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
