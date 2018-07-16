import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemCount: number = 4;
  btnText: string = 'Add an Item';    
  goalText: string = 'My first life goal';   
  goals = [];
  constructor(private _data : DataService) { }

  ngOnInit() {
    this.itemCount = this.goals.length;
    this._data.goal.subscribe(res=>this.goals= res);
    this._data.changeGoal(this.goals);
  }

  addItem() {
    var goalD=new goalDetails();
    goalD.goalId=1;
    goalD.goalText=this.goalText;
    this.goals.push(goalD);
    this.goalText = '';
    this.itemCount = this.goals.length;
   this._data.changeGoal(this.goals);
  }
  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }
}

class goalDetails
{
  goalId: number;
  goalText: string;
}
