const VALUE1 = 150;
 let value2 = Math.floor(Math.random() * 100);
 let result = VALUE1 + value2 / 5 + 17;
 
 console.log(result);
 console.log(`Result is ${result} when random number is ${value2} and constant value is ${VALUE1}`); 

 /* Приоритет оператора – это свойство оператора, 
 влияющее на очерёдность его выполнения в выражении 
 с несколькими различными операторами при отсутствии явного 
 указания на порядок их вычисления. 
 Операторы с более высоким приоритетом выполняются раньше 
 операторов с более низким приоритетом. */