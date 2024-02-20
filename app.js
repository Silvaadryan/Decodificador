// Função para criptografar o texto conforme as substituições especificadas
function criptografar() {
  var texto = document.getElementById('texto').value;
  var textoCriptografado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  document.getElementById('resultado').textContent = textoCriptografado;


}

// Função para descriptografar o texto criptografado de volta ao texto original
function descriptografar() {
  var textoCriptografado = document.getElementById('resultado').textContent;
  var textoDescriptografado = textoCriptografado
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  document.getElementById('resultado').textContent = textoDescriptografado;
}
function copiar() {
  var resultado = document.getElementById('resultado').textContent;

  // Cria um elemento textarea temporário para armazenar o texto
  var textareaTemporario = document.createElement('textarea');
  textareaTemporario.value = resultado;

  // Adiciona o textarea temporário à página
  document.body.appendChild(textareaTemporario);

  // Seleciona todo o texto no textarea
  textareaTemporario.select();
  textareaTemporario.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o texto selecionado para a área de transferência
  document.execCommand('copy');

  // Remove o textarea temporário
  document.body.removeChild(textareaTemporario);

  // Exibe uma mensagem de sucesso
  alert('Texto copiado com sucesso!');
}

