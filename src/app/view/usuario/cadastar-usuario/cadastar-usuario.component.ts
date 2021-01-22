import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsuarioForm} from '../../../domain/usuario-form';
// import {BlockUI, NgBlockUI} from "ng-block-ui";
import {UsuarioService} from '../../../service/usuario.service';


@Component({
  selector: 'app-cadastar-usuario',
  templateUrl: './cadastar-usuario.component.html',
  styleUrls: ['./cadastar-usuario.component.css']
})
export class CadastarUsuarioComponent implements OnInit {

  @ViewChild('form', {static: false}) form: NgForm;
  // @BlockUI() blockUI: NgBlockUI;

  usuarioForm: UsuarioForm = new UsuarioForm();

  constructor(/*private messageService: MessageService,*/
              private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }


  save() {
    console.log(this.usuarioForm);
    // this.usuarioForm.dtNascimento = '1988-04-25'
    // if (this.form.invalid) {
    //   this.messageService.add({severity: 'error', summary: 'Erro', detail: MessageUtil.ERRO_CAMPOS_OBRIGATORIOS});
    //   return;
    // }
    // this.prepareFormularioToSave();
    // this.blockUI.start(MessageUtil.SALVANDO_REGISTRO);
    this.usuarioService.salvarUsuario(this.usuarioForm)
      // .pipe(finalize(() => this.blockUI.stop()))
      .subscribe((res) => {
        console.log(res);
        // this.messageService.add({severity: 'success', summary: MessageUtil.SUCSESS_CONFIRMAR_DADOS_PARTICIPANTE});
        // this.prepareFormularioToShow();
        // this.onSave.emit(this.formulario);
      }, () => {
        // this.messageService.add({severity: 'error', summary: 'Erro', detail: MessageUtil.ERRO_SALVAR_DADOS_PESSOAIS});
      });
  }
}
