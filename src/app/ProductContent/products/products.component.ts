import { Component } from '@angular/core';
import { NavbarComponent } from '../../Navbar/navbar/navbar.component';
import { ProductsCategoryComponent } from '../products-category/products-category.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-products',
  imports: [NavbarComponent, ProductsCategoryComponent, ProductsListComponent, BreadcrumbComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
