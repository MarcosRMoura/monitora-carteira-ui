export class MessageUtil {
  /**
   * BlockUI messages
   */
  public static readonly CARREGANDO = 'Carregando...';
  public static readonly SALVANDO_REGISTRO = 'Salvando Registro...';

  /**
   * Mensagens de erro
   */
  public static readonly ERRO_CEP_NAO_ENCONTRADO = 'CEP não encontrado';
  public static readonly ERRO_VINCULO_NAO_SELECIONADO = 'Vinculo não foi selecionado. Favor selecionar um vínculo antes de continuar';
  public static readonly DATA_FORA_PERMITIDO = 'Data fora do período permitido!';
  public static readonly DATA_NAO_REGISTRADA = 'Data não registrada!';
  public static readonly ERRO_CAMPOS_OBRIGATORIOS = 'Necessário preencher os campos obrigatórios';
  public static readonly ERRO_DATAS_INCORRETAS = 'Necessário preencher os campos com datas válidas';
  public static readonly ERRO_SALVAR_DADOS_PESSOAIS = 'Error ao salvar Dados Pessoais.';
  public static readonly ERRO_ACESSO_NEGADO = 'Seu formulário estará disponível após a chegada da sua primeira contribuição à Funpresp. Com a desistência do plano, conforme a Lei nº 13.183/2015, suas contribuições serão devolvidas em até 60 dias.';
  public static readonly ERRO_LIMITE_ARQUIVOS = 'Limite do número arquivos excedido.';
  public static readonly ERRO_LIMITE_TAMANHO = 'Somente são permitidos arquivos de até #tam# bytes';
  public static readonly ERRO_NOME_ARQUIVO = 'Nome do arquivo está fora do padrão.';
  public static readonly ERRO_SELECIONE_PAR = 'Necessário selecionar pelo menos uma PAR!';
  public static readonly ERRO_PAR_INEXISTENTE = 'Não existe PAR para ser cancelada!';
  public static readonly ERRO_ARQUIVO_INVALIDO = 'Arquivo Inválido!';
  public static readonly ERRO_LIMITE_ARQUIVO_20_MB = 'O tamanho do arquivo ultrapassa o limite de 20MB!';
  public static readonly ERRO_TIPO_ARQUIVO_INVALIDO = 'Erro tipo de arquivo inválido.';
  public static readonly ERRO_DATA_INVALIDA = 'Data de vencimento inválida.';
  public static readonly ERRO_GERAR_BOLETO = 'Ops, um erro ocorreu. Tente novamente';

  /**
   * Mensagens de sucesso
   */
  public static readonly SUCSESS_REGISTRAR_SOLICITACAO = 'Solicitação registrada com sucesso';
  public static readonly SUCSESS_CONFIRMAR_DADOS_PARTICIPANTE = 'Dados confirmados com sucesso.';
  public static readonly SUCCESS_REGISTRO_SALVO = 'Registro Salvo com sucesso!';
  public static readonly SUCCESS_REGISTRO_APAGADO = 'Registro Apagado com sucesso!';
  public static readonly SUCCESS_CANCELAR_SOLICITACOES = 'Solicitação cancelada com sucesso.';
  public static readonly SUCCESS_CANCELAR_MENSAL = 'Solicitação de Cancelamento registrada com sucesso';
  public static readonly SUCCESS_ANULAR_MENSAL = 'Solicitação Anulada com sucesso!';
  public static readonly SUCESSO_COPIAR_CODIGO = 'Número do código de barra copiado com sucesso.';
  public static readonly SUCSESS_REGISTRAR_REGIME_TRIBUTACAO = 'Regime de Tributação Alterado com Sucesso';
}
