import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CorretoraForm} from '../../../domain/corretora-form';
import {CorretoraService} from '../../../service/corretora.service';

@Component({
  selector: 'app-cadastrar-corretora',
  templateUrl: './cadastrar-corretora.component.html',
  styleUrls: ['./cadastrar-corretora.component.css']
})
export class CadastrarCorretoraComponent implements OnInit {

  @ViewChild('form', {static: false}) form: NgForm;
  // @BlockUI() blockUI: NgBlockUI;

  corretoraForm: CorretoraForm = new CorretoraForm();

  constructor(/*private messageService: MessageService,*/
              private corretoraService: CorretoraService) {
  }

  ngOnInit(): void {
  }


  save() {
    console.log(this.corretoraForm);
    // this.usuarioForm.dtNascimento = '1988-04-25'
    // if (this.form.invalid) {
    //   this.messageService.add({severity: 'error', summary: 'Erro', detail: MessageUtil.ERRO_CAMPOS_OBRIGATORIOS});
    //   return;
    // }
    // this.prepareFormularioToSave();
    // this.blockUI.start(MessageUtil.SALVANDO_REGISTRO);
    this.corretoraService.salvarCorretora(this.corretoraForm)
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
