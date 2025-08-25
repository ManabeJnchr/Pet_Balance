# 🐕 Pet Balance

Sistema de otimização nutricional para animais de estimação, desenvolvido com Alpine.js e otimização linear para encontrar a melhor combinação de rações com menor custo.

<p align="center">
<img src="https://img.shields.io/badge/Alpine.js-8BC34A?style=for-the-badge&logo=alpine.js&logoColor=white" alt="Alpine.js">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
</p>

## 🎯 Sobre o Projeto

O **Pet Balance** é uma aplicação web desenvolvida para ajudar proprietários de animais de estimação e profissionais veterinários a encontrar a combinação ótima de rações que atenda às necessidades nutricionais específicas do animal com o menor custo possível. O sistema utiliza algoritmos de programação linear para resolver problemas de otimização nutricional.

### ✨ Principais Funcionalidades

- **📊 Calculadora Nutricional**: Interface intuitiva para inserir dados nutricionais de diferentes rações
- **🔢 Otimização Linear**: Algoritmo que encontra a melhor combinação de rações
- **📈 Visualização Gráfica**: Gráficos de barras interativos para visualizar resultados
- **💰 Análise de Custo**: Cálculo automático do custo mínimo para atender às restrições
- **🎛️ Interface Dinâmica**: Sistema de edição inline dos dados das rações
- **📱 Design Responsivo**: Interface adaptável para todos os dispositivos
- **🧮 Validação Inteligente**: Validação automática de dados e restrições

## 🚀 Tecnologias Utilizadas

### Frontend
- **Alpine.js** - Framework JavaScript reativo e leve
- **Bootstrap 5** - Framework CSS responsivo e moderno
- **ApexCharts** - Biblioteca de gráficos interativos
- **Material Design Icons** - Ícones modernos e intuitivos

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **javascript-lp-solver** - Solver de programação linear

### Ferramentas Adicionais
- **Lilita One Font** - Tipografia moderna do Google Fonts
- **NPM** - Gerenciador de pacotes JavaScript

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js 16 ou superior**
- **NPM** 
- **Navegador web moderno**

## ⚙️ Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/ManabeJnchr/Pet_Balance.git
cd Pet_Balance
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor
```bash
npm start
```

O sistema estará disponível em `http://localhost:3000`

## 🎮 Como Usar

### 1. Configuração das Rações
1. Na tela principal, configure até **6 rações diferentes**
2. Para cada ração, insira:
   - **Nome da ração** (clique em "Editar" para personalizar)
   - **Proteínas** (% ou unidade nutricional)
   - **Carboidratos** (% ou unidade nutricional)
   - **Gorduras** (% ou unidade nutricional)
   - **Custo** (em cents/onça)

### 2. Definição das Restrições Nutricionais
1. No card "Restrições Nutricionais", defina os **valores mínimos** necessários:
   - **Mínimo de Proteínas**
   - **Mínimo de Carboidratos**
   - **Mínimo de Gorduras**

### 3. Cálculo da Otimização
1. Clique no botão **"Calcular"**
2. O sistema encontrará a melhor combinação de rações
3. Visualize os resultados em:
   - **Cards individuais** com quantidade de cada ração
   - **Gráfico de barras** interativo
   - **Informações de viabilidade** da solução

### 4. Funcionalidades Extras
- **Setar Valores**: Use dados de exemplo pré-configurados
- **Limpar**: Limpe dados específicos ou todas as restrições
- **Editar Inline**: Modifique nomes das rações diretamente na interface
- **Voltar**: Retorne ao formulário para ajustar parâmetros

## 📊 Exemplo de Uso

```javascript
// Exemplo de configuração automática
Ração A: 20% proteínas, 50% carboidratos, 4% gorduras, $2.00
Ração B: 30% proteínas, 30% carboidratos, 9% gorduras, $3.00
Ração C: 40% proteínas, 20% carboidratos, 11% gorduras, $5.00

Restrições: 70% proteínas, 100% carboidratos, 20% gorduras

Resultado: 0.909 kg de Ração A + 1.818 kg de Ração B
Custo total: 7.27 cents/onça
```

## 🏗️ Estrutura do Projeto

```
PetBalance/
├── public/
│   ├── css/
│   │   └── style.css          # Estilos personalizados
│   ├── html/
│   │   └── index.html         # Página principal
│   ├── img/
│   │   └── logo.png           # Logo do projeto
│   └── js/
│       └── script.js          # Lógica da aplicação Alpine.js
├── node_modules/              # Dependências NPM
├── package.json              # Configuração do projeto
├── server.js                 # Servidor Express
└── README.md                 # Este arquivo
```

## 🔧 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm start

# Executar testes (se configurados)
npm test
```

## 🧮 Algoritmo de Otimização

O Pet Balance utiliza o **javascript-lp-solver** para resolver problemas de programação linear:

- **Função Objetivo**: Minimizar o custo total das rações
- **Restrições**: Atender aos requisitos mínimos de nutrientes
- **Variáveis**: Quantidade de cada ração a ser utilizada
- **Resultado**: Combinação ótima com menor custo possível

## 🎨 Design e UX

- **Cores**: Paleta de cores quentes (laranjas e marrons) inspirada em pets
- **Tipografia**: Fonte Lilita One para um visual amigável
- **Layout**: Grid responsivo com cards organizados
- **Interatividade**: Feedback visual em tempo real
- **Acessibilidade**: Ícones descritivos e labels claros

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Este projeto foi desenvolvido por:

- **José Victor** - [GitHub](https://github.com/Zevitu22)
- **Lucas Felipe** - [GitHub](https://github.com/lfsiqueiras)
- **Lucas Samuel** - [GitHub](https://github.com/ManabeJnchr)

---

<p align="center">
Feito com ❤️ para nossos companheiros de quatro patas 🐾
</p>
