function add(cadena) {
  if (cadena === "") {
    return 0;
  }

  let textoNumeros = cadena;
  let separadores = [",", "-"];

  if (cadena.startsWith("//")) {
    const partes = cadena.match(/^\/\/\[(.+)\]\s(.+)$/);

    const delimitador = partes[1];
    textoNumeros = partes[2];

    separadores.push(delimitador);
  }

  const patron = new RegExp(separadores.join("|"), "g");
  const numeros = textoNumeros.split(patron);

  return numeros.reduce((total, numero) => {
    return total + Number(numero);
  }, 0);
}

export default add;