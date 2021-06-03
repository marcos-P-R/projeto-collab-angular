import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-tela-user',
  templateUrl: './initial-tela-user.component.html',
  styleUrls: ['./initial-tela-user.component.css']
})
export class InitialTelaUserComponent implements OnInit {

  private msg!: String;

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(){
    console.log(this.msg);
  }
}
