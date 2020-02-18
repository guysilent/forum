import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userID: number;
  userName: string;

  constructor() { }
}
