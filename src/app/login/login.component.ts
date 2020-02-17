import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  submit(form) {
    console.log(form.value.userName);
    this.http.post('api/Users', {userName: form.value.userName}).subscribe(response => {
      console.log(response);
      this.dataService.userID = response['ID'];
    });
    this.router.navigate(['/forum']);
  }
}
