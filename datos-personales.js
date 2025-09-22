const verifikApiKey = 'TU_API_KEY_DE_VERIFIK';
const tusFacturasApiUrl = 'https://api.tusfacturas.app/v2/consulta/cuit';

async function consultarDatos() {
  const dni = document.getElementById('dni').value;
  if (!dni) { alert('Por favor, ingrese un DNI.'); return; }

  const datosPersonales = await obtenerDatosPersonales(dni);
  document.getElementById('datosPersonales').textContent = JSON.stringify(datosPersonales, null, 2);

  const cuit = datosPersonales.cuit;
  if (cuit) {
    const datosFiscales = await obtenerDatosFiscales(cuit);
    document.getElementById('datosFiscales').textContent = JSON.stringify(datosFiscales, null, 2);
  } else {
    alert('No se pudo obtener el CUIT asociado al DNI.');
  }
}

async function obtenerDatosPersonales(dni) {
  const response = await fetch(`https://api.verifik.co/v2/ar/cedula/${dni}`, {
    headers: { 'Authorization': `Bearer ${verifikApiKey}` }
  });
  if (!response.ok) throw new Error('Error al consultar los datos personales.');
  return await response.json();
}

async function obtenerDatosFiscales(cuit) {
  const response = await fetch(`${tusFacturasApiUrl}/${cuit}`);
  if (!response.ok) throw new Error('Error al consultar los datos fiscales.');
  return await response.json();
}
