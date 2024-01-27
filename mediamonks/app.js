const fs = require('fs');

// Função para ler um arquivo JSON
function readJsonFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

// Função para corrigir os nomes dos veículos e marcas
function corrigirNomes(item) {
  item.nome = item.nome.replace(/æ/g, 'a').replace(/ø/g, 'o');
  if (item.marca) {
    item.marca = item.marca.replace(/æ/g, 'a').replace(/ø/g, 'o');
  }
  return item;
}

// Função para corrigir as vendas que estão como string para número
function corrigirVendas(item) {
  if (typeof item.vendas === 'string') {
    item.vendas = parseInt(item.vendas, 10);
  }
  return item;
}

// Função para exportar os dados corrigidos para um novo arquivo JSON
function exportarJson(data, outputPath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(outputPath, JSON.stringify(data, null, 2), 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('Arquivo exportado com sucesso!');
      }
    });
  });
}

// Função principal que coordena a leitura, correção e exportação dos dados
async function corrigirEExportarDados(filePath, outputPath) {
  try {
    // Leitura do arquivo JSON corrompido
    const data = await readJsonFile(filePath);

    // Aplica as correções em cada item do array de dados
    const fixedData = data.map(item => corrigirVendas(corrigirNomes(item)));

    // Exporta os dados corrigidos para um novo arquivo
    await exportarJson(fixedData, outputPath);
    console.log('Dados corrigidos e exportados com sucesso para:', outputPath);
  } catch (error) {
    console.error('Erro ao processar os dados:', error);
  }
}

// Caminhos dos arquivo json 1 de entrada e saída
const filePath = 'C:\\Users\\User\\Desktop\\cases\\mediamonks\\broken_database_1.json'; 
const outputPath = 'C:\\Users\\User\\Desktop\\cases\\mediamonks\\fixed_database_1.json';

// Caminhos dos arquivo json 2 de entrada e saída
const filePath2 = 'C:\\Users\\User\\Desktop\\cases\\mediamonks\\broken_database_2.json'; 
const outputPath2 = 'C:\\Users\\User\\Desktop\\cases\\mediamonks\\fixed_database_2.json';

// Executa a função principal
corrigirEExportarDados(filePath2, outputPath2);

