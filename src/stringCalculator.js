function add(cadena) {
  if (cadena === "") {
    return 0;
  }

  const numeros = cadena.split(/,|-/);

  return numeros.reduce((total, numero) => {
    return total + Number(numero);
  }, 0);
}

export default add;