import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrls: ['./menu-restrito.component.css']
})
export class MenuRestritoComponent {

  constructor( private _router: Router){}  

  logout(){
    localStorage.clear();
    this._router.navigate(['/inicio']);
  }
}
