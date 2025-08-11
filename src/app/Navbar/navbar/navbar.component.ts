import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

navbarLink : navbarLinks[] = [
  {NavName : 'Home', NavLinks : '', NavIcons: ''},
  {NavName : 'About Us', NavLinks : '', NavIcons: ''},
  {NavName : 'Our Products', NavLinks : '', NavIcons: ''},
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