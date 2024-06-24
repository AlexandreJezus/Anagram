let entrada = "";
entrada = entrada.split("");
let anagrama = "";

console.log("Digite uma palavra para fazer o anagrama.");

process.stdin.on("data", function (data) {
  (entrada = data), toString().trim();
  console.log(entrada);
  for (let i = 0; i < entrada.length; i++) {
    let anagrama = entrada[i];
  }
});
console.log(entrada.join(""));
