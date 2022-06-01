import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router'

@Component({
  selector: 'app-f-dashbord',
  templateUrl: './f-dashbord.component.html',
  styleUrls: ['./f-dashbord.component.scss']
})
export class FDashbordComponent implements OnInit {

  color : string ="#4A63E7";
  fatimes = faTimes;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  goToAbout()
  {
    this.router.navigate(['/aboutme']);
  }

  goToExperiance()
  {
    this.router.navigate(['/comp']);
  }

  goToBiographie()
  {
    this.router.navigate(['/cur']);
  }

  gotoSkill()
  {
    this.router.navigate(['/exp']);
  }
}
