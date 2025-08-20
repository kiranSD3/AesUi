import { Routes } from '@angular/router';
import { MainComponent } from './Main/main/main.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { SliderpageComponent } from './Landing Page/sliderpage/sliderpage.component';
import { AboutusComponent } from './About Us/aboutus/aboutus.component';
import { ProductsOverviewComponent } from './ProductContent/products-overview/products-overview.component';
import { ProductsComponent } from './ProductContent/products/products.component';
import { ProductsCategoryComponent } from './ProductContent/products-category/products-category.component';
import { ProductsListComponent } from './ProductContent/products-list/products-list.component';
import { BreadcrumbComponent } from './ProductContent/breadcrumb/breadcrumb.component';

export const routes: Routes = [

{path: '', component: MainComponent, pathMatch: 'full'},
{path: 'main', component: MainComponent},
{path: 'navbar', component: NavbarComponent},
{path: 'indexpage', component: SliderpageComponent},
{path: 'aboutus', component: AboutusComponent},
{path: 'products', component: ProductsComponent},
{path: 'productsoverview/:id', component: ProductsOverviewComponent},
{path: 'productscategory', component: ProductsCategoryComponent},
{path: 'productslist', component: ProductsListComponent},
{path: 'prodbread', component: BreadcrumbComponent},

];
