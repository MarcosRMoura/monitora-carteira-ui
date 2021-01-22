import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {DadosCadastrais} from "../domain/servicos-externos/dados-cadastrais";
// import {LancamentosFuturosParticipantes} from "../domain/servicos-externos/lancamento-futuro-participante";
// import {DadosCadastraisForm} from "../domain/form/dados-cadastrais-form";
// import {InformacoesPlano} from "../domain/informacoes-plano";

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {
  // private resourceUrl = environment.usuarioUrl + '/usuario';
  private resourceUrl = 'http://localhost:8080/api/carteira';

  constructor(private httpClient: HttpClient) {
  }

  public salvarCarteira(carteira: CarteiraForm): Observable<CarteiraForm> {
    return this.httpClient.post<CarteiraForm>(`${this.resourceUrl}`, carteira);
  }

  // public getVinculos(): Observable<DadosCadastrais[]> {
  //     return this.httpClient.get<DadosCadastrais[]>(`${this.resourceUrl}/vinculos`);
  // }
  //
  // public getLancamentosFuturos(): Observable<LancamentosFuturosParticipantes[]> {
  //     return this.httpClient.get<LancamentosFuturosParticipantes[]>(`${this.resourceUrl}/lancamentos-futuros`);
  // }
  //
  // public update(participante: DadosCadastraisForm): Observable<DadosCadastrais[]> {
  //     return this.httpClient.put<DadosCadastrais[]>(`${this.resourceUrl}`, participante);
  // }
  //
  // public getDetails(): Observable<DadosCadastrais> {
  //     return this.httpClient.get<DadosCadastrais>(`${this.resourceUrl}/details`);
  // }
  //
  // public setDetails(index: number): Observable<void> {
  //     return this.httpClient.put<void>(`${this.resourceUrl}/details`, index);
  // }
  //
  // public geraCertificado() {
  //     return this.httpClient.get(`${this.resourceUrl}/certificado`, {
  //         observe: "response",
  //         responseType: "arraybuffer",
  //     });
  // }
  //
  // public getInformacoesPlano() {
  //     return this.httpClient.get<InformacoesPlano>(`${this.resourceUrl}/informacoes-plano`);
  // }
  //
  // public getDataAdesaoPlano(): Observable<Date> {
  //     return this.httpClient.get<Date>(`${this.resourceUrl}/dt-adesao-plano`);
  // }
}
