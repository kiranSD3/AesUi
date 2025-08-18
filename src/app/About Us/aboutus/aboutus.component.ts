import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent{

aboutCard : aboutCards[] = [
  {aboutHead : '<span class= "prospnhd">Smart</span> Fans', aboutImg : 'Images/fan1.png', aboutTxt : 'Our high-performance fans deliver powerful airflow, energy efficiency, and sleek designs to keep you comfortable all year round.', aboutBtn : ''},
  {aboutHead : '<span class= "prospnhd">Smart</span> Lights', aboutImg : 'Images/lightled1.png', aboutTxt : 'Our premium LED lights offer exceptional brightness, low power consumption, and modern designs to enhance any living or work space.', aboutBtn : ''},
  {aboutHead : '<span class= "prospnhd">Smart</span> Boards', aboutImg : 'Images/boards1.png', aboutTxt : 'Our reliable power boards ensure safe electricity distribution, long-lasting durability, and performance you can trust every day.', aboutBtn : ''}
]

countContent : countContents[] = [
  { CountNum : 25, CountContent : 'Years of Experience'},
  { CountNum : 139,CountContent : 'Projects Successfully Completed' },
  { CountNum : 800,CountContent : 'Orders Promptly Delivered'},
  { CountNum : 1000,CountContent : 'Happy Satisfied Clients'},
]

}

 interface aboutCards {

  aboutHead : string; aboutImg : string; aboutTxt : string; aboutBtn : string;

}

 interface countContents{
   CountNum : number; CountContent : string;
}
