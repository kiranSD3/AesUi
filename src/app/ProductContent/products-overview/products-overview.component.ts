import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { productLists } from '../products-list/products-list.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { NavbarComponent } from '../../Navbar/navbar/navbar.component';

@Component({
  selector: 'app-products-overview',
  imports: [CommonModule, RouterModule, BreadcrumbComponent, NavbarComponent],
  standalone : true,
  templateUrl: './products-overview.component.html',
  styleUrl: './products-overview.component.scss'
})
export class ProductsOverviewComponent implements OnInit {

 productId!: number;
  selectedProduct!: productLists;

 productList : productLists[] = [
  {prodID : 1, idimg : 'Images/small-tablefan.png', prodClass : '', prodImgName: 'atomberg Aris Contour Smart 1200mm Voice Controlled BLDC Ceiling Fan with Remote| 5 star | Best-in-class Air Flow | Silent Operation', prodprice: 1299, prodOldPrice : 1899, prodWishList : false },
  {prodID : 2, idimg : 'Images/fan9.png', prodClass : '', prodImgName: 'Image FN02', prodprice: 1299, prodOldPrice : 1899, prodWishList : false },
  {prodID : 3, idimg : 'Images/fan8.png', prodClass : '', prodImgName: 'atomberg Renesa Elite 1200mm 5-star BLDC Remote Ceiling Fan', prodprice: 1299, prodOldPrice : 1899, prodWishList : false},
  {prodID : 4, idimg : 'Images/ceiling_fan.png', prodClass : '', prodImgName: 'Image FN04', prodprice: 1299, prodOldPrice : 1899, prodWishList : false},
  {prodID : 5, idimg : 'Images/fan7.png', prodClass : '', prodImgName: 'Image FN05', prodprice: 1299, prodOldPrice : 1899, prodWishList : false},
  {prodID : 6, idimg : 'Images/fan10.png', prodClass : '', prodImgName: 'Image FN06', prodprice: 1299, prodOldPrice : 1899, prodWishList : false},
  {prodID : 7, idimg : 'Images/fan7.png', prodClass : '', prodImgName: 'V-Guard', prodprice: 1299, prodOldPrice : 1899, prodWishList : false},
  {prodID : 8, idimg : 'Images/fan11.png', prodClass : '', prodImgName: 'Image FN08', prodprice: 1299, prodOldPrice : 1899, prodWishList : false},
  {prodID : 9, idimg : 'Images/fan9.png', prodClass : '', prodImgName: 'Image FN09', prodprice: 1299, prodOldPrice : 1899, prodWishList : false},
  {prodID : 10, idimg : 'Images/small-tablefan.png', prodClass : '', prodImgName: 'Image FN10', prodprice: 1299, prodOldPrice : 1899, prodWishList : false},
]

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    // console.log("Selected Product ID:", this.productId);

    // Find product by ID
    this.selectedProduct = this.productList.find(p => p.prodID === this.productId)!;
  }

}

export interface productLists {
prodID: number;  idimg : string; prodClass: string; prodImgName: string; prodprice : number; prodOldPrice : number; prodWishList : boolean;
}