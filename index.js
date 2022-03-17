
 const kelvin = 24;
 // convert kelvin to celsius (celsius is similar but 273 degrees less) than kelvin 
 const celsius = kelvin - 273;
 // use fahrenheit equation (Fahrenheit=C elsius * (9/5) + 32) to covert to fahrenheit
 let fahrenheit = celsius * (9 / 5) + 32;
 // round result if decimal 
 fahrenheit = Math.floor(fahrenheit);
 console.log(`The temperature is ${celsius} degrees Fahrenheit.`);
 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
 // convert celsius to newton
 let newton = celsius * (33 / 100);
 // round result if decimal 
 newton = Math.floor(newton);
 console.log(`The temperature is ${newton} degrees Newton.`);