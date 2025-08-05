import { Routes } from '@angular/router';
import { MainComponent } from './Main/main/main.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { SliderpageComponent } from './Landing Page/sliderpage/sliderpage.component';
import { AboutusComponent } from './About Us/aboutus/aboutus.component';

export const routes: Routes = [

{path: '', component: MainComponent, pathMatch: 'full'},
{path: 'main', component: MainComponent},
{path: 'navbar', component: NavbarComponent},
{path: 'indexpage', component: SliderpageComponent},
{path: 'aboutus', component: AboutusComponent}

];
