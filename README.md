
# Previsão Contagio COVID 19 🦠

O projeto foi iniciado com JS puro mas mas decidi passar ele para React com a intenção de trabalhar mais facilmente com a DOM.
Eu escolhi ViteJS para iniciar o projeto pelo desempenho.




O calculo para a previsão foi feito usando uma formula de crescimento exponencial não levando em conta a diminuição de casos então quanto mais distante mais irrealista o calculo vai ser por conta de todas as variaveis para diminuir a circulação do virus.

Os dados estão sendo obtidos em tempo real do respositorio https://github.com/owid/covid-19-data/tree/master/public/data
Então a previsão vai sempre ser atualizada de acordo com os dados disponibilizados pela Our World in Data.



## Como Testar

#### Apos Clonar o projeto

Como eu quis fazer diferente e passar os dados pra DOM você pode simplesmente alimentar o input com um numero inteiro até o 9 que vai ser retornado o resultado na própria DOM formatado e no console puro.

![image](https://user-images.githubusercontent.com/89563059/157409795-28fb4977-02f9-4023-ad26-7f854ddb9b22.png)





## Inicie o projeto localmente

Clone o projeto

```bash
  git clone 
```

Vá para o diretorio do projeto

```bash
  cd Previsao-covid-19
```

Instale as dependencias

```bash
  yarn
```

Inicie o server 

```bash
  yarn dev
```


## Screenshots

![image](https://user-images.githubusercontent.com/89563059/157409864-91243fcd-8f73-4bfc-92a3-d12b4aa382db.png)


