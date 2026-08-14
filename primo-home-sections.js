/* PRIMO EUROPA — primo-home-sections.js
   Transforma #primo-impact + #primo-value en #primo-trust-route
   y reescribe el contenido de #primo-guides como "Plan de supervivencia".
   Solo actúa en Home ("/"). No toca hero, main-interface, país, fases,
   testimonios, lead magnet, footer ni primo-comparador.js.
   Idempotente vía data-primo-home-sections="v1" en <body>.
*/
(function () {
  'use strict';

  var MARK = 'v1';

  if (document.body && document.body.getAttribute('data-primo-home-sections') === MARK) return;

  var path = window.location.pathname;
  var isHome = (path === '/' || path === '');
  if (!isHome) return;

  var TRUST_ITEMS = [
    { icon: 'doc', title: 'Sin papeleo imposible', text: 'Alternativas flexibles que no te exigen papeleo interminable.' },
    { icon: 'chat', title: 'Atención en español', text: 'Plataformas y servicios con soporte en español para tu tranquilidad.' },
    { icon: 'shield', title: 'Decisiones sin sobrecostes', text: 'Opciones verificadas para evitar comisiones ocultas y sobrecostes.' }
  ];

  var GUIDE_STEPS = {
    espana: [
      { tag: 'HAZLO PRIMERO', title: 'Cómo conseguir el NIE y TIE', text: 'El trámite que bloquea todo lo demás: banco, móvil, alquiler.', url: '/como-conseguir-nie-espana/' },
      { tag: 'PRIMERA SEMANA', title: 'El Empadronamiento', text: 'El papel que abre la sanidad pública y el colegio de tus hijos.', url: '/empadronamiento-espana/' },
      { tag: 'ANTES DE TRABAJAR', title: 'Alta en la Seguridad Social', text: 'Lo que necesitas antes de firmar tu primer contrato.', url: '/seguridad-social-espana/' }
    ],
    alemania: [
      { tag: 'HAZLO PRIMERO', title: 'Cómo hacer el Anmeldung', text: 'Sin esto no existes en Alemania. Guía paso a paso.', url: '/como-conseguir-anmeldung-alemania/' },
      { tag: 'PARA ALQUILAR', title: 'Sobrevivir sin SCHUFA', text: 'Sin historial crediticio, alquilar parece imposible.', url: '/schufa-alemania/', gold: true },
      { tag: 'ANTES DE COBRAR', title: 'Steuer-ID y tus impuestos', text: 'El número que te pedirán en cada trámite alemán.', url: '/steuer-id-alemania/' }
    ]
  };

  var ICONS = {
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h9l3 3v15H6z"/><path d="M9 12l2 2 4-4"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4A8.7 8.7 0 0 1 6 18l-3 1 1-3a8.4 8.4 0 0 1-1-4A8.4 8.4 0 0 1 12 3.5a8.4 8.4 0 0 1 9 8z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v6c0 5-3 8.5-7 9-4-.5-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>'
  };

  function buildTrustRoute() {
    var el = document.createElement('div');
    el.id = 'primo-trust-route';

    var cardsHtml = TRUST_ITEMS.map(function (item, i) {
      var num = '0' + (i + 1);
      return (
        '<div class="ptr-card">' +
          '<span class="ptr-num">' + num + '</span>' +
          '<div class="ptr-icon">' + ICONS[item.icon] + '</div>' +
          '<h3 class="ptr-title">' + item.title + '</h3>' +
          '<p class="ptr-text">' + item.text + '</p>' +
        '</div>'
      );
    }).join('');

    el.innerHTML =
      '<div class="ptr-inner">' +
        '<span class="ptr-eyebrow">Por qué esta ruta funciona</span>' +
        '<div class="ptr-pill">' +
          '<span class="ptr-avatars"><span></span><span></span><span></span></span>' +
          '<span class="ptr-count">500+</span>' +
          '<span class="ptr-pilltext">hispanos que ya resolvieron su llegada</span>' +
        '</div>' +
        '<div class="ptr-grid">' + cardsHtml + '</div>' +
      '</div>';

    return el;
  }

  function buildGuideStep(step, index) {
    var num = '0' + (index + 1);
    var tagClass = 'psv-tag' + (step.gold ? ' psv-tag-gold' : '');
    return (
      '<div class="psv-step">' +
        '<span class="psv-bgnum">' + num + '</span>' +
        '<span class="' + tagClass + '">' + step.tag + '</span>' +
        '<h5 class="psv-title">' + step.title + '</h5>' +
        '<p class="psv-text">' + step.text + '</p>' +
        '<a class="psv-cta" href="' + step.url + '">Ver el paso a paso →</a>' +
      '</div>'
    );
  }

  function buildSurvivalPlanHTML() {
    var esHtml = GUIDE_STEPS.espana.map(buildGuideStep).join('');
    var deHtml = GUIDE_STEPS.alemania.map(buildGuideStep).join('');

    return (
      '<div class="psv-inner">' +
        '<p class="psv-intro">Elige tu destino y resuelve lo que bloquea tu primer mes</p>' +
        '<div class="psv-block psv-es">' +
          '<h3 class="psv-blocktitle">🇪🇸 España · 3 trámites que desbloquean tu llegada</h3>' +
          '<div class="psv-grid">' + esHtml + '</div>' +
        '</div>' +
        '<div class="psv-block psv-de">' +
          '<h3 class="psv-blocktitle">🇩🇪 Alemania · 3 trámites que desbloquean tu llegada</h3>' +
          '<div class="psv-grid">' + deHtml + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function run() {
    if (document.getElementById('primo-trust-route')) return true;

    var impact = document.getElementById('primo-impact');
    var value = document.getElementById('primo-value');
    var guides = document.getElementById('primo-guides');

    if (!impact || !value || !guides) return false;

    var trustRoute = buildTrustRoute();
    impact.parentNode.insertBefore(trustRoute, impact);
    impact.parentNode.removeChild(impact);
    value.parentNode.removeChild(value);

    guides.innerHTML = buildSurvivalPlanHTML();
    guides.setAttribute('data-primo-rebuilt', MARK);

    if (document.body) document.body.setAttribute('data-primo-home-sections', MARK);
    return true;
  }

  var attempts = 0;
  var MAX_ATTEMPTS = 40; /* ~40 x 150ms = 6s de margen para el Script Global */
  var timer = setInterval(function () {
    attempts++;
    if (run() || attempts >= MAX_ATTEMPTS) {
      clearInterval(timer);
    }
  }, 150);
})();