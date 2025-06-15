setInterval(() => {
  const data = new Date();
  const hora = data.toLocaleTimeString();
  console.log(`Horário atual: ${hora}`);
}, 1000);
