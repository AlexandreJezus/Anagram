let entrada = "";
entrada = entrada.split("");
let anagrama = "";

console.log("Digite uma palavra para fazer o anagrama.");

process.stdin.on("data", function (data) {
  (palavra = data), toString().trim();

  palavra = palavra.splice("");

  for (let i = 0; i < palavra.length; i++) {
    for (let j = 0; j < palavra.length; j++) {
      let aux = palavra[i];
      palavra[i] = palavra[j];
      palavra[j] = aux;

      anagramas.push(palavra.join(""));

      if (!anagramas.includes(palavra.join("")))
        anagramas.push(palavra.join(""));
      console.log(palavra.join(""));
    }
  }
});
