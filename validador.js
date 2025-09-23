<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Validar CBU/CVU</title>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; }
  #cbu { width: 250px; padding: 5px; margin-bottom: 10px; }
  #resultado { margin-top: 10px; }
  select { width: 300px; max-height: 200px; overflow-y: auto; }
</style>
</head>
<body>

<h2>Validar CBU/CVU</h2>

<input type="text" id="cbu" placeholder="Ingrese CBU/CVU" maxlength="22">
<button onclick="validarCBU()">Validar CBU</button>

<br><br>

<select id="listaBancos"></select>

<div id="resultado"></div>

<script>
const bancos = [
  { codigo: '005', nombre: 'The Royal Bank of Scotland N.V.', provincias: ['Internacional'] },
  { codigo: '007', nombre: 'Banco de Galicia y Buenos Aires S.A.', provincias: ['Nacional'] },
  { codigo: '011', nombre: 'Banco de la Nación Argentina', provincias: ['Nacional'] },
  { codigo: '014', nombre: 'Banco de la Provincia de Buenos Aires', provincias: ['Buenos Aires'] },
  { codigo: '015', nombre: 'Industrial and Commercial Bank of China (Argentina) S.A.', provincias: ['Nacional'] },
  { codigo: '016', nombre: 'Citibank N.A.', provincias: ['Nacional'] },
  { codigo: '017', nombre: 'BBVA Banco Francés S.A.', provincias: ['Nacional'] },
  { codigo: '018', nombre: 'The Bank of Tokyo-Mitsubishi UFJ, LTD.', provincias: ['Nacional'] },
  { codigo: '020', nombre: 'Banco de la Provincia de Córdoba S.A.', provincias: ['Córdoba'] },
  { codigo: '027', nombre: 'Banco Supervielle S.A.', provincias: ['Nacional'] },
  { codigo: '029', nombre: 'Banco de la Ciudad de Buenos Aires', provincias: ['CABA'] },
  { codigo: '034', nombre: 'Banco Patagonia S.A.', provincias: ['Nacional'] },
  { codigo: '044', nombre: 'Banco Hipotecario S.A.', provincias: ['Nacional'] },
  { codigo: '045', nombre: 'Banco de San Juan S.A.', provincias: ['San Juan'] },
  { codigo: '046', nombre: 'Banco do Brasil S.A.', provincias: ['Internacional'] },
  { codigo: '060', nombre: 'Banco del Tucumán S.A.', provincias: ['Tucumán'] },
  { codigo: '065', nombre: 'Banco Municipal de Rosario', provincias: ['Santa Fe'] },
  { codigo: '072', nombre: 'Banco Santander Río S.A.', provincias: ['Nacional'] },
  { codigo: '083', nombre: 'Banco del Chubut S.A.', provincias: ['Chubut'] },
  { codigo: '086', nombre: 'Banco de Santa Cruz S.A.', provincias: ['Santa Cruz'] },
  { codigo: '093', nombre: 'Banco de la Pampa', provincias: ['La Pampa'] },
  { codigo: '094', nombre: 'Banco de Corrientes S.A.', provincias: ['Corrientes'] },
  { codigo: '097', nombre: 'Banco Provincia del Neuquén S.A.', provincias: ['Neuquén'] },
  { codigo: '147', nombre: 'Banco B.I. Creditanstalt S.A.', provincias: ['Nacional'] },
  { codigo: '150', nombre: 'HSBC Bank Argentina S.A.', provincias: ['Nacional'] },
  { codigo: '165', nombre: 'J.P. Morgan Chase Bank (Sucursal Buenos Aires)', provincias: ['Nacional'] },
  { codigo: '191', nombre: 'Banco Credicoop Cooperativo Limitado', provincias: ['Nacional'] },
  { codigo: '198', nombre: 'Banco de Valores S.A.', provincias: ['Nacional'] },
  { codigo: '247', nombre: 'Banco Roela S.A.', provincias: ['Nacional'] },
  { codigo: '254', nombre: 'Banco Mariva S.A.', provincias: ['Nacional'] },
  { codigo: '259', nombre: 'Banco Itaú Argentina S.A.', provincias: ['Nacional'] },
  { codigo: '262', nombre: 'Bank of America, National Association', provincias: ['Internacional'] },
  { codigo: '266', nombre: 'BNP Paribas', provincias: ['Internacional'] },
  { codigo: '268', nombre: 'Banco Provincia de Tierra del Fuego', provincias: ['Tierra del Fuego'] },
  { codigo: '269', nombre: 'Banco de la República Oriental del Uruguay', provincias: ['Internacional'] },
  { codigo: '277', nombre: 'Banco Sáenz S.A.', provincias: ['Nacional'] },
  { codigo: '281', nombre: 'Banco Meridian S.A.', provincias: ['Nacional'] },
  { codigo: '285', nombre: 'Banco Macro S.A.', provincias: ['Nacional'] },
  { codigo: '295', nombre: 'American Express Bank Ltd.', provincias: ['Internacional'] },
  { codigo: '299', nombre: 'Banco Comafi S.A.', provincias: ['Nacional'] },
  { codigo: '300', nombre: 'Banco de Inversión y Comercio Exterior S.A.', provincias: ['Nacional'] },
  { codigo: '301', nombre: 'Banco Piano S.A.', provincias: ['Nacional'] },
  { codigo: '303', nombre: 'Banco Finansur S.A.', provincias: ['Nacional'] },
  { codigo: '305', nombre: 'Banco Julio S.A.', provincias: ['Nacional'] },
  { codigo: '309', nombre: 'Nuevo Banco de La Rioja S.A.', provincias: ['La Rioja'] },
  { codigo: '310', nombre: 'Banco del Sol S.A.', provincias: ['Nacional'] },
  { codigo: '311', nombre: 'Nuevo Banco del Chaco S.A.', provincias: ['Chaco'] },
  { codigo: '312', nombre: 'Banco VOII S.A.', provincias: ['Nacional'] },
  { codigo: '315', nombre: 'Banco de Formosa S.A.', provincias: ['Formosa'] },
  { codigo: '319', nombre: 'Banco CMF S.A.', provincias: ['Nacional'] },
  { codigo: '321', nombre: 'Banco de Santiago del Estero S.A.', provincias: ['Santiago del Estero'] },
  { codigo: '325', nombre: 'Deutsche Bank S.A.', provincias: ['Nacional'] },
  { codigo: '330', nombre: 'Nuevo Banco de Santa Fe S.A.', provincias: ['Santa Fe'] },
  { codigo: '331', nombre: 'Banco Cetelem Argentina S.A.', provincias: ['Nacional'] },
  { codigo: '332', nombre: 'Banco de Servicios Financieros S.A.', provincias: ['Nacional'] },
  { codigo: '336', nombre: 'Banco Bradesco Argentina S.A.', provincias: ['Nacional'] },
  { codigo: '338', nombre: 'Banco de Servicios y Transacciones S.A.', provincias: ['Nacional'] },
  { codigo: '339', nombre: 'RCI Banque S.A.', provincias: ['Nacional'] },
  { codigo: '340', nombre: 'BACS Banco de Crédito y Securitización S.A.', provincias: ['Nacional'] },
  { codigo: '341', nombre: 'Banco Masventas S.A.', provincias: ['Nacional'] },
  { codigo: '386', nombre: 'Nuevo Banco de Entre Ríos S.A.', provincias: ['Entre Ríos'] },
  { codigo: '389', nombre: 'Banco Columbia S.A.', provincias: ['Nacional'] },
  { codigo: '426', nombre: 'Banco BICA S.A.', provincias: ['Nacional'] },
  { codigo: '431', nombre: 'Banco Coinag S.A.', provincias: ['Nacional'] },
  { codigo: '432', nombre: 'Banco de Comercio S.A.', provincias: ['Nacional'] }
];

function validarCBU() {
  const cbu = document.getElementById('cbu').value.trim();
  const resultado = document.getElementById('resultado');

  if (!/^\d{22}$/.test(cbu)) {
    resultado.innerHTML = `<span style="color:red">❌ CBU/CVU inválido. Debe tener 22 dígitos.</span>`;
    return;
  }

  const bancoCodigo = cbu.substring(0, 3);
  const sucursalCodigo = cbu.substring(3, 7);
  const banco = bancos.find(b => b.codigo === bancoCodigo);

  if (banco) {
    let provincia = banco.provincias.length === 1 ? banco.provincias[0] : 'Desconocida';
    resultado.innerHTML = `<div style="color:green; font-weight:bold">✅ CBU/CVU válido.<br>Banco: ${banco.nombre}<br>Sucursal: ${sucursalCodigo}<br>Provincia: ${provincia}</div>`;
  } else {
    resultado.innerHTML = `<div style="color:orange; font-weight:bold">⚠️ CBU/CVU válido.<br>Banco: Código ${bancoCodigo} (no registrado)<br>Sucursal: ${sucursalCodigo}</div>`;
  }
}

function cargarListaBancos() {
  const lista = document.getElementById('listaBancos');
  bancos.forEach(b => {
    const option = document.createElement('option');
    option.value = b.codigo;
    option.text = `${b.codigo} - ${b.nombre}`;
    lista.appendChild(option);
  });

  lista.addEventListener('change', () => {
    document.getElementById('cbu').value = lista.value;
  });
}

window.onload = cargarListaBancos;
</script>

</body>
</html>

