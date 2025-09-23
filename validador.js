const bancos = [
  { codigo: '011', nombre: 'Banco de la Nación Argentina', provincias: ['Nacional'] },
  { codigo: '017', nombre: 'Banco Provincia de Buenos Aires', provincias: ['Buenos Aires'] },
  { codigo: '027', nombre: 'Banco de la Ciudad de Buenos Aires', provincias: ['CABA'] },
  { codigo: '029', nombre: 'Banco Hipotecario', provincias: ['Nacional'] },
  { codigo: '035', nombre: 'Banco Patagonia', provincias: ['Nacional'] },
  { codigo: '045', nombre: 'Banco de San Juan', provincias: ['San Juan'] },
  { codigo: '072', nombre: 'Banco Santander Río', provincias: ['Nacional'] },
  { codigo: '085', nombre: 'Banco Comafi', provincias: ['Nacional'] },
  { codigo: '093', nombre: 'Banco de Formosa', provincias: ['Formosa'] },
  { codigo: '100', nombre: 'Banco Macro', provincias: ['Nacional'] },
  { codigo: '147', nombre: 'Banco B.I. Creditanstalt', provincias: ['Nacional'] },
  { codigo: '150', nombre: 'HSBC Bank Argentina', provincias: ['Nacional'] },
  { codigo: '165', nombre: 'JPMorgan Chase Bank', provincias: ['Nacional'] },
  { codigo: '191', nombre: 'Banco Credicoop', provincias: ['Nacional'] },
  { codigo: '198', nombre: 'Banco de Valores', provincias: ['Nacional'] },
  { codigo: '319', nombre: 'Banco CMF', provincias: ['Nacional'] },
  { codigo: '321', nombre: 'Banco de Santiago del Estero', provincias: ['Santiago del Estero'] },
  { codigo: '325', nombre: 'Deutsche Bank', provincias: ['Nacional'] },
  { codigo: '330', nombre: 'Nuevo Banco de Santa Fe', provincias: ['Santa Fe'] },
  { codigo: '331', nombre: 'Banco Cetelem Argentina', provincias: ['Nacional'] },
  { codigo: '332', nombre: 'Banco de Servicios Financieros', provincias: ['Nacional'] },
  { codigo: '335', nombre: 'Banco Cofidis', provincias: ['Nacional'] },
  { codigo: '336', nombre: 'Banco Bradesco Argentina', provincias: ['Nacional'] },
  { codigo: '338', nombre: 'Banco de Servicios y Transacciones', provincias: ['Nacional'] },
  { codigo: '339', nombre: 'RCI Banque', provincias: ['Nacional'] },
  { codigo: '340', nombre: 'BACS Banco de Crédito y Securitización', provincias: ['Nacional'] },
  { codigo: '341', nombre: 'Banco Masventas', provincias: ['Nacional'] },
  { codigo: '386', nombre: 'Nuevo Banco de Entre Ríos', provincias: ['Entre Ríos'] },
  { codigo: '389', nombre: 'Banco Columbia', provincias: ['Nacional'] },
  { codigo: '426', nombre: 'Banco Bica', provincias: ['Nacional'] },
  { codigo: '431', nombre: 'Banco Coinag', provincias: ['Nacional'] },
  { codigo: '432', nombre: 'Banco de Comercio', provincias: ['Nacional'] },
  { codigo: '459', nombre: 'Ford Credit Compañía Financiera', provincias: ['Nacional'] },
  { codigo: '459', nombre: 'Volkswagen Credit Compañía Financiera', provincias: ['Nacional'] },
  { codigo: '459', nombre: 'Toyota Compañía Financiera de Argentina', provincias: ['Nacional'] },
  { codigo: '459', nombre: 'Mercedes-Benz Compañía Financiera Argentina', provincias: ['Nacional'] },
  { codigo: '459', nombre: 'Rombo Compañía Financiera', provincias: ['Nacional'] },
  { codigo: '459', nombre: 'John Deere Credit Compañía Financiera', provincias: ['Nacional'] },
  { codigo: '459', nombre: 'PSA Finance Argentina Compañía Financiera', provincias: ['Nacional'] },
  { codigo: '459', nombre: 'Montemar Compañía Financiera', provincias: ['Nacional'] },
  { codigo: '459', nombre: 'Multifinanzas Compañía Financiera', provincias: ['Nacional'] }
];

function validarCBU() {
  const cbu = document.getElementById('cbu').value.trim();
  const resultado = document.getElementById('resultado');
  if (!/^\d{22}$/.test(cbu)) {
    resultado.innerHTML = `<span style="color:red">CBU/CVU inválido. Debe tener 22 dígitos.</span>`;
    return;
  }

  const bancoCodigo = cbu.substring(0, 3);
  const sucursalCodigo = cbu.substring(3, 7);
  const banco = bancos.find(b => b.codigo === bancoCodigo);

  if (banco) {
    let provincia = banco.provincias.length === 1 ? banco.provincias[0] : 'Desconocida';
    resultado.innerHTML = `<span style="color:green">CBU/CVU válido.<br>Banco: ${banco.nombre}<br>Sucursal: ${sucursalCodigo}<br>Provincia: ${provincia}</span>`;
  } else {
    resultado.innerHTML = `<span style="color:orange">CBU/CVU válido.<br>Banco: Código ${bancoCodigo} (no registrado)<br>Sucursal: ${sucursalCodigo}</span>`;
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
}

window.onload = cargarListaBancos;

