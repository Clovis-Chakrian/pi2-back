import { TransformaDependenciaAdministrativa } from "../transformadores/TransformaDependenciaAdministrativa.js";

function FormataEscolas(arrayEscolas) {
  const escolasFormatadas = [];

  arrayEscolas.map(escola => {
    const escolaFormatada = {
      idEscola: escola.id_escola,
      codigoEscola: escola.codigo_escola,
      dependenciaAdministrativa: TransformaDependenciaAdministrativa(escola.depend_adm),
      orgaoRegional: escola.org_regional,
      nomeEscola: escola.nome_escola,
      realizaExame: escola.info_realiza_exame
    }

    escolasFormatadas.push(escolaFormatada);
  })

  return escolasFormatadas;
};

export { FormataEscolas };