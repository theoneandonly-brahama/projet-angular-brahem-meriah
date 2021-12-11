import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  id=''
  currentprod:Product;
  commentForm:FormGroup= new FormGroup({});
  comment:Commentaire
  

  constructor(private prod:ProductService,
    private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private frbld:FormBuilder, 
    private comm:CommentService,
    private changeDetection: ChangeDetectorRef
    ) { }
  

  ngOnInit(): void {

    this.id=this.activatedRoute.snapshot.params['id'];
    this.currentprod=this.prod.getproduct(this.id)

    this.commentForm = this.frbld.group({
      mail:['', [Validators.required, Validators.pattern('^[a-zA-Z]+@+[a-zA-Z]+.+[a-z]+$')]],
      idprod:[this.id],
      username: ['', [Validators.required]],
      message: ['',Validators.required],
      date:[formatDate(new Date(), 'dd-MM-yyyy', 'en')]

      
      })

  }

  savecomment(): void {

    this.comment=Object.assign({},this.commentForm.value) ; 
    this.currentprod.comments.push(this.comment)
    this.comm.create(this.comment).then(() => {
    });
  }

  newcomment(): void {
    
    
    this.commentForm.reset({ date:formatDate(new Date(), 'dd-MM-yyyy', 'en'), idprod:this.id }
    );
    
    
    this.comment = new Commentaire();
  }

  

}
