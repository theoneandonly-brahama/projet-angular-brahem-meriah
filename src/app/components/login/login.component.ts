import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Compte } from 'src/app/models/compte';
import { AuthadminService } from 'src/app/services/authadmin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountForm:FormGroup= new FormGroup({});
  c: Compte = new Compte();
  submitted = false;

  constructor(private frbld :FormBuilder, private auth:AuthadminService, private router:Router) { }

  ngOnInit(): void {
    this.accountForm = this.frbld.group({
      login:['', [Validators.required, Validators.pattern('^[a-zA-Z]+@+[a-zA-Z]+.+[a-z]+$')]],
      mdp:['',[Validators.required]],
      

      
      })

      console.log(this.submitted)
  
  }

  login(){
    let c=Object.assign({},this.accountForm.value) 
    

    
    this.auth.retrieveAccounts();
   
    
    
   

    console.log(this.auth.acountlist)

    for (let co of this.auth.acountlist){
      if(co.login==c.login && co.mdp==c.mdp){
        if(co.isadmin==true){
          
          this.auth.isadmin=true;
          this.submitted=true;
          console.log(co.isadmin);
          
          
        }
    }
    
  }

  this.router.navigate(['/login']);

  }

  onNav(){
    if(this.submitted==true){
      this.router.navigate(['management'])
    }else{
      this.accountForm.reset();
    }
  }
  renavigate(){
    this.router.navigateByUrl('login')
  }
}
