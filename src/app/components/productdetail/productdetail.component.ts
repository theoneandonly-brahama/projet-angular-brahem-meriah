import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  
  currentprod:Product;

  constructor(private prod:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    for(let p of this.prod.productlist){
      if(this.activatedRoute.snapshot.params['id']==p.id){
        this.currentprod=p;
      }
    }
  }

}
