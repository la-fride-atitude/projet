import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
  }
 save()
 {
   /*register infos*/
  this.router.navigate(['home']);
 }
}
