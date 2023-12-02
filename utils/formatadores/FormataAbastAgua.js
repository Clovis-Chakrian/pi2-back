import { TransformaTipoAbastAgua } from "../transformadores/TransformaTipoAbastAgua.js";

function FormataAbastAgua(abastAguaArray) {
  const abastEnergiaFormatadas = [];

  abastAguaArray.map(abastAgua => {
    const abastAguaFormatada = {
      idEscolaAbastecimentoAgua: abastAgua.id_escola_tipo_abastecimento_agua,
      idEscola: abastAgua.id_escola,
      idAbastecimentoAgua: TransformaTipoAbastAgua(abastAgua.id_abs_agua),
    }

    abastEnergiaFormatadas.push(abastAguaFormatada);
  })

  return abastEnergiaFormatadas;
};

export { FormataAbastAgua };