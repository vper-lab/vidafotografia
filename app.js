// Replace only with a real, confirmed WhatsApp number, including country code.
const whatsappNumber = '+34 000000000';
const digits = whatsappNumber.replace(/\D/g, '');
if (/^34[67]\d{8}$/.test(digits)) {
  const button = document.querySelector('#whatsapp-button');
  const link = document.createElement('a');
  link.className = button.className;
  link.textContent = 'Hablemos por WhatsApp';
  link.href = `https://wa.me/${digits}?text=${encodeURIComponent('Hola David y Víctor, nos gustaría hablar de nuestra boda.')}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  button.replaceWith(link);
  document.querySelector('#whatsapp-note').textContent = 'Contadnos la fecha y el lugar. Sin compromiso.';
}
document.querySelector('#year').textContent = new Date().getFullYear();
