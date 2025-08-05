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

}

export interface navbarLinks{
  NavName: string; NavLinks: string; NavIcons: string;
}
