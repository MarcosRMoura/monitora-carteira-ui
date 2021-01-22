import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AtivoService} from '../../../service/ativo.service';
import {AtivoForm} from '../../../domain/ativo-form';

@Component({
  selector: 'app-cadastrar-carteira',
  templateUrl: './cadastrar-carteira.component.html',
  styleUrls: ['./cadastrar-carteira.component.css']
})
export class CadastrarCarteiraComponent implements OnInit {

  @ViewChild('form', {static: false}) form: NgForm;
  // @BlockUI() blockUI: NgBlockUI;

  ativoForm: AtivoForm = new AtivoForm();
  ativo: string;

  constructor(/*private messageService: MessageService,*/
              private ativoService: AtivoService) {
  }

  ngOnInit(): void {
  }


  save() {
    console.log(this.ativoForm);
    // this.usuarioForm.dtNascimento = '1988-04-25'
    // if (this.form.invalid) {
    //   this.messageService.add({severity: 'error', summary: 'Erro', detail: MessageUtil.ERRO_CAMPOS_OBRIGATORIOS});
    //   return;
    // }
    // this.prepareFormularioToSave();
    // this.blockUI.start(MessageUtil.SALVANDO_REGISTRO);
    this.ativoService.autoCompleteAtivo(this.ativo)
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
