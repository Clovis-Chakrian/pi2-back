import { TransformaTipoAbastEnergia } from "../transformadores/TransformaTipoAbastEnergia.js";

function FormataAbastEnergia(abastEnergiaArray) {
  const abastEnergiaFormatadas = [];

  abastEnergiaArray.map(abastEnergia => {
    const abastEnergiaFormatado = {
      idEscolaAbastecimentoEnergia: abastEnergia.id_escola_tipo_abastecimento_energia,
      idEscola: abastEnergia.id_escola,
      idAbastecimentoEnergia: TransformaTipoAbastEnergia(abastEnergia.id_abs_energia),
    }

    abastEnergiaFormatadas.push(abastEnergiaFormatado);
  })

  return abastEnergiaFormatadas;
};

export { FormataAbastEnergia };