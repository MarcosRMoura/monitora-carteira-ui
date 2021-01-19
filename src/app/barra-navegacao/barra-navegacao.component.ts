import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  exibeMenu: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickNavBar() {
    this.exibeMenu = !this.exibeMenu;
  }

}
