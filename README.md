# Prática de TDD com JavaScript e Jest

Este repositório contém uma coleção de funções simples desenvolvidas com o objetivo de praticar e demonstrar o fluxo de trabalho de **TDD (Test-Driven Development)**. Cada função foi criada seguindo o ciclo "Red-Green-Refactor".

### 🎯 O que é TDD?

Test-Driven Development é uma metodologia de desenvolvimento de software que se baseia em um ciclo curto de repetições:

1.  **🔴 Red:** Escrever um teste automatizado que falha, pois a funcionalidade ainda não foi implementada.
2.  **🟢 Green:** Escrever o código mais simples possível que faça o teste passar.
3.  **🔵 Refactor:** Refatorar o código escrito para melhorar a estrutura e remover duplicação, garantindo que os testes continuem passando.

Este projeto aplica esse ciclo para cada uma das funcionalidades listadas abaixo.

### ✨ Desafios Implementados

O projeto é dividido em módulos, cada um contendo uma função e seus respectivos testes.

#### 1. `capitalize`
- **O que faz:** Recebe uma string e a retorna com o primeiro caractere em maiúsculo.
- **Arquivos:** `capitalize.js`, `capitalize.test.js`

#### 2. `reverseString`
- **O que faz:** Recebe uma string e a retorna invertida.
- **Arquivos:** `reverseString.js`, `reverseString.test.js`

#### 3. `calculator`
- **O que faz:** Um objeto que contém as quatro operações matemáticas básicas (`add`, `subtract`, `multiply`, `divide`).
- **Arquivos:** `calculator.js`, `calculator.test.js`

#### 4. `caesarCipher`
- **O que faz:** Implementa a [Cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar), um método simples de criptografia que substitui cada letra pela letra que se encontra um número fixo de posições à frente no alfabeto.
- **Arquivos:** `caesarCipher.js`, `caesarCipher.test.js`

#### 5. `analyzeArray`
- **O que faz:** Recebe um array de números e retorna um objeto com as seguintes propriedades: `average` (média), `min` (valor mínimo), `max` (valor máximo) e `length` (comprimento do array).
- **Arquivos:** `analyzeArray.js`, `analyzeArray.test.js`

---

### 🛠️ Tecnologias Utilizadas

* **JavaScript:** Linguagem principal do projeto.
* **Node.js:** Ambiente de execução.
* **Jest:** Framework de testes utilizado para criar e executar todos os testes unitários.

---

### 🚀 Como Executar os Testes

Para verificar o projeto e rodar os testes localmente, siga os passos abaixo.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/) e npm instalados.

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/PMota173/TDD-practice.git](https://github.com/PMota173/TDD-practice.git)
    cd TDD-practice
    ```

2.  **Instale as dependências do projeto:**
    Este comando irá instalar o Jest e qualquer outra dependência listada no `package.json`.
    ```bash
    npm install
    ```

3.  **Rode os testes:**
    O Jest irá procurar e executar todos os arquivos com a extensão `.test.js` no projeto.
    ```bash
    npm test
    ```

---

### Autor

* **Pedro Mota** - [GitHub](https://github.com/PMota173)
