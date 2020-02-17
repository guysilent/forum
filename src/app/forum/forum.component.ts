import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  ws: WebSocket;
  threadsData = [];

  constructor() { 
    this.ws = new WebSocket('ws:localhost:3001');
    this.ws.addEventListener('message', (event) => {
      if (event.data) {
        this.threadsData = JSON.parse(event.data);
      }
    })
  }

  ngOnInit(): void {
  }

  addComment(threadForm) {
    
  }

}
