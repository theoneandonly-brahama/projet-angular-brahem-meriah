import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CommentService } from 'src/app/services/comment.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  constructor(private frbld:FormBuilder, 
    private activatedRoute:ActivatedRoute, 
    private prod:ProductService, 
    private router:Router,
    private comm:CommentService
    ) { }

  lesCategories:string[]=['Tourist Visit', '2-Day Getaway', 'Buissness Trip']
  productForm:FormGroup= new FormGroup({});
  id:string
  currentprod:Product

  ngOnInit(): void {
    
    this.id=this.activatedRoute.snapshot.params['id'];
    this.currentprod=this.prod.getproduct(this.id)
    this.productForm = this.frbld.group({
      lib:[this.currentprod.lib, [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      prix:[this.currentprod.prix,[Validators.required]],
      photo: [this.currentprod.photo, [Validators.required]],
      cat: [this.currentprod.cat, [Validators.required]],
      nouv : [this.currentprod.nouv],
      date_dep:[this.currentprod.date_dep, [Validators.required]],
      date_rtr:[this.currentprod.date_rtr, [Validators.required]]
      })
  }
  updateTutorial(): void {
    console.log(this.productForm.value['date_dep'])
    console.log(this.currentprod)
    const data = {
      lib: this.productForm.value['lib'],
      prix: this.productForm.value['prix'],
      photo:this.productForm.value['photo'],
      cat:this.productForm.value['cat'],
      nouv:this.productForm.value['nouv'],
      date_dep:this.productForm.value['date_dep'],
      date_rtr:this.productForm.value['date_rtr']
    };
      this.prod.update(this.id, data).catch(err => console.log(err));
      this.router.navigate(['/management'])
  }

  goback(){
    this.router.navigate['/management']
  }

  deleteComment(i:number,id:string): void {
    this.comm.delete(id)
      .catch(err => console.log(err));
      this.currentprod.comments.splice(i, 1)
  
}
  

}
