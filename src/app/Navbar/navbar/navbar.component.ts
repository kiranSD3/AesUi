import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductsComponent } from '../../ProductContent/products/products.component';
import { ProductsOverviewComponent } from '../../ProductContent/products-overview/products-overview.component';
import { ProductsCategoryComponent } from '../../ProductContent/products-category/products-category.component';
import { ProductsListComponent } from '../../ProductContent/products-list/products-list.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

navbarLink : navbarLinks[] = [
  {NavName : 'Home', NavLinks : '', NavIcons: ''},
  {NavName : 'About Us', NavLinks : '', NavIcons: ''},
  {NavName : 'Our Products', NavLinks : 'products', NavIcons: ''},
  {NavName : 'Services', NavLinks : '', NavIcons: ''},
  {NavName : 'Contact Us', NavLinks : '', NavIcons: ''},
]

socialLink : socialLinks[] = [
  {SocIcons : 'fa-brands fa-instagram', SocName : 'Instagram', SocLinks : '', SocColor : '#ed4545'},
  {SocIcons : 'fa-brands fa-whatsapp', SocName : 'Whatsapp', SocLinks : '', SocColor : '#00db9a'},
  {SocIcons : 'fa-brands fa-youtube', SocName : 'Youtube', SocLinks : '', SocColor : '#f50000'}
]

}

export interface navbarLinks{
  NavName: string; NavLinks: string; NavIcons: string;
}

export interface socialLinks{
  SocIcons : string; SocName : string; SocLinks : string; SocColor : string;
}