export async function getWeather() {
  const clima = await getLocation();
  const { lat, lng } = clima;

  if (lat === null || lng === null) {
    throw new Error('No se pudo obtener la ubicación');
  }

  const data = await getCity(lat, lng);
  const time = await verifyTime(lat, lng);

  const { sunrise, sunset, now, dayPeriod} = time;

  const { city, country, neighbourhood, department, zone } = data;

  const BASE_URL = `https://wttr.in/${lat},${lng}?format=%C|%t|%h`;
  const response = await fetch(BASE_URL);

  if (!response.ok) throw new Error('Error al obtener el clima');
  const text = await response.text();

  const [descripcion, temperatura, humedad] = text.split('|');

  return { descripcion, temperatura, humedad, city, country, neighbourhood, department, zone, sunrise, sunset, now, dayPeriod};
}

function getLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      console.log("GPS no disponible o denegado");
      return resolve({ lat: null, lng: null, accuracy: null });
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        console.log(`${lat},${lng} Precisión: ${accuracy} mts`);
        resolve({ lat, lng, accuracy });
      },
      error => {
        console.error("Error al obtener la ubicación:", error.message);
        resolve({ lat: null, lng: null, accuracy: null });
      }
    );
  });
}

async function getCity(lat, lng) {
  if (!lat || !lng) {
    return {
      city: 'Desconocida',
      country: 'Desconocido',
      neighbourhood: 'Desconocido',
      department: 'Desconocido',
      zone: 'Desconocida'
    };
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
      {
        headers: {
          'User-Agent': 'mi-app-clima/1.0 (tucorreo@ejemplo.com)'
        }
      }
    );

    const data = await response.json();
    // console.log('Datos de la ciudad:', data);
    const addr = data.address;

    return {
      city: addr.county || addr.city || addr.town || addr.village || 'Desconocida',
      country: addr.country || 'Desconocido',
      neighbourhood: addr.neighbourhood || 'Desconocido',
      department: addr.state || 'Desconocido',
      zone: addr.state_district || 'Desconocida'
    };
  } catch (error) {
    console.error('Error obteniendo datos de ciudad:', error.message);
    return {
      city: 'Desconocida',
      country: 'Desconocido',
      neighbourhood: 'Desconocido',
      department: 'Desconocido',
      zone: 'Desconocida'
    };
  }
}

async function verifyTime(lat, lng) {
  try {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`);
    const data = await response.json();

    console.log('Datos de hora solar:', data);

    const sunrise = new Date(data.results.sunrise);
    const sunset = new Date(data.results.sunset);
    const ahora = new Date();

    console.log(`Amanecer: ${sunrise.toLocaleTimeString()}, Atardecer: ${sunset.toLocaleTimeString()}, Ahora: ${ahora.toLocaleTimeString()}`);

    const esDeDia = ahora >= sunrise && ahora <= sunset;

    return {
      sunrise: sunrise.toLocaleTimeString(),
      sunset: sunset.toLocaleTimeString(),
      now: ahora.toLocaleTimeString(),
      dayPeriod: esDeDia ? 'Dia' : 'Noche',
    };
  } catch (error) {
    console.error('Error verificando hora solar:', error.message);
    return {
      sunrise: 'Desconocido',
      sunset: 'Desconocido',
      now: new Date().toLocaleTimeString(),
      dayPeriod: null
    };
  }
}