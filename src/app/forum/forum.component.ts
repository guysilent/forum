import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  ws: WebSocket;
  threadsData = [];

  constructor(private http: HttpClient, private dataService: DataService) { 
    this.ws = new WebSocket('ws:localhost:3001');
    this.ws.addEventListener('message', (event) => {
      if (event.data) {
        let tempArray = JSON.parse(event.data);
        if (tempArray) {
          this.threadsData = tempArray.slice().reverse();
        }
        
      }
    })
  }

  ngOnInit(): void {
  }

  addComment(threadForm, threadNumber) {
    let message = {
      userName: this.dataService.userName,
      userID: this.dataService.userID,
      threadID: this.threadsData[threadNumber].ID,
      text: threadForm.value.comment
    }
    this.http.post('api/Comment', {message}).subscribe(response => {
      console.log(response);
    });
  }

  addThread(threadForm) {
    let message = {
      userName: this.dataService.userName,
      userID: this.dataService.userID,
      text: threadForm.value.thread
    }
    this.http.post('api/Thread', {message}).subscribe(response => {
      console.log(response);
    });
  }
}
