// Função principal para organizar os itens do inventário
function organizeInventory(itemsString) {
  // Dividir a string de entrada em um array de itens
  const itemsArray = itemsString.split(',').map(item => item.trim())

  // Filtrar itens vazios, remover duplicatas e ordenar em ordem alfabética
  const filteredItems = itemsArray.filter(item => item.length > 0)
  const uniqueItems = [...new Set(filteredItems)] // Remove duplicatas
  const sortedItems = uniqueItems.sort((a, b) => a.localeCompare(b))

  // Juntar os itens com quebras de linha para o resultado
  return sortedItems.join('\n')
}

// Função para decifrar/processar os itens
function decipherItems() {
  const inputElement = document.getElementById('items-input')
  const outputElement = document.getElementById('result-output')

  // Obter o valor do input e processar
  const inputText = inputElement.value
  const organizedItems = organizeInventory(inputText)

  // Exibir o resultado
  outputElement.textContent = organizedItems
}

// Função para limpar/retornar ao estado inicial
function returnToDefault() {
  document.getElementById('items-input').value = ''
  document.getElementById('result-output').textContent = ''
}

// Adicionar event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
  // Botão de decifrar
  document.getElementById('decipher-btn').addEventListener('click', decipherItems)

  // Botão de retornar
  document.getElementById('return-btn').addEventListener('click', returnToDefault)

  // Permitir também o uso da tecla Enter no textarea
  document.getElementById('items-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.ctrlKey) {
      decipherItems()
    }
  })
})
