import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: NgbModal,private router: Router) {}

  ngOnInit(): void {
  }

  closeResult: string = '';



  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  gotosignup(){
    this.router.navigate(['/signup']);  // define your component where you want to go
}

gotohome(){
  this.router.navigate(['/home']);
}

verify()
{
  var $:any ;
  const input = document.getElementById('email') as HTMLInputElement
  const val = input?.value;

  const input1 = document.getElementById('pass') as HTMLInputElement
  const val1 = input1?.value;

    /*recupere et send a la bd*/
    if(val === null || val1 === null)
    {
      console.log("fill all fields please");
    }
    else{
      alert(val);
      console.log(val);
      $("#myModal").modal('hide');
      this.gotohome();
    }
}
}
