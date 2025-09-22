const bancos = {
  "011": "Banco de la Nación Argentina",
  "014": "Banco de la Provincia de Buenos Aires",
  "027": "Banco Supervielle S.A.",
  "029": "Banco de la Ciudad de Buenos Aires",
  "034": "Banco Patagonia S.A.",
  "044": "Banco Hipotecario S.A.",
  "072": "Banco Santander Río S.A.",
  "147": "Banco B.I. Creditanstalt S.A.",
  "150": "HSBC Bank Argentina S.A.",
  "259": "Banco Itaú Argentina S.A.",
  "285": "Banco de la Nación Argentina"
};

function obtenerBanco(cbu) {
  const codigoBanco = cbu.slice(0, 3);
  const codigoSucursal = cbu.slice(3, 7);
  const nombreBanco = bancos[codigoBanco] || "Banco desconocido";
  return `Banco: ${nombreBanco}, Sucursal: ${codigoSucursal}`;
}

function validarCBU(cbu) {
  if (!/^[0-9]{22}$/.test(cbu)) return false;

  function validarBloque(bloque, pesos) {
    let suma = 0;
    for (let i = 0; i < pesos.length; i++) {
      suma += parseInt(bloque[i], 10) * pesos[i];
    }
    const verificador = (10 - (suma % 10)) % 10;
    return verificador === parseInt(bloque[bloque.length - 1], 10);
  }

  const bloque1 = cbu.slice(0, 8);
  const bloque2 = cbu.slice(8, 22);

  return validarBloque(bloque1, [7,1,3,9,7,1,3]) &&
         validarBloque(bloque2, [3,9,7,1,3,9,7,1,3,9,7,1,3]);
}
