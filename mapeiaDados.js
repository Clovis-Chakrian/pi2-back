function retornaDependenciaAdministrativa(numeroDependenciaAdministrativa) {
  switch (numeroDependenciaAdministrativa) {
    case 1:
      return "Federal"

    case 2:
      return "Estadual"

    case 3:
      return "Municipal"

    case 4:
      return "Privada"

    default:
      return "Não se aplica"
  }
};

function retornaTipoAbastEnergia(numeroTipoEnergia) {
  switch (numeroTipoEnergia) {
    case 1:
      return "Rede Publica"

    case 2:
      return "Gerador Fossil"

    case 3:
      return "Energia Renovavel"

    case 4:
      return "Inexistente"

    default:
      return "Não se aplica"
  }
};

function retornaTipoAbastAgua(idAbastAgua) {
  switch (idAbastAgua) {
    case 1:
      return "Agua Potavel"

    case 2:
      return "Agua Rede Publica"

    case 3:
      return "Agua Poco Artesiano"

    case 4:
      return "Agua Cacimba"

    case 5:
      return "Agua Fonte Rio"

    case 6:
      return "Inexistente"

    default:
      return "Inexistente"
  }
};

function formataEscolas(arrayEscolas) {
  const escolasFormatadas = [];

  arrayEscolas.map(escola => {
    const escolaFormatada = {
      idEscola: escola.id_escola,
      codigoEscola: escola.codigo_escola,
      dependenciaAdministrativa: retornaDependenciaAdministrativa(escola.depend_adm),
      orgaoRegional: escola.org_regional,
      nomeEscola: escola.nome_escola,
      realizaExame: escola.info_realiza_exame
    }

    escolasFormatadas.push(escolaFormatada);
  })

  return escolasFormatadas;
};

export { formataEscolas };