import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component {
@Input() iteam=0;

value(){
  this.iteam = Math.floor(Math.random()*100);
}
}
