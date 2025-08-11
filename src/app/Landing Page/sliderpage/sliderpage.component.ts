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
  {sliderBgImage : 'Images/helperImg1.png', sliderHead : 'Powering Place with <span class="changeConStyle"> Beauty and Reliability </span> ', sliderText : 'Discover top-notch electrical products designed for reliability, performance, and safety. Trusted quality you can count on', sliderButton : 'Check us out', sliderSlideCount : '0'},
   {sliderBgImage : 'Images/modernbanner3.png', sliderHead : 'Power Your Spaces with <span class="changeConStyle"> Style and Innovation </span>', sliderText : 'Experience high-performance electrical supplies built for lasting durability and top-tier efficiency. Dependable solutions for every power need.', sliderButton : 'Check us out', sliderSlideCount : '1'},
  {sliderBgImage : 'Images/modernbanner2.png', sliderHead : 'Shaping the Future of <span class="changeConStyle"> Power and Design </span>', sliderText : 'Experience elegant designs, premium finishes, and cutting-edge electrical technology — available in timeless black and white.', sliderButton : 'Check us out', sliderSlideCount : '1'},
  // {sliderBgImage : '', sliderHead : 'hello4', sliderText : '', sliderButton : '', sliderSlideCount : '3'}
]

}

export interface sliderContents{
  sliderBgImage : string; sliderHead : string; sliderText : string; sliderButton : string; sliderSlideCount : string;
}

/* styles

<span class="changeConStyle">  </span>

*/