function TransformaDependenciaAdministrativa(numeroDependenciaAdministrativa) {
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

export { TransformaDependenciaAdministrativa };