import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-category',
  imports: [CommonModule, FormsModule ],
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.scss'
})
export class ProductsCategoryComponent {
categoryType : categoryTypes[] = [
  {catName : 'Fans', catSelected : false},
  {catName : 'Cables', catSelected : false},
  {catName : 'LED lights', catSelected : false},
  {catName : 'Distribution Boards', catSelected : false},
  
]

}

interface categoryTypes{
  catName : string; catSelected : boolean;
}