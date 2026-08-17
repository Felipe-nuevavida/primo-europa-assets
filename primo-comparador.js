/*
 * Primo Europa — Módulo central del comparador v31
 * Microdecisiones + UX móvil + llegada directa al comparador
 * Fuente: datos verificados del comparador y edición de conversión 2026-08-13.
 */
(function () {
  'use strict';
  if (window.__PRIMO_COMPARADOR_EXTERNAL_LOADED__) return;
  window.__PRIMO_COMPARADOR_EXTERNAL_LOADED__ = true;

  const DB = [{"category":"Bancos","country":"ES","company":"bunq","url":"https://www.bunq.com/discover/bunq-in-spain","fit":"Buscas obtener un IBAN español rápidamente desde el móvil sin aportar un NIE o TIE físico","needed":"Aportar un documento de identidad válido y una prueba de domicilio aceptada en el EEE","watch":"Las suscripciones implican cuotas mensuales fijas, las retiradas de efectivo tienen comisiones y los depósitos están garantizados por Países Bajos"},{"category":"Bancos","country":"ES","company":"Revolut","url":"https://www.revolut.com/es-ES/bank-account","fit":"Buscas una cuenta digital en España con transferencias SEPA gratuitas sin exigir historial local previo","needed":"Residir en el espacio económico europeo, presentar documento de identidad vigente y declarar tu residencia fiscal","watch":"El envío físico de la tarjeta cuesta 6,99 euros y superar mil euros mensuales en cambio de divisa conlleva comisiones"},{"category":"Bancos","country":"ES","company":"Wise","url":"https://wise.com/es/","fit":"Buscas realizar pagos internacionales frecuentes y mantener saldo en distintas divisas desde España","needed":"Disponer de un documento de identidad válido y aportar una prueba de domicilio aceptada en España","watch":"No funciona como un banco tradicional y aplica comisiones por retiradas de efectivo que superen los 250 euros mensuales"},{"category":"Vivienda","country":"ES","company":"Spotahome","url":"https://www.spotahome.com/es/","fit":"necesitas reservar un alojamiento online desde el extranjero antes de llegar a España","needed":"Cumplir con la documentación de identidad y los requisitos particulares exigidos por cada propietario","watch":"La tarifa de reserva no es reembolsable y la fianza se gestiona directamente con el propietario fuera de la plataforma"},{"category":"Vivienda","country":"ES","company":"Badi","url":"https://badi.com/es/","fit":"Buscas habitaciones compartidas y prefieres contactar directamente con anunciantes antes de reservar","needed":"Ser mayor de edad y verificar identidad o condiciones específicas con cada anunciante","watch":"En el marketplace ordinario la plataforma no interviene en el contrato ni gestiona pagos, debiendo negociar directamente con el propietario"},{"category":"Vivienda","country":"ES","company":"Uniplaces","url":"https://www.uniplaces.com/es/","fit":"Buscas alquilar vivienda temporal en España desde el extranjero sin aportar nóminas ni avales bancarios locales","needed":"Ser mayor de edad, tener método de pago válido y aceptar las verificaciones del arrendador","watch":"La tarifa de servicio no es reembolsable en ningún caso y el depósito depende exclusivamente del propietario"},{"category":"Telefonía","country":"ES","company":"Digi","url":"https://www.digimobil.es/","fit":"buscas una línea móvil flexible sin permanencia y admites identificación con pasaporte o NIE","needed":"ser mayor de edad y acreditar residencia legal en España para contratar pospago","watch":"al roaming europeo, ya que exige residencia habitual en España y pueden aplicarse recargos por uso abusivo prolongado"},{"category":"Telefonía","country":"ES","company":"Simyo","url":"https://www.simyo.es/","fit":"buscas una línea móvil flexible sin permanencia ni cuenta bancaria mediante prepago","needed":"ser mayor de edad y disponer de una tarjeta bancaria emitida en España","watch":"La tarjeta bancaria debe estar emitida en España y la SIM física conlleva gastos de envío de siete euros sin envíos internacionales"},{"category":"Telefonía","country":"ES","company":"Lycamobile","url":"https://www.llamaya.com/nada-cambia","fit":"Ya usabas Lycamobile y quieres mantener número, tarifa y saldo tras el cambio a Llamaya","needed":"Para un alta nueva, confirma los requisitos de identificación directamente con Llamaya antes de contratar","watch":"Lycamobile ya no opera como marca nueva en España; revisa las condiciones actuales con Llamaya"},{"category":"Salud","country":"ES","company":"Sanitas","url":"https://www.sanitas.es/seguros/seguro-medico-extranjeros","fit":"necesitas un seguro médico privado en España enfocado en visados y extranjería","needed":"Completar el cuestionario de salud previo y cumplir el criterio de nacionalidad exigido","watch":"La prima sube por edad o zona y la renovación anual tácita exige notificar la baja por escrito con antelación"},{"category":"Salud","country":"ES","company":"SafetyWing","url":"https://safetywing.com/nomad-insurance/","fit":"Viajeros o nómadas digitales que necesitan cobertura médica flexible mientras residen y se desplazan fuera de España","needed":"Ser mayor de 14 días y menor de 70 años y encontrarse fuera del país de origen","watch":"Se renueva automáticamente cada 28 días, excluye enfermedades preexistentes y no cubre tratamientos médicos en tu propio país de origen"},{"category":"Salud","country":"ES","company":"Feather","url":"https://feather-insurance.com/es-es/health-insurance/expat","fit":"buscas un seguro médico temporal en España sin exigir empadronamiento ni empleo previo","needed":"Llevar menos de cinco años en España y tener menos de setenta y cinco años","watch":"Cubre máximo cinco años, excluye preexistencias y exige cancelar antes del primer día del mes para evitar cargos"},{"category":"Impuestos","country":"ES","company":"TaxDown","url":"https://taxdown.es/","fit":"Ideal para presentar tu declaración en España con soporte especializado en fiscalidad internacional y expatriados","needed":"acceso a la Agencia Tributaria mediante Cl@ve PIN o datos fiscales válidos","watch":"La suscripción se renueva automáticamente cada año y el coste final puede aumentar según la complejidad fiscal del caso"},{"category":"Impuestos","country":"ES","company":"TaxScouts","url":"https://taxfix.com/es-es/","fit":"necesitas gestionar tus obligaciones fiscales como autónomo en España mediante una plataforma online especializada","needed":"disponer de NIF o NIE, domicilio en España y tarjeta bancaria para iniciar el servicio","watch":"el plan anual se cobra íntegramente por adelantado sin derecho a reembolso proporcional si cancelas antes de tiempo"},{"category":"Impuestos","country":"ES","company":"Declarando","url":"https://declarando.es/","fit":"Eres autónomo en España y prefieres que un asesor centralice altas, impuestos y soporte","needed":"Completar el formulario fiscal que envía el asesor para tramitar tu alta online","watch":"El plan es anual y la web no detalla con claridad cancelación, renovación ni documentación exigida"},{"category":"Bancos","country":"DE","company":"N26","url":"https://n26.com/de-de/","fit":"buscas abrir una cuenta bancaria en Alemania desde el móvil con asistencia en español","needed":"ser mayor de edad, disponer de un smartphone compatible y superar la validación de identidad","watch":"Si no superas la solvencia inicial puedes recibir la cuenta Flex con cuota mensual y comisiones en retiradas"},{"category":"Bancos","country":"DE","company":"bunq","url":"https://www.bunq.com/discover/bunq-in-germany","fit":"Te mudas a Alemania y necesitas abrir una cuenta bancaria sin disponer todavía de certificado de empadronamiento","needed":"Disponer de un documento de identidad original válido y aportar el número fiscal en noventa días","watch":"El plan gratuito cobra dos euros con noventa céntimos por retirada de efectivo y exige aportar número fiscal en noventa días"},{"category":"Bancos","country":"DE","company":"Revolut","url":"https://www.revolut.com/de-DE/","fit":"buscas operar en euros y divisas al mudarte entre países del espacio económico europeo","needed":"Debes residir en el EEE y disponer de un documento de identidad válido junto con una selfie","watch":"Ten en cuenta los recargos por cambio de divisa, costes de envío de tarjeta y los bloqueos temporales por falta de justificante"},{"category":"Vivienda","country":"DE","company":"Spotahome","url":"https://www.spotahome.com/country/rentals-in-germany","fit":"Buscas alojamiento verificado online desde el extranjero antes de llegar a Alemania sin intermediarios físicos","needed":"Subir prueba verificable de identidad, residencia y solvencia para que el propietario apruebe la reserva","watch":"La tarifa de gestión no es reembolsable tras la confirmación y cancelar con menos de treinta días anula la devolución"},{"category":"Vivienda","country":"DE","company":"HousingAnywhere","url":"https://housinganywhere.com/","fit":"Buscas alojamiento temporal desde el extranjero con protección provisional en tu primer pago","needed":"Aportar datos verificados, dirección física y cumplir con las pruebas de ingresos del arrendador","watch":"Abonas una comisión obligatoria de hasta el cuarenta por ciento del primer mes que no se reembolsa tras cancelar"},{"category":"Vivienda","country":"DE","company":"Wunderflats","url":"https://wunderflats.com/en/","fit":"Buscas alojamiento temporal en Alemania desde el extranjero acreditando solvencia financiera sin aval de SCHUFA","needed":"Demostrar ingresos netos mensuales equivalentes al alquiler mediante nóminas o extractos bancarios recientes","watch":"La comisión de servicio de 299 euros se paga por adelantado al reservar y no es reembolsable si desistes"},{"category":"Telefonía","country":"DE","company":"SimOptions","url":"https://www.simoptions.com/esim-germany/","fit":"Buscas datos móviles inmediatos al llegar a Alemania sin trámites burocráticos ni contratos presenciales","needed":"Disponer de un teléfono móvil inteligente compatible con tecnología eSIM y desbloqueado","watch":"La validez comienza al activar la eSIM y no existen reembolsos si tu dispositivo resulta incompatible o te equivocas"},{"category":"Telefonía","country":"DE","company":"Lycamobile","url":"https://www.lycamobile.de/","fit":"Buscas una tarifa móvil prepago sin permanencia ni revisión de solvencia Schufa","needed":"Aportar un documento de identidad y un comprobante de domicilio para registrar la SIM","watch":"La línea se desactiva tras periodos prolongados sin actividad y el saldo de recargas puede caducar según la política vigente"},{"category":"Telefonía","country":"DE","company":"Lebara","url":"https://www.lebara.de/de/home.html","fit":"buscas una línea móvil prepago en Alemania sin exigir Schufa ni comprobante de domicilio","needed":"superar la identificación obligatoria mediante documento de identidad válido y verificación facial digital","watch":"con las renovaciones automáticas de saldo, los costes por devolución bancaria y el preaviso obligatorio para cancelar contratos"},{"category":"Salud","country":"DE","company":"Feather","url":"https://feather-insurance.com/health-insurance/expat","fit":"buscas un seguro médico temporal en Alemania sin trámites previos ni documentos complejos","needed":"No estar obligado a GKV ni PKV y facilitar datos personales y de pago digitales","watch":"Dura un máximo de cinco años, no sirve para renovar visados e incluye un copago de veinticinco euros por evento médico"},{"category":"Salud","country":"DE","company":"Genki","url":"https://genki.world/products/native","fit":"Te estás moviendo entre países y buscas cobertura mundial aunque aún no tengas residencia legal","needed":"Tener hasta 55 años al contratar y comprobar que la póliza sirve para tu situación migratoria","watch":"Exige compromiso mínimo de doce meses y no sustituye necesariamente el seguro médico obligatorio alemán"},{"category":"Salud","country":"DE","company":"Ottonova","url":"https://www.ottonova.de/","fit":"Buscas un seguro médico privado en Alemania con asistencia digital y contratación rápida para expatriados","needed":"Estar en el grupo elegible y superar la evaluación médica de riesgo y aceptación","watch":"Las primas varían por edad y salud con franquicias de hasta mil euros y límites de reembolso iniciales"},{"category":"Impuestos","country":"DE","company":"Taxfix","url":"https://taxfix.de/","fit":"resides en Alemania y necesitas preparar tu declaración de impuestos anual de forma guiada","needed":"haber tenido residencia en Alemania durante el año fiscal y no mantener doble vivienda simultánea","watch":"La tarifa se cobra al presentar la declaración aunque el resultado sea nulo y la suscripción anual no admite cancelación anticipada"},{"category":"Impuestos","country":"DE","company":"Sorted","url":"https://en.getsorted.de/","fit":"eres autónomo en Alemania y buscas gestionar tu contabilidad y declaraciones fiscales en inglés","needed":"ser autónomo en Alemania, ya que la plataforma no admite sociedades mercantiles","watch":"el plan de pago varía según ingresos o periodicidad, y los servicios de asesor fiscal adicional tienen costes separados y variables"},{"category":"Impuestos","country":"DE","company":"wundertax","url":"https://wundertax.de/en/","fit":"resides en Alemania, tributas allí y buscas presentar tu declaración sin certificado ELSTER propio","needed":"Tener residencia habitual y obligación de tributar en Alemania para poder procesar la declaración","watch":"No incluye asesoría fiscal personalizada, los paquetes múltiples caducan en cuatro años sin reembolso y la tarifa se cobra al presentar"},{"category":"Enviar Dinero","country":"Global","company":"Wise","url":"https://wise.com/","fit":"Buscas enviar dinero internacionalmente aplicando el tipo de cambio medio oficial sin comisiones de tipo ocultas","needed":"Disponer de un pasaporte o documento de identidad vigente para superar la verificación obligatoria","watch":"Las comisiones no son fijas y las operaciones elevadas pueden requerir justificantes sobre el origen del dinero"},{"category":"Enviar Dinero","country":"Global","company":"Remitly","url":"https://www.remitly.com/es/es/","fit":"Buscas enviar dinero internacionalmente desde España hacia múltiples destinos con soporte en español y tarjeta","needed":"Crear cuenta y superar la verificación de identidad obligatoria aportando la documentación solicitada","watch":"Las comisiones y los tipos de cambio varían según el método de pago y el destino seleccionado en cada operación"},{"category":"Enviar Dinero","country":"Global","company":"WorldRemit","url":"https://www.worldremit.com/es/","fit":"necesitas enviar dinero desde España o Alemania sin aportar cuenta bancaria local","needed":"superar la verificación legal aportando un documento oficial vigente con fotografía y datos idénticos","watch":"la cancelación no está garantizada tras el pago y los reembolsos pueden tardar hasta siete días laborables"},{"category":"Enviar Paquetes","country":"Global","company":"Eurosender","url":"https://www.eurosender.com/en/global-shipping","fit":"Quieres enviar cajas desde Europa sin abrir una cuenta ni depender de correos locales","needed":"Indicar direcciones, peso y medidas exactas; fuera de la UE, aportar documentación aduanera","watch":"Después de pagar no hay reembolso ordinario; errores de peso, medidas o aduanas generan recargos"},{"category":"Enviar Paquetes","country":"Global","company":"Packlink","url":"https://www.packlink.es/","fit":"Quieres comparar transportistas y enviar paquetes sin disponer todavía de una cuenta bancaria local","needed":"Tener el paquete embalado, pesado y medido; fuera de la UE, preparar documentación aduanera","watch":"Errores de peso o medidas pueden generar suplementos incluso después de la entrega del paquete"},{"category":"Enviar Paquetes","country":"Global","company":"Sendcloud","url":"https://www.sendcloud.com/es/","fit":"Centralizar la gestión de múltiples transportistas sin necesidad de negociar contratos individuales por cada proveedor","needed":"Disponer de correo electrónico, cuenta bancaria para domiciliación y método de pago autenticado","watch":"La prueba gratuita se renueva automáticamente, las etiquetas se cobran por separado y superar los límites incrementa el plan de pago"},{"category":"Homologación","country":"Global","company":"WES","url":"https://www.wes.org/","fit":"necesitas evaluar tus títulos académicos extranjeros para procesos migratorios o laborales internacionales","needed":"Aportar datos personales y documentos académicos verificados según el país de origen de tus estudios","watch":"No es una homologación oficial en España o Alemania, las tarifas excluyen envío internacional y los documentos no se devuelven"},{"category":"Homologación","country":"Global","company":"ENIC-NARIC","url":"https://www.enic-naric.net/","fit":"buscas orientación oficial para identificar la autoridad competente y homologar tus estudios académicos","needed":"contactar con el organismo competente del país de destino y aportar tu titulación académica completa","watch":"no existe un trámite ni tarifa única, y los plazos dependen de cada país y de la autoridad competente"},{"category":"Traducción Jurada","country":"Global","company":"Tomedes","url":"https://www.tomedes.com/translation-services/legal-translation/sworn","fit":"Buscas gestionar traducciones juradas oficiales online sin desplazamientos físicos para múltiples idiomas y países","needed":"Confirmar los requisitos específicos de aceptación del documento oficial ante la autoridad de destino","watch":"La validez depende de la autoridad receptora y cancelar una vez iniciado el trabajo conlleva costes parciales"},{"category":"Traducción Jurada","country":"Global","company":"Gengo","url":"https://gengo.com/certified-translation/","fit":"necesitas solicitar traducciones certificadas online sin acreditar residencia fiscal ni historial crediticio","needed":"registrar una cuenta activa y contactar con el equipo comercial para solicitar presupuesto","watch":"la certificación no garantiza validez ante autoridades concretas de España o Alemania y requiere un presupuesto comercial previo"},{"category":"Traducción Jurada","country":"Global","company":"Rapid Translate","url":"https://www.rapidtranslate.org/sworn-translation","fit":"requieres traducciones juradas en línea para trámites internacionales entre inglés, español y alemán","needed":"Aportar el documento a traducir y confirmar que el par de idiomas esté disponible","watch":"Los costes por página son elevados, no hay reembolso tras la entrega y la garantía solo cubre organismos estadounidenses específicos"},{"category":"CV (ATS)","country":"Global","company":"Resume.io","url":"https://resume.io/","fit":"buscas crear un currículum optimizado para sistemas ATS internacionales de forma rápida y sencilla","needed":"Registrarse con datos personales válidos y disponer de método de pago aceptado","watch":"La prueba de siete días se renueva de forma automática como suscripción periódica si no se cancela"},{"category":"CV (ATS)","country":"Global","company":"Novoresume","url":"https://novoresume.com/","fit":"buscas crear un currículum optimizado para sistemas ATS sin vinculación bancaria inicial","needed":"ser mayor de edad y registrarte con una cuenta de correo electrónico verificada","watch":"La cuenta gratuita limita el documento a una página y el plan de pago requiere cancelación manual por correo electrónico"},{"category":"CV (ATS)","country":"Global","company":"Zety","url":"https://zety.es/","fit":"Quieres crear un CV rápido desde cualquier país sin aportar documentación migratoria ni dirección local","needed":"Crear una cuenta con correo electrónico, navegador compatible y datos personales veraces","watch":"La descarga exige suscripción y los cargos recurrentes deben revisarse antes de confirmar el pago"},{"category":"Idiomas","country":"Global","company":"Lingoda","url":"https://www.lingoda.com/en/","fit":"necesitas estudiar idiomas online desde cualquier lugar sin trámites migratorios ni domicilio local","needed":"Tener al menos 18 años, correo electrónico, conexión estable, ordenador y Zoom operativo","watch":"Renovación automática cada cuatro semanas, prueba gratuita sujeta a cancelación previa y pérdida de créditos si cancelas tarde o faltas"},{"category":"Idiomas","country":"Global","company":"Babbel","url":"https://www.babbel.com/","fit":"Buscas aprender un nuevo idioma de forma estructurada con pago online internacional y sin trámites burocráticos locales","needed":"Disponer de cuenta activa y método de pago compatible sin exigir documentación oficial residencial compleja","watch":"La suscripción se cobra por adelantado sin fraccionamiento y se renueva automáticamente si no cancelas antes del día anterior"},{"category":"Idiomas","country":"Global","company":"Preply","url":"https://preply.com/","fit":"Buscas aprender un idioma con tutores particulares flexibles sin aportar documentación migratoria ni extractos bancarios locales","needed":"Disponer de conexión a Internet y un método de pago internacional válido y aceptado","watch":"Las clases no utilizadas caducan al renovar el ciclo cada veintiocho días y la cancelación requiere antelación desde la web"},{"category":"Idiomas","country":"Global","company":"italki","url":"https://www.italki.com/","fit":"Buscas aprender idiomas con profesores particulares de todo el mundo mediante una plataforma global muy flexible","needed":"Ser mayor de edad y disponer de una cuenta activa con un método de pago aceptado","watch":"Los pagos se convierten en créditos no reembolsables en efectivo y los paquetes adquiridos caducan obligatoriamente a los seis meses"},{"category":"Seguro de Viaje","country":"Global","company":"IATI Seguros","url":"https://www.iatiseguros.com/seguros-viaje/","fit":"Buscas cobertura internacional con asistencia permanente en español y contratación digital previa al viaje","needed":"Acreditar domicilio habitual previo de seis meses y contratar la póliza antes de iniciar el viaje","watch":"No ofrece cobertura si ya te encuentras en destino para renovar visados y limita las estancias consecutivas a ciento ochenta y seis días"},{"category":"Seguro de Viaje","country":"Global","company":"Heymondo","url":"https://heymondo.com/es/seguro-de-viaje-temporal/","fit":"necesitas contratar asistencia médica internacional estando ya de viaje o buscas gestión digital rápida","needed":"ser mayor de edad, facilitar datos de contacto veraces y abonar la prima con tarjeta","watch":"La póliza de larga estancia exige un compromiso mínimo de noventa días, una franquicia específica y prórroga automática si no avisas"},{"category":"Seguro de Viaje","country":"Global","company":"SafetyWing","url":"https://safetywing.com/nomad-insurance/","fit":"buscas un seguro de viaje flexible contratado ya estando fuera de tu país","needed":"tener menos de setenta años de edad y aportar un documento de identidad válido","watch":"excluye enfermedades preexistentes y crónicas, cáncer y maternidad, y su cancelación aplica penalizaciones económicas y retención"},{"category":"Tarjetas","country":"Global","company":"Revolut","url":"https://www.revolut.com/es-ES/","fit":"viajas o necesitas operar internacionalmente con cambio de divisas integrado","needed":"ser mayor de edad, residir en un país admitido y aportar tu documento de identidad","watch":"con los límites de retirada gratuita en cajeros y el recargo del uno por ciento aplicado en fines de semana"},{"category":"Tarjetas","country":"Global","company":"Wise","url":"https://wise.com/es/card/","fit":"gestionas múltiples divisas internacionales y realizas pagos frecuentes en el extranjero","needed":"aportar un pasaporte válido y prueba de residencia legal en tu país de acogida","watch":"al coste de emisión de la tarjeta física, el límite mensual gratuito en cajeros y la ausencia de renovación automática"},{"category":"Tarjetas","country":"Global","company":"Curve","url":"https://www.curve.com/","fit":"buscas centralizar múltiples tarjetas bancarias en una sola tarjeta física para gestionarlas cómodamente","needed":"residencia en el EEE, mayoría de edad, móvil verificado y documento oficial con selfie","watch":"con los costes de entrega de tarjeta, comisiones por cambio de divisa tras superar el límite mensual y recargos en retiradas"},{"category":"VPN","country":"Global","company":"NordVPN","url":"https://nordvpn.com/","fit":"necesitas proteger múltiples dispositivos con privacidad internacional sin burocracia local","needed":"ser mayor de edad, indicar país de residencia fiscal y disponer de pago válido","watch":"La suscripción se renueva automáticamente al precio vigente si no se cancela a tiempo, limitando el uso simultáneo a diez dispositivos"},{"category":"VPN","country":"Global","company":"Surfshark","url":"https://surfshark.com/","fit":"Conectas múltiples dispositivos simultáneamente utilizando una sola suscripción con servidores en España y Alemania","needed":"Crear una cuenta con correo electrónico y disponer de una suscripción activa con pago válido","watch":"La suscripción se renueva automáticamente cobrando el siguiente periodo si no se cancela previamente de forma manual"},{"category":"VPN","country":"Global","company":"ExpressVPN","url":"https://www.expressvpn.com/","fit":"Buscas navegar de forma segura y privada desde cualquier país o mantener acceso durante tus viajes internacionales","needed":"Ser mayor de edad, registrar una cuenta con datos exactos y disponer de pago válido","watch":"Los planes largos se renuevan automáticamente a tarifa variable y las compras mediante tiendas móviles excluyen la garantía directa de reembolso"}];
  const ROUTES = {"/mejor-cuenta-bancaria-para-extranjeros-en-espana/":{"category":"Bancos","country":"ES"},"/mejor-cuenta-bancaria-para-extranjeros-en-espana-2/":{"category":"Bancos","country":"ES"},"/mejor-cuenta-bancaria-para-extranjeros-en-alemania/":{"category":"Bancos","country":"DE"},"/mejor-plataforma-para-buscar-piso-en-espana/":{"category":"Vivienda","country":"ES"},"/mejor-plataforma-para-buscar-piso-en-alemania/":{"category":"Vivienda","country":"DE"},"/mejor-operador-de-movil-para-expats-en-espana/":{"category":"Telefonía","country":"ES"},"/mejor-operador-de-movil-para-expats-en-alemania/":{"category":"Telefonía","country":"DE"},"/mejor-seguro-de-salud-para-recien-llegados-a-espana/":{"category":"Salud","country":"ES"},"/mejor-seguro-de-salud-para-expats-en-alemania/":{"category":"Salud","country":"DE"},"/mejor-app-para-hacer-la-declaracion-de-la-renta-en-espana/":{"category":"Impuestos","country":"ES"},"/mejor-app-para-hacer-la-declaracion-de-impuestos-en-alemania/":{"category":"Impuestos","country":"DE"},"/mejor-curso-de-ingles-y-frances-online-con-profesores-nativos/":{"category":"Idiomas","country":"Global"},"/mejor-curso-de-aleman-online-con-certificado/":{"category":"Idiomas","country":"Global"},"/mejor-app-para-enviar-dinero-a-latam-desde-europa/":{"category":"Enviar Dinero","country":"Global"},"/mejor-seguro-de-viaje-para-visitar-europa-desde-latam/":{"category":"Seguro de Viaje","country":"Global"},"/mejor-vpn-para-ver-tv-y-bancos-de-latam-desde-europa/":{"category":"VPN","country":"Global"},"/mejor-tarjeta-para-viajar-sin-comisiones-por-el-mundo/":{"category":"Tarjetas","country":"Global"},"/como-homologar-tu-titulo-universitario-en-europa/":{"category":"Homologación","country":"Global"},"/mejor-servicio-de-traduccion-jurada-oficial-en-europa/":{"category":"Traducción Jurada","country":"Global"},"/mejor-herramienta-para-crear-un-cv-europeo-ats-friendly/":{"category":"CV (ATS)","country":"Global"},"/mejor-servicio-de-envio-de-paquetes-a-latam-desde-europa/":{"category":"Enviar Paquetes","country":"Global"}};
  const LOG = '[Primo Comparador]';
  let activePanel = null;
  let activeTrigger = null;
  let outsideListenerAttached = false;
  let navigationBound = false;

  function normalize(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function escapeHTML(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function injectStyles() {
    if (document.getElementById('primo-comparador-styles')) return;
    const style = document.createElement('style');
    style.id = 'primo-comparador-styles';
    style.textContent = `
      .primo-detail-panel { max-height:0; overflow:hidden; opacity:0; margin:0; transition:max-height .3s ease, opacity .2s ease, margin .2s ease; }
      .primo-detail-panel.primo-detail-open { opacity:1; margin:10px 0 20px; }
      .primo-detail-box { background:#fff; border:1px solid #e2e8f0; border-radius:14px; box-shadow:0 12px 30px rgba(15,23,42,.10); padding:18px 20px; font-family:'IBM Plex Sans',Arial,sans-serif; color:#1b2a41; }
      .primo-detail-heading { margin:0 0 14px; font-size:16px; font-weight:800; letter-spacing:-.01em; }
      .primo-decision-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
      .primo-decision-card { min-width:0; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:13px 14px; }
      .primo-decision-card h4 { margin:0 0 7px; font-size:12px; line-height:1.2; font-weight:800; text-transform:uppercase; letter-spacing:.06em; color:#0f172a; }
      .primo-decision-card h4::before { display:inline-block; width:18px; font-size:14px; }
      .primo-fit h4::before { content:'✓'; color:#3f7d5c; }
      .primo-needed h4::before { content:'→'; color:#c89b3c; }
      .primo-watch h4::before { content:'!'; color:#c1432a; }
      .primo-decision-card p { margin:0; font-size:13px; line-height:1.42; color:#536174; }
      .tarifa-link.primo-detail-trigger-open { color:#c1432a !important; font-weight:700; }
      @media (max-width:880px) {
        .card-action { display:grid !important; grid-template-columns:minmax(0,1fr) auto; grid-template-areas:'price price' 'cta details'; gap:10px 12px; padding:16px 18px !important; align-items:center !important; justify-content:stretch !important; }
        .card-action .price { grid-area:price; font-size:32px; }
        .card-action .btn { grid-area:cta; width:100% !important; min-width:0; margin:0 !important; padding:13px 10px !important; font-size:14px; white-space:nowrap; }
        .card-action .tarifa-link { grid-area:details; margin:0 !important; padding:13px 4px; font-size:12px; line-height:1.15; white-space:nowrap; text-align:center; }
      }
      @media (max-width:700px) { .primo-detail-box { padding:16px; } .primo-decision-grid { grid-template-columns:1fr; gap:9px; } }
    `;
    document.head.appendChild(style);
  }

  function routeForCurrentPage() {
    let path = window.location.pathname || '/';
    if (!path.endsWith('/')) path += '/';
    return ROUTES[path] || null;
  }

  function withComparatorHash(href) {
    if (!href || href === '#') return href;
    try {
      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return href;
      url.hash = 'primo-comparador';
      return url.href;
    } catch (error) {
      return href;
    }
  }

  function initComparatorNavigation() {
    if (navigationBound) return;
    navigationBound = true;

    // Categoría directa: añade el ancla justo antes de que el navegador navegue al post.
    document.addEventListener('click', function(event) {
      const link = event.target.closest('a.primo-accordion-link');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href && href !== '#') link.href = withComparatorHash(link.href);
    }, true);

    // Categoría elegida después del toast de país: actualiza la ruta pendiente antes del listener global.
    document.addEventListener('click', function(event) {
      const button = event.target.closest('#primo-country-toast .primo-toast-country');
      const toast = document.getElementById('primo-country-toast');
      const pending = toast && toast.__pendingLink;
      if (!button || !pending) return;
      toast.__pendingLink = Object.assign({}, pending, {
        urlEspana: withComparatorHash(pending.urlEspana),
        urlAlemania: withComparatorHash(pending.urlAlemania)
      });
    }, true);

    // Al aterrizar en un post desde una categoría, muestra de inmediato la cabecera azul y las ofertas.
    if (window.location.hash === '#primo-comparador') {
      let attempts = 0;
      const focusComparator = function() {
        const target = document.querySelector('.primo-custom-layout .top') || document.querySelector('.primo-custom-layout');
        if (target) {
          const header = document.querySelector('.gh-head, header');
          const offset = header ? header.getBoundingClientRect().height : 0;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
          return;
        }
        if (attempts++ < 25) window.setTimeout(focusComparator, 100);
      };
      window.setTimeout(focusComparator, 80);
    }
  }

  function findRecord(route, brand) {
    if (!route) return null;
    const wanted = normalize(brand);
    return DB.find(function(record) {
      return record.category === route.category && record.country === route.country && normalize(record.company) === wanted;
    }) || null;
  }

  function closeActivePanel() {
    if (!activePanel) return;
    activePanel.classList.remove('primo-detail-open');
    activePanel.style.maxHeight = '0px';
    activePanel.setAttribute('aria-hidden', 'true');
    if (activeTrigger) { activeTrigger.classList.remove('primo-detail-trigger-open'); activeTrigger.setAttribute('aria-expanded', 'false'); }
    activePanel = null;
    activeTrigger = null;
  }

  function makePanel(record) {
    const panel = document.createElement('section');
    panel.className = 'primo-detail-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML =
      '<div class="primo-detail-box">' +
        '<h3 class="primo-detail-heading">Antes de contratar ' + escapeHTML(record.company) + '</h3>' +
        '<div class="primo-decision-grid">' +
          '<article class="primo-decision-card primo-fit"><h4>Te conviene si</h4><p>' + escapeHTML(record.fit) + '</p></article>' +
          '<article class="primo-decision-card primo-needed"><h4>Necesitas</h4><p>' + escapeHTML(record.needed) + '</p></article>' +
          '<article class="primo-decision-card primo-watch"><h4>Ojo</h4><p>' + escapeHTML(record.watch) + '</p></article>' +
        '</div>' +
      '</div>';
    return panel;
  }

  function wireCard(card, route) {
    if (card.dataset.primoWired === 'true') return;
    const brandElement = card.querySelector('.brand-name');
    if (!brandElement) return;
    const brand = brandElement.textContent.replace(/\s+/g, ' ').trim();
    const record = findRecord(route, brand);
    if (!record) { console.warn(LOG, 'Ficha no encontrada:', { route:route, brand:brand }); return; }

    const mainButton = card.querySelector('.card-action .btn');
    if (mainButton) { mainButton.href = record.url; mainButton.target = '_blank'; mainButton.rel = 'sponsored noopener noreferrer'; }
    const trigger = card.querySelector('.tarifa-link');
    if (!trigger) return;

    const panel = makePanel(record);
    card.insertAdjacentElement('afterend', panel);
    card.dataset.primoWired = 'true';
    trigger.href = '#primo-detalles';
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', function(event) {
      event.preventDefault(); event.stopPropagation();
      const wasOpen = activePanel === panel;
      closeActivePanel();
      if (wasOpen) return;
      panel.classList.add('primo-detail-open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.setAttribute('aria-hidden', 'false');
      trigger.classList.add('primo-detail-trigger-open');
      trigger.setAttribute('aria-expanded', 'true');
      activePanel = panel;
      activeTrigger = trigger;
    });
  }

  function init() {
    injectStyles();
    initComparatorNavigation();
    const route = routeForCurrentPage();
    if (!route) return;
    const cards = Array.from(document.querySelectorAll('.card'));
    cards.forEach(function(card) { wireCard(card, route); });
    if (!outsideListenerAttached) {
      document.addEventListener('click', function(event) {
        if (activePanel && !activePanel.contains(event.target) && !(activeTrigger && activeTrigger.contains(event.target))) closeActivePanel();
      });
      window.addEventListener('resize', function() { if (activePanel) activePanel.style.maxHeight = activePanel.scrollHeight + 'px'; });
      outsideListenerAttached = true;
    }
    console.log(LOG, 'v31 listo:', { route:route, cards:cards.length });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true }); else init();
  window.addEventListener('load', init, { once:true });
})();
