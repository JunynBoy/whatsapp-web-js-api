module.exports = adjustNumber = (number) => {
  let newNumber = number.replace(/[()\/\-a-zA-Z ]/g, '');

  if (newNumber.length === 11) {
  } else if (newNumber.length >= 12 || newNumber.length <= 9) {
    throw new Error("Número inválido. Exemplo de número: XX 9XXXX XXXX");
  }

  return `55${newNumber}@c.us`;
}
