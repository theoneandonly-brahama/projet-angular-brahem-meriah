import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

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

  constructor( private crud: FirebaseService, private frbld:FormBuilder) { }

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

      console.log("link works")
  }

  saveProduct(): void {

    this.produit=Object.assign({},this.productForm.value) ; 
    
    this.crud.create(this.produit).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newProduct(): void {
    this.productForm.reset();
    this.submitted = false;
    this.produit = new Product();
  }
}
