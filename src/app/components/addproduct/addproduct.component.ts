import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  lesCategories:string[]=['Tourist Visit', '2-Day Getaway', 'Buissness Trip']
  produit: Product = new Product();
  submitted = false;

  productForm:FormGroup= new FormGroup({});

  constructor( private crud: ProductService, private frbld:FormBuilder) { }

  ngOnInit(): void {

    this.productForm = this.frbld.group({
      lib:['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      prix:[,[Validators.required]],
      photo: ['../../../assets/', [Validators.required]],
      cat: [''],
      nouveau : true,
      date_dep:[formatDate(new Date(), 'dd-MM-yyyy', 'en')],
      date_rtr:[formatDate(new Date(), 'dd-MM-yyyy', 'en')]

      
      })

      
  }

  saveProduct(): void {

    this.produit=Object.assign({},this.productForm.value) ; 
    
    this.crud.create(this.produit).then(() => {
      this.submitted = true;
    });
  }

  newProduct(): void {
    this.productForm.reset({ photo:'../../../assets/', nouveau:true, date_dep: formatDate(new Date(), 'dd-MM-yyyy', 'en'), date_rtr:formatDate(new Date(), 'dd-MM-yyyy', 'en')});
    this.submitted = false;
    this.produit = new Product();
  }
}
