const str = 
let sum = 0;
for(let i = 0; i < str.length; i+=50) {
  sum += Number(str.slice(i,i + 50));
}
console.log(sum);