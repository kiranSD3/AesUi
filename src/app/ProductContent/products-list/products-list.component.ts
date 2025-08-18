import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
productList : productLists[] = [
  {prodImg : 'Images/small-tablefan.png', prodClass : '', prodImgName: '<span class= "prospnhd"> Image </span> <span class="prospnhd2"> FN01</span>', prodprice: 1299},
  {prodImg : 'Images/small-tablefan.png', prodClass : '', prodImgName: '<span class= "prospnhd"> Image </span> <span class="prospnhd2"> FN02</span>', prodprice: 1299},
  {prodImg : 'Images/small-tablefan.png', prodClass : '', prodImgName: '<span class= "prospnhd"> Image </span> <span class="prospnhd2"> FN03</span>', prodprice: 1299},
  {prodImg : 'Images/small-tablefan.png', prodClass : '', prodImgName: '<span class= "prospnhd"> Image </span> <span class="prospnhd2"> FN04</span>', prodprice: 1299},
  {prodImg : 'Images/small-tablefan.png', prodClass : '', prodImgName: '<span class= "prospnhd"> Image </span> <span class="prospnhd2"> FN05</span>', prodprice: 1299},
]

}

interface productLists {
  prodImg : string; prodClass: string; prodImgName: string; prodprice : number;
}