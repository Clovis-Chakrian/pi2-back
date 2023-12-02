function TransformaTipoAbastAgua(idAbastAgua) {
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

export { TransformaTipoAbastAgua };