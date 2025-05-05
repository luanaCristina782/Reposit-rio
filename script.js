function enviarPedido() {
  const mensagem = encodeURIComponent("Olá! Quero fazer um pedido de marmita saudável.");
  const numero = "5599999999999"; // Substitua pelo seu número do WhatsApp
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  // Simulação de cadastro
  document.getElementById("mensagem").textContent = `Obrigado, ${nome}! Em breve entraremos em contato.`;

  // Aqui você pode integrar com uma API real, se quiser
  this.reset();
});
