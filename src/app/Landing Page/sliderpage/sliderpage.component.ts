import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderpage',
  imports: [CommonModule],
  templateUrl: './sliderpage.component.html',
  styleUrl: './sliderpage.component.scss'
})
export class SliderpageComponent {

    

sliderContent : sliderContents[] = [
  {sliderBgImage : 'Images/Banner-2.jpg', sliderHead : 'Electrical Products <span class="changeConStyle"> Original & Quality </span>', sliderText : 'Discover top-notch electrical products designed for reliability, performance, and safety. Trusted quality you can count on', sliderButton : '', sliderSlideCount : '0'},
  {sliderBgImage : 'Images/Banner-4.jpg', sliderHead : 'High Performance <span class="changeConStyle"> Electrical Supplies </span>', sliderText : 'Experience high-performance electrical supplies built for lasting durability and top-tier efficiency. Dependable solutions for every power need.', sliderButton : '', sliderSlideCount : '1'},
  // {sliderBgImage : '', sliderHead : 'hello3', sliderText : '', sliderButton : '', sliderSlideCount : '2'},
  // {sliderBgImage : '', sliderHead : 'hello4', sliderText : '', sliderButton : '', sliderSlideCount : '3'}
]

}

export interface sliderContents{
  sliderBgImage : string; sliderHead : string; sliderText : string; sliderButton : string; sliderSlideCount : string;
}