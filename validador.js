// Diccionario de bancos con sus códigos (principales nacionales y provinciales)
const bancos = {
  "011": "Banco de la Nación Argentina",
  "014": "Banco de la Provincia de Buenos Aires",
  "015": "Banco Galicia",
  "016": "Banco de la Provincia de Córdoba",
  "017": "BBVA Banco Francés",
  "018": "Banco de la Provincia de Jujuy",
  "020": "Banco de la Provincia de San Juan",
  "027": "Banco Supervielle",
  "029": "Banco de la Ciudad de Buenos Aires",
  "030": "Banco de la Provincia de Tucumán",
  "034": "Banco Patagonia",
  "044": "Banco Hipotecario",
  "045": "Banco de San Luis",
  "072": "Banco Santander Río",
  "083": "Banco del Chubut",
  "086": "Banco de Santa Cruz",
  "093": "Banco de la Pampa",
  "094": "Banco de Corrientes",
  "097": "Banco Provincia del Neuquén",
  "143": "Brubank",
  "147": "Banco Interfinanzas",
  "150": "HSBC Bank Argentina",
  "165": "JP Morgan Chase Bank",
  "191": "Banco Credicoop",
  "198": "Banco de Valores",
  "247": "Banco Roela",
  "254": "Banco Mariva",
  "259": "Banco Itaú Argentina",
  "262": "Bank of America",
  "266": "BNP Paribas",
  "268": "Banco Provincia de Tierra del Fuego",
  "269": "Banco de la República Oriental del Uruguay",
  "277": "Banco Sáenz",
  "281": "Banco Meridian",
  "285": "Banco Macro",
  "299": "Banco Comafi",
  "300": "Banco de Inversión y Comercio Exterior",
  "301": "Banco Piano",
  "305": "Banco Julio",
  "309": "Banco HSBC Investment",
  "310": "Banco del Sol",
  "311": "Nuevo Banco del Chaco",
  "312": "MBA Lazard",
  "315": "Banco de Formosa",
  "319": "Banco CMF",
  "321": "Banco de Santiago del Estero",
  "322": "Banco Industrial",
  "325": "Deutsche Bank",
  "330": "Banco de Santa Fe",
  "331": "Banco de Entre Ríos",
  "332": "Banco de Santa Cruz",
  "336": "Banco Cetelem",
  "338": "Banco de Servicios Financieros",
  "339": "RCI Banque",
  "340": "BACS Banco de Crédito y Securitización",
  "341": "Banco Masventas",
  "384": "Wilobank"
};

// Validación de CBU
function validarCBU() {
  const cbu = document.getElementById("cbu").value.trim();
  const resultado = document.getElementById("resultado");

  if (!/^\d{22}$/.test(cbu)) {
    resultado.innerHTML = "<span style='color:red'>❌ El CBU/CVU debe tener 22 dígitos</span>";
    return;
  }

  const bancoCodigo = cbu.substring(0, 3);
  const sucursalCodigo = cbu.substring(3, 7);

  let bancoNombre = bancos[bancoCodigo] || "Banco desconocido";

  resultado.innerHTML = `
    ✅ <b>CBU válido</b><br>
    🏦 Banco: ${bancoNombre}<br>
    🏢 Sucursal: ${sucursalCodigo}
  `;
}

// Llenar lista desplegable
window.onload = function() {
  const lista = document.getElementById("listaBancos");
  for (const codigo in bancos) {
    const option = document.createElement("option");
    option.value = codigo;
    option.text = `${codigo} - ${bancos[codigo]}`;
    lista.appendChild(option);
  }
};
