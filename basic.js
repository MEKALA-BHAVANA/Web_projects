x = 'bhAvaNa';
x=x.toLowerCase();
document.write(x.charAt(0).toUpperCase() + x.slice(1));

let a = [1, 9,5,2, 3, 1, 2, 3]
a = [...new Set(a)]
document.write(a)
document.write(a.sort((a,b)=>a-b))