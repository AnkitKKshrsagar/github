import { Component } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.scss']
})
export class P2Component {

  data="x";
  updateData(iteam:string){
    console.warn(iteam);
    this.data=iteam;
  }

 


}
