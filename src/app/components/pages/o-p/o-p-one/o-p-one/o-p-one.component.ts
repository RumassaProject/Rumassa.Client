import { Component } from '@angular/core';
import { HomeInNineComponent } from '../../../home/home-in-nine/home-in-nine.component';
import { ProductModel } from '../../../../../interfaces/productmodel';
import { ProductserviceService } from '../../../../../services/productservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-o-p-one',
  templateUrl: './o-p-one.component.html',
  styleUrl: './o-p-one.component.scss',
  standalone: true,
  imports: [HomeInNineComponent]
})
export class OPOneComponent {
  products!:ProductModel[]
  pageIndex:number=1
  size:number=10
  
  datas!: ProductModel[];
  constructor(private productservice: ProductserviceService){}
  ngOnInit(): void {
    this.getAll(this.pageIndex, this.size);
  }
  previousPage(): void {
    if (this.pageIndex >= 12){
      this.pageIndex -= 12;
    }
    this.getAll(this.pageIndex, this.size);
  }

  nextPage(): void {
    this.pageIndex += 12;
    this.getAll(this.pageIndex, this.size);
  }
  getAll(pageIndex: number, size: number){
    this.productservice.getallProducts(pageIndex, size).subscribe((data)=>{
      
    this.datas = data;
    });
  }
}
