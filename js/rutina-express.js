// State
const state = {
  energia: null,
  espacio: null,
  tiempo: null
};

// Database de rutinas
const routines = {
  'alta-departamento-5': {
    title: 'Explosión Mental Express',
    steps: [
      { duration: 2, title: 'Juego de Olfato Rápido', description: 'Esconde 3 premios en lugares visibles. Deja que los encuentre rápidamente para activar su cerebro.' },
      { duration: 2, title: 'Comandos de Alta Energía', description: 'Secuencia: Sentado → Quieto → Giro → Pata. Repite 3 veces con entusiasmo.' },
      { duration: 1, title: 'Respiración y Calma', description: 'Termina con caricias lentas y respiración tranquila para bajar revoluciones.' }
    ],
    tip: '💡 Repite esta rutina 2-3 veces al día para quemar energía mental sin salir de casa.',
    products: ['juguete-mental', 'alfombra-olfativa', 'dispensador']
},
'alta-departamento-10': {
    title: 'Circuito Indoor Intenso',
    steps: [
      { duration: 2, title: 'Calentamiento con Juego de Toalla', description: 'Enrolla una toalla con premios dentro. Que tu perro la desenrolle trabajando con las patas.' },
      { duration: 4, title: 'Búsqueda de Premios en 3 Zonas', description: 'Esconde premios en sala, cocina y habitación.' },
      { duration: 3, title: 'Mini Circuito', description: 'Toca la puerta → pasa bajo la mesa → sube al sillón. Repite 2 veces.' },
      { duration: 1, title: 'Enfriamiento', description: 'Practica "quieto" 60 segundos.' }
    ],
    tip: '🎯 Reduce ansiedad por separación hasta 40%.',
    products: ['juguete-mental', 'alfombra-olfativa', 'dispensador']
},
'alta-departamento-20': {
    title: 'Sesión Completa Indoor',
    steps: [
      { duration: 3, title: 'Calentamiento Mental', description: 'Juego de "¿Dónde está?" con 5 escondites progresivamente difíciles.' },
      { duration: 6, title: 'Circuito de Obstáculos Casero', description: 'Crea recorrido con sillas, cajas, cojines. 3 repeticiones.' },
      { duration: 5, title: 'Tira y Afloja Controlado', description: 'Alterna entre tirar y soltar con comando.' },
      { duration: 4, title: 'Comandos Avanzados', description: 'Practica: giro, reversa, muerto, busca objeto.' },
      { duration: 2, title: 'Masaje Final', description: 'Masaje suave en pecho, cuello y orejas.' }
    ],
    tip: '🏆 Equivale a 45 minutos de paseo.',
    products: ['juguete-mental', 'alfombra-olfativa', 'cuerda-tira']
},

'alta-patio-5': {
    title: 'Sprint y Recuperación',
    steps: [
      { duration: 3, title: 'Carreras Cortas', description: '3 sprints de punta a punta.' },
      { duration: 2, title: 'Búsqueda Rápida', description: 'Lanza juguete 5 veces.' }
    ],
    tip: '⚡ Ideal para quemar energía explosiva.',
    products: ['pelota-resistente', 'frisbee']
},
'alta-patio-10': {
    title: 'Circuito al Aire Libre',
    steps: [
      { duration: 2, title: 'Calentamiento', description: 'Sentado, quieto, ven.' },
      { duration: 5, title: 'Fetch Intensivo', description: 'Lanza pelota 15 veces.' },
      { duration: 2, title: 'Saltos', description: 'Saltos controlados sobre obstáculos.' },
      { duration: 1, title: 'Respiración', description: 'Agua y calma.' }
    ],
    tip: '🌤️ Evita horas de calor.',
    products: ['frisbee', 'pelota-resistente', 'obstaculos']
},
'alta-patio-20': {
    title: 'Sesión Deportiva Completa',
    steps: [
      { duration: 3, title: 'Calentamiento Progresivo', description: 'Camina → trota → corre.' },
      { duration: 7, title: 'Agility', description: 'Slalom, saltos, túnel improvisado.' },
      { duration: 5, title: 'Fetch Variado', description: 'Largo, corto, alto, bajo.' },
      { duration: 3, title: 'Escondite', description: 'Que te encuentre.' },
      { duration: 2, title: 'Enfriamiento', description: 'Estiramientos suaves.' }
    ],
    tip: '💪 Equivalente a 1 hora de paseo.',
    products: ['set-agilidad', 'frisbee', 'pelota-resistente']
},

'alta-parque-5': {
    title: 'Sprint Explosivo',
    steps: [
      { duration: 3, title: 'Carrera Libre', description: 'Corre en línea recta.' },
      { duration: 2, title: 'Recuperación Activa', description: 'Camina lento.' }
    ],
    tip: '🏃 Excelente descarga de energía.',
    products: ['correa-larga', 'pelota-resistente']
},
'alta-parque-10': {
    title: 'Aventura Acelerada',
    steps: [
      { duration: 2, title: 'Trote', description: 'Ritmo moderado.' },
      { duration: 5, title: 'Fetch con Intervalos', description: 'Largo y corto.' },
      { duration: 2, title: 'Exploración', description: 'Zona nueva del parque.' },
      { duration: 1, title: 'Calma', description: 'Respirar y caricias.' }
    ],
    tip: '🎾 Útil pelota con cuerda.',
    products: ['pelota-cuerda', 'frisbee', 'correa-larga']
},
'alta-parque-20': {
    title: 'Sesión Deportiva Completa',
    steps: [
      { duration: 4, title: 'Calentamiento Dinámico', description: 'Camina 2 min, trota 2 min.' },
      { duration: 8, title: 'Fetch Intensivo', description: '20 lanzamientos.' },
      { duration: 4, title: 'Socialización', description: 'Juego libre seguro.' },
      { duration: 3, title: 'Circuito Natural', description: 'Bancos, troncos, escaleras.' },
      { duration: 1, title: 'Enfriamiento', description: 'Agua y respiración.' }
    ],
    tip: '🌟 Ideal para perros atletas.',
    products: ['frisbee', 'pelota-resistente', 'botella-agua-portatil']
},
'media-departamento-5': {
    title: 'Estimulación Suave',
    steps: [
      { duration: 3, title: 'Olfato Básico', description: 'Esconde 3 premios en lugares fáciles.' },
      { duration: 2, title: 'Comandos Simples', description: 'Sentado, pata, quieto.' }
    ],
    tip: '✨ Perfecto para días ocupados.',
    products: ['juguete-mental', 'dispensador']
},
'media-departamento-10': {
    title: 'Equilibrio Mental',
    steps: [
      { duration: 3, title: 'Alfombra Olfativa', description: 'Esparce premios en alfombra.' },
      { duration: 4, title: '¿Dónde está?', description: '4 escondites crecientes.' },
      { duration: 2, title: 'Masticación Productiva', description: 'Juguete masticable.' },
      { duration: 1, title: 'Caricias', description: 'Contacto suave.' }
    ],
    tip: '🧘 Ideal para perros balanceados.',
    products: ['alfombra-olfativa', 'kong-rellenable', 'juguete-masticable']
},
'media-departamento-20': {
    title: 'Sesión Completa Balanceada',
    steps: [
      { duration: 5, title: 'Olfato', description: '5 zonas distintas.' },
      { duration: 6, title: 'Comandos y Tricks', description: 'Giro, reversa, busca, alto.' },
      { duration: 5, title: 'Tira y Afloja Moderado', description: 'Juguete suave.' },
      { duration: 3, title: 'Enriquecimiento Ambiental', description: 'Objetos nuevos.' },
      { duration: 1, title: 'Relajación', description: 'Masaje suave.' }
    ],
    tip: '⚖️ Equilibrio perfecto entre actividad y calma.',
    products: ['alfombra-olfativa', 'kong-rellenable', 'juguete-suave']
},

'media-patio-5': {
    title: 'Paseo Corto Activo',
    steps: [
      { duration: 3, title: 'Exploración Guiada', description: 'Olfatear 3 puntos.' },
      { duration: 2, title: 'Fetch Moderado', description: '5 lanzamientos.' }
    ],
    tip: '🍃 Ideal para media mañana.',
    products: ['pelota-suave']
},
'media-patio-10': {
    title: 'Exploración y Juego',
    steps: [
      { duration: 3, title: 'Caminata de Reconocimiento', description: 'Ritmo moderado.' },
      { duration: 4, title: 'Fetch con Pausas', description: 'Entre lanzamientos practica comandos.' },
      { duration: 2, title: 'Búsqueda de Objetos', description: '3 juguetes escondidos.' },
      { duration: 1, title: 'Descanso', description: 'Agua y calma.' }
    ],
    tip: '🌿 Estimulación mental + física.',
    products: ['pelota-suave', 'juguetes-varios']
},
'media-patio-20': {
    title: 'Rutina Completa Moderada',
    steps: [
      { duration: 5, title: 'Calentamiento Exploratorio', description: 'Explorar todo el patio.' },
      { duration: 6, title: 'Fetch + Comandos', description: '15 lanzamientos.' },
      { duration: 4, title: 'Escondite Moderado', description: 'Juguetes y premios.' },
      { duration: 3, title: 'Relajación', description: 'Caricias suaves.' },
      { duration: 2, title: 'Snack', description: 'Premio final.' }
    ],
    tip: '🎯 Ideal diario.',
    products: ['pelota-suave', 'dispensador', 'juguetes-varios']
},

'media-parque-5': {
    title: 'Paseo Express',
    steps: [
      { duration: 4, title: 'Caminata Rápida', description: 'Practica "junto".' },
      { duration: 1, title: 'Olfateo Libre', description: 'Zona segura.' }
    ],
    tip: '🚶 Ideal para breaks del trabajo.',
    products: ['correa-comoda']
},
'media-parque-10': {
    title: 'Paseo Balanceado',
    steps: [
      { duration: 4, title: 'Caminata Moderada', description: 'Constante.' },
      { duration: 3, title: 'Fetch Controlado', description: '6 lanzamientos.' },
      { duration: 2, title: 'Socialización Suave', description: 'Saludo breve.' },
      { duration: 1, title: 'Respiración', description: 'Calma final.' }
    ],
    tip: '🌤️ Ideal para energía media.',
    products: ['correa-comoda', 'pelota-suave']
},
'media-parque-20': {
    title: 'Aventura Moderada',
    steps: [
      { duration: 6, title: 'Caminata Exploratoria', description: 'Olfato libre.' },
      { duration: 6, title: 'Fetch Moderado', description: 'Comandos intercalados.' },
      { duration: 4, title: 'Socialización', description: 'Observación tranquila.' },
      { duration: 3, title: 'Circuito Natural', description: 'Escaleras, troncos, senderos.' },
      { duration: 1, title: 'Cierre Calmo', description: 'Respiración y agua.' }
    ],
    tip: '🌳 Perfecto para adultos.',
    products: ['correa-comoda', 'pelota-suave', 'botella-agua-portatil']
},
'baja-departamento-5': {
    title: 'Estimulación Mínima',
    steps: [
      { duration: 3, title: 'Olfato Pasivo', description: 'Esparce premios en toalla.' },
      { duration: 2, title: 'Caricias', description: 'Masaje suave en orejas y cuello.' }
    ],
    tip: '😴 Ideal para seniors.',
    products: ['alfombra-olfativa', 'snacks-suaves']
},
'baja-departamento-10': {
    title: 'Relax Enriquecido',
    steps: [
      { duration: 4, title: 'Alfombra Olfativa Extendida', description: '10 premios.' },
      { duration: 3, title: 'Kong Congelado', description: 'Relleno de yogurt o paté.' },
      { duration: 2, title: 'Masaje Relajante', description: 'Cuello, pecho, orejas.' },
      { duration: 1, title: 'Música Tranquila', description: 'Sonidos suaves.' }
    ],
    tip: '🧘 Ideal para relajación profunda.',
    products: ['alfombra-olfativa', 'kong-rellenable', 'snacks-suaves']
},
'baja-departamento-20': {
    title: 'Sesión de Bienestar',
    steps: [
      { duration: 6, title: 'Olfato', description: '5 escondites fáciles.' },
      { duration: 6, title: 'Masticación Prolongada', description: 'Kong o dental.' },
      { duration: 5, title: 'Masaje Completo', description: 'Orejas, cuello, patas, espalda.' },
      { duration: 2, title: 'Comandos Suaves', description: 'Sentado, pata, quieto.' },
      { duration: 1, title: 'Cierre', description: 'Respiración guiada.' }
    ],
    tip: '💤 Para recuperación o descanso total.',
    products: ['alfombra-olfativa', 'kong-rellenable', 'cama-ortopedica']
},

'baja-patio-5': {
    title: 'Exploración Tranquila',
    steps: [
      { duration: 4, title: 'Caminata Muy Lenta', description: 'Olfato libre.' },
      { duration: 1, title: 'Solcito', description: 'Descanso al sol.' }
    ],
    tip: '☀️ Vitamina D natural.',
    products: ['cama-exterior']
},
'baja-patio-10': {
    title: 'Paseo Contemplativo',
    steps: [
      { duration: 5, title: 'Caminata Pausada', description: 'Olfato frecuente.' },
      { duration: 3, title: 'Observación', description: 'Escuchar entorno.' },
      { duration: 2, title: 'Snack', description: 'Premio suave y agua.' }
    ],
    tip: '🌺 Estimula sin cansar.',
    products: ['snacks-suaves', 'cama-exterior']
},
'baja-patio-20': {
    title: 'Conexión con Naturaleza',
    steps: [
      { duration: 8, title: 'Exploración Profunda', description: 'Plantas, texturas, tierra.' },
      { duration: 5, title: 'Descanso Natural', description: 'Bajo sombra o banco.' },
      { duration: 4, title: 'Enriquecimiento Ambiental', description: 'Objetos nuevos seguros.' },
      { duration: 2, title: 'Masaje Exterior', description: 'Suave y lento.' },
      { duration: 1, title: 'Cierre', description: 'Agua y respiración.' }
    ],
    tip: '🍃 Perfecta para recuperación.',
    products: ['cama-exterior', 'snacks-suaves']
},

'baja-parque-5': {
    title: 'Paseo Terapéutico Corto',
    steps: [
      { duration: 4, title: 'Caminata Ultra Lenta', description: 'Olfato cada metro.' },
      { duration: 1, title: 'Descanso en Banco', description: 'Observación tranquila.' }
    ],
    tip: '🩺 Ideal en recuperación.',
    products: ['correa-suave', 'arnés-acolchado']
},
'baja-parque-10': {
    title: 'Paseo de Bienestar',
    steps: [
      { duration: 5, title: 'Caminata Contemplativa', description: 'Sin prisa.' },
      { duration: 3, title: 'Césped', description: 'Caminar sobre pasto.' },
      { duration: 2, title: 'Descanso', description: 'Agua y caricias.' }
    ],
    tip: '🌿 Terapéutico para articulaciones.',
    products: ['arnés-acolchado', 'botella-agua-portatil']
},
'baja-parque-20': {
    title: 'Sesión de Recuperación',
    steps: [
      { duration: 8, title: 'Caminata Lenta', description: 'Olfato libre frecuente.' },
      { duration: 5, title: 'Descanso Natural', description: 'Sombra o banco.' },
      { duration: 4, title: 'Olfato Pasivo', description: 'Plantas y árboles.' },
      { duration: 2, title: 'Contacto Social Suave', description: 'Saludo tranquilo.' },
      { duration: 1, title: 'Cierre', description: 'Agua y calma.' }
    ],
    tip: '🏥 Especial para post-operatorio.',
    products: ['arnés-acolchado', 'cama-portatil', 'botella-agua-portatil']
}

};

// Products database
const products = {
  'juguete-mental': { descripcion: 'Estimula la mente de tu perro mientras busca snacks o croquetas escondidas. Reduce aburrimiento, ansiedad y comportamientos destructivos al mantenerlo enfocado y activo. Ideal para sesiones cortas de enriquecimiento y para perros de cualquier edad.', 
      name: 'Juguete mental', link: 'https://mercadolibre.com/sec/1JUts75' },
  'alfombra-olfativa': { descripcion: 'Estimula el olfato natural de tu perro y lo mantiene entretenido mientras busca premios entre las telas. Ayuda a reducir ansiedad, evitar el aburrimiento y fomentar conductas positivas mediante enriquecimiento mental diario.',  
      name: 'Alfombra Olfativa', link: 'https://mercadolibre.com/sec/1PCXak2' },
  'dispensador': { descripcion: 'Libera pequeñas porciones de croquetas mientras tu perro juega, manteniéndolo activo y mentalmente estimulado. Ayuda a reducir ansiedad, prevenir el aburrimiento y prolongar el tiempo de alimentación de forma divertida y segura.',  
      name: 'Dispensador de Snacks', link: 'https://mercadolibre.com/sec/2V7m7E3' },
  'kong-rellenable': { descripcion: 'Libera pequeñas porciones de croquetas mientras tu perro juega, manteniéndolo activo y mentalmente estimulado. Ayuda a reducir ansiedad, prevenir el aburrimiento y prolongar el tiempo de alimentación de forma divertida y segura.',  
    name: 'Kong Rellenable', link: 'https://mercadolibre.com/sec/2V7m7E3' },
  'pelota-resistente': { descripcion: 'Resiste mordidas fuertes y ofrece horas de juego activo. Ideal para lanzar, perseguir y morder sin que se rompa fácilmente. Ayuda a liberar energía, reducir estrés y mantener a tu perro física y mentalmente estimulado.',  
    name: 'Pelota Resistente', link: 'https://mercadolibre.com/sec/2GKQZvS' },
  'frisbee': { descripcion: 'Disco flexible y seguro para juegos de lanzar y traer. Su diseño liviano permite vuelos largos, ayudando a tu perro a ejercitarse mientras se divierte. Ideal para quemar energía, mejorar coordinación y fortalecer el vínculo durante el juego.',  
    name: 'Frisbee para Perros', link: 'https://mercadolibre.com/sec/1mevvvS' },
};


// Event listeners
document.querySelectorAll('.option-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const q = this.dataset.question;
    const v = this.dataset.value;

    document.querySelectorAll(`[data-question="${q}"]`).forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');

    state[q] = v;
    checkComplete();
  });
});

document.getElementById('generateBtn').addEventListener('click', generateRoutine);

function checkComplete() {
  const ready = state.energia && state.espacio && state.tiempo;
  document.getElementById('generateBtn').disabled = !ready;
}

function generateRoutine() {
  const key = `${state.energia}-${state.espacio}-${state.tiempo}`;
  const routine = routines[key];

  if (!routine) {
    alert("Error generando rutina. Intenta con otra combinación.");
    return;
  }

  // Títulos
  document.getElementById('resultTitle').textContent = routine.title;
  document.getElementById('resultSubtitle').textContent =
    `${state.tiempo} minutos • Energía ${capitalize(state.energia)} • ${capitalize(state.espacio)}`;

  // Pasos
  const stepsBox = document.getElementById('routineSteps');
  stepsBox.innerHTML = '';
  routine.steps.forEach((step, i) => {
    stepsBox.innerHTML += `
      <div class="step">
        <div class="step-header">
          <div class="step-number">${i + 1}</div>
          <div class="step-duration">${step.duration} min</div>
          <div class="step-title">${step.title}</div>
        </div>
        <div class="step-description">${step.description}</div>
      </div>
    `;
  });

  // Tip
  document.getElementById('tipBox').innerHTML = `<strong>💡 Tip Profesional:</strong> ${routine.tip}`;

  // Products
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = '';
    productGrid.innerHTML += `
      <div class="product-card">
        <img src="/images/productos/juguete_mental.webp" alt="Comedero lento antiderrames" class="product-img">
        <div class="product-name">Juguete Treats Bala Estimulación Mental Al Sacar Premios</div>
        <div>Estimula la mente de tu perro mientras busca snacks o croquetas escondidas. Reduce aburrimiento, ansiedad y comportamientos destructivos al mantenerlo enfocado y activo. Ideal para sesiones cortas de enriquecimiento y para perros de cualquier edad.</div>
        </br>
        <a class="product-link" href="https://mercadolibre.com/sec/1JUts75" target="_blank" rel="nofollow noopener">Ver precio en Mercado Libre</a>
      </div>
      <div class="product-card">
      <img src="/images/productos/juguete_kong.webp" alt="Comedero lento antiderrames" class="product-img">
        <div class="product-name">Kong Tires Juguete Llanta Rellenable</div>
        <div>Libera pequeñas porciones de croquetas mientras tu perro juega, manteniéndolo activo y mentalmente estimulado. Ayuda a reducir ansiedad, prevenir el aburrimiento y prolongar el tiempo de alimentación de forma divertida y segura.</div>
        </br>
        <a class="product-link" href="https://mercadolibre.com/sec/2V7m7E3" target="_blank" rel="nofollow noopener">Ver precio en Mercado Libre</a>
      </div>
      <div class="product-card">
      <img src="/images/productos/frisbee.webp" alt="Comedero lento antiderrames" class="product-img">
        <div class="product-name">Frisbee De Hule Flexible Para Mascotas</div>
        <div>Disco flexible y seguro para juegos de lanzar y traer. Su diseño liviano permite vuelos largos, ayudando a tu perro a ejercitarse mientras se divierte. Ideal para quemar energía, mejorar coordinación y fortalecer el vínculo durante el juego.</div>
        </br>
        <a class="product-link" href="https://mercadolibre.com/sec/1mevvvS" target="_blank" rel="nofollow noopener">Ver precio en Mercado Libre</a>
      </div>`;

  // Mostrar resultado
  document.getElementById('questionsSection').style.display = "none";
  document.getElementById('resultSection').classList.add("show");
  document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
}

function resetTool() {
  state.energia = null;
  state.espacio = null;
  state.tiempo = null;

  document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));

  document.getElementById('questionsSection').style.display = "block";
  document.getElementById('resultSection').classList.remove("show");
  document.getElementById('generateBtn').disabled = true;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
