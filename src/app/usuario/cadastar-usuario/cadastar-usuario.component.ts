import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-cadastar-usuario',
  templateUrl: './cadastar-usuario.component.html',
  styleUrls: ['./cadastar-usuario.component.css']
})
export class CadastarUsuarioComponent implements OnInit {

  @ViewChild('form', {static: false}) form: NgForm;

  constructor() {
  }

  ngOnInit(): void {
  }


  save() {

  }
}
