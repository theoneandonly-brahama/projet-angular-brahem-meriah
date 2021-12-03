import { Component, OnInit } from '@angular/core';
import { AdminguardGuard } from 'src/app/guards/adminguard.guard';
import { Compte } from 'src/app/models/compte';
import { AuthadminService } from 'src/app/services/authadmin.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

constructor(public auth:AuthadminService) { }

logout(){
  this.auth.currentaccount=new Compte();
  this.auth.isadmin=false;
}

  ngOnInit(): void {
  }

}
