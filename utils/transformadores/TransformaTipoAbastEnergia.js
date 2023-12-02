function TransformaTipoAbastEnergia(numeroTipoEnergia) {
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

export { TransformaTipoAbastEnergia };