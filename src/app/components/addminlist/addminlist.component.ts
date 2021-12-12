import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addminlist',
  templateUrl: './addminlist.component.html',
  styleUrls: ['./addminlist.component.css']
})
export class AddminlistComponent implements OnInit {

  prodlist:Product[]

  public searchTerm : string='';
  searchKey:string ="";

  constructor(public prod:ProductService) { }

  ngOnInit(): void {
    this.prodlist=this.prod.getall()

    this.prod.search.subscribe((val:any)=>{this.searchKey=val;})

  }
  deleteProduct(i:number,id:string): void {
      this.prod.delete(id)
        .catch(err => console.log(err));
        this.prod.prodlist.splice(i, 1)
    
  }

  search(event:any){
    this.searchTerm =(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.prod.search.next(this.searchTerm);
  }
  
}


