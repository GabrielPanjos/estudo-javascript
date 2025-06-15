let contagem = 5;
for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(contagem--);
  }, i * 1000);
}
