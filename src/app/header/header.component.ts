import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{

  isAuthenticated:boolean = false;
  userSub:Subscription;

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = user ? true : false;
    })
  }

  constructor(private authService: AuthService){}

  onSaveData(){
    
  }

  onFetchData(){
    
  }
  onLogout(){
    this.authService.logOut();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
