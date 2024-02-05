// baby-steps.ts

// Accede a los argumentos de la línea de comandos a través de process.argv
const args: string[] = process.argv.slice(2);

// Convierte los argumentos a números y calcula la suma
const sum: number = args.reduce((acc, val) => acc + +val, 0);

// Imprime la suma en la consola
console.log(sum);
