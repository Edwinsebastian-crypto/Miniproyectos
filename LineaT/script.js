  const imgIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>';
 
  const generations = {
    g1: {
      badge: "1G", year: "1979–1983 · Analógica", color: "var(--g1)",
      body: `
        <p>Primera red celular comercial. Transmitía la voz de forma analógica, sin ningún tipo de cifrado ni capacidad de enviar datos.</p>
        <h3>Estándares regionales</h3>
        <ul>
          <li>AMPS (Estados Unidos)</li>
          <li>NMT (países nórdicos)</li>
          <li>TACS (Reino Unido)</li>
        </ul>
        <h3>Limitaciones</h3>
        <ul>
          <li>Sin roaming internacional real: cada país tenía su propio estándar.</li>
          <li>Baja calidad de audio y señal fácilmente interceptable.</li>
          <li>Equipos grandes y pesados, con autonomía de apenas ~1 hora en llamada.</li>
        </ul>
        <h3>Legado</h3>
        <p>Sentó las bases de la telefonía celular: el teléfono dejó de estar atado a un cable.</p>`,
      images: [
        { src: "motorola.png", caption: "Motorola DynaTAC (teléfono ladrillo)" } 
      ]
    },
    g2: {
      badge: "2G", year: "1991 · GSM (digital)", color: "var(--g2)",
      body: `
        <p>Digitalizó la voz y estandarizó globalmente la telefonía móvil con GSM, permitiendo por primera vez el roaming internacional.</p>
        <h3>Novedades clave</h3>
        <ul>
          <li>Tarjeta SIM: la identidad del usuario se separa del equipo.</li>
          <li>Cifrado básico de la comunicación (A5/1).</li>
          <li>Mensajes SMS y, después, MMS.</li>
        </ul>
        <h3>Evolución dentro de 2G</h3>
        <ul>
          <li>GPRS (2.5G): primeros datos por paquetes, 56–114 kbps.</li>
          <li>EDGE (2.75G): hasta ~384 kbps.</li>
        </ul>
        <h3>Impacto cultural</h3>
        <p>El SMS se convierte en un fenómeno masivo; aparecen los primeros juegos y tonos de llamada descargables.</p>`,
      images: [
        { src: "Nokia.jpg", caption: "Nokia 3310 y tarjeta SIM" }
      ]
    },
    g3: {
      badge: "3G", year: "2001 · UMTS / CDMA2000", color: "var(--g3)",
      body: `
        <p>Llevó el internet real al bolsillo: navegación web, correo electrónico y videollamada por primera vez en un teléfono.</p>
        <h3>Tecnologías</h3>
        <ul>
          <li>UMTS / WCDMA en Europa y Asia; CDMA2000 en América.</li>
          <li>HSDPA / HSUPA (3.5G): hasta ~14 Mbps de bajada.</li>
        </ul>
        <h3>Lo que hizo posible</h3>
        <ul>
          <li>GPS integrado y mapas en tiempo real.</li>
          <li>Los primeros "smartphones" con tiendas de aplicaciones.</li>
          <li>Streaming de audio y video en baja calidad.</li>
        </ul>
        <h3>Reto</h3>
        <p>La cobertura 3G era desigual entre zonas urbanas y rurales, y el costo de los datos aún era alto.</p>`,
      images: [
        { src: "iphone.png", caption: "Primer iPhone / smartphone 3G (2007)" }
      ]
    },
    g4: {
      badge: "4G", year: "2009 · LTE / LTE-Advanced", color: "var(--g4)",
      body: `
        <p>La primera generación pensada desde el inicio para datos, no para voz. Trajo la banda ancha móvil real.</p>
        <h3>Tecnologías</h3>
        <ul>
          <li>LTE y LTE-Advanced: 100 Mbps – 1 Gbps.</li>
          <li>VoLTE: la voz también viaja como datos, con mejor calidad.</li>
        </ul>
        <h3>Lo que habilitó</h3>
        <ul>
          <li>Streaming en HD (YouTube, Netflix móvil).</li>
          <li>Apps que cambiaron hábitos: Uber, Instagram, WhatsApp con multimedia.</li>
          <li>Videojuegos móviles en línea competitivos.</li>
        </ul>
        <h3>Base para lo siguiente</h3>
        <p>Introdujo redes definidas por software (SDN), un paso necesario hacia la flexibilidad que exigiría 5G.</p>`,
      images: [
        { src: "lte.png", caption: "Torre LTE / infraestructura 4G" }
      ]
    },
    g5: {
      badge: "5G", year: "2019 · New Radio (NR)", color: "var(--g5)",
      body: `
        <p>Diseñada alrededor de tres pilares que van más allá de "más velocidad para el usuario".</p>
        <h3>Los tres pilares de 5G</h3>
        <ul>
          <li><b>eMBB</b> — banda ancha móvil mejorada (hasta 10–20 Gbps pico).</li>
          <li><b>URLLC</b> — comunicación ultra confiable de baja latencia (~1 ms), clave para autos autónomos y cirugía remota.</li>
          <li><b>mMTC</b> — comunicación masiva tipo máquina: miles de sensores IoT por km².</li>
        </ul>
        <h3>Tecnología habilitante</h3>
        <ul>
          <li>Bandas de ondas milimétricas (mmWave) y sub-6GHz.</li>
          <li>Network slicing: "rebanar" la red en segmentos dedicados por caso de uso.</li>
        </ul>
        <p>5G es la primera generación construida pensando en las máquinas tanto como en las personas.</p>`,
      images: [
        { src: "antena.png", caption: "Antena 5G / small cell urbana" }
      ]
    },
    g6: {
      badge: "6G", year: "Estándar 2029 · Comercial ~2030 (proyectado)", color: "var(--g6)",
      body: `
        <p>Aún en desarrollo. El objetivo no es solo más velocidad, sino fusionar la red con la inteligencia artificial y la percepción del entorno.</p>
        <h3>Objetivos técnicos</h3>
        <ul>
          <li>Latencia de 0,1–1 ms y velocidades objetivo superiores a 100 Gbps.</li>
          <li>Exploración de frecuencias en el rango de terahercios (THz).</li>
          <li>JCAS (Joint Communication and Sensing): la red "percibe" el entorno además de transmitir datos.</li>
        </ul>
        <h3>IA nativa</h3>
        <ul>
          <li>Redes que se autoconfiguran, autooptimizan y autorreparan.</li>
          <li>Prioriza recursos en tiempo real según el caso de uso (auto autónomo vs. streaming).</li>
        </ul>
        <h3>Visión de uso</h3>
        <p>IoT masivo e inmersivo: gemelos digitales, comunicación holográfica y ciudades que se gestionan solas.</p>`,
      images: [
        { src: "6g.png", caption: "Concepto de ciudad inteligente conectada por 6G" }
      ]
    }
  };
 
  function openModal(key){
    const g = generations[key];
    document.getElementById('modalBadge').textContent = g.badge;
    document.getElementById('modalBadge').style.color = g.color;
    document.getElementById('modalYear').textContent = g.year;
    document.getElementById('modalBody').innerHTML = g.body;
    document.getElementById('modalImgGrid').innerHTML = g.images.map(img =>
      img.src
        ? `<div class="img-slot img-filled"><img src="${img.src}" alt="${img.caption}"></div>`
        : `<div class="img-slot">${imgIcon}<span>Espacio para imagen:<br>${img.caption}</span></div>`
    ).join('');
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });
