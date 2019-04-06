import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  public saveEmail(email: string): void {
    swal({
      title: '<strong>Seguro</strong>',
      type: 'warning',
      showCancelButton: true,
      focusConfirm: false
    }).then((a) => {
      if(a.value){
        swal({
          title: 'borrado',
          type: 'info'
        })
      }
    })
  }

  public handleRefusalToSetEmail(dismissMethod: string): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }

}
