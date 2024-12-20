const menuitems = [
    { id: 1 , name : 'chicken kabab' , price : 290 , isveg:false},
    { id: 2 , name : 'paneer chilly' , price : 210 , isveg:true},
    { id: 3 , name : 'chicken biryani' , price : 350 , isveg:false},
    { id: 4 , name : 'veg biryani' , price : 300 , isveg:true}
]

// all veg
const r1 = menuitems.filter(e => e.isveg === true)
console.log(r1);

// all ele 200-300
const r2 = menuitems.filter(e => e.price >= 200 && e.price <= 300)
console.log(r2);

// id is 3
const r3 = menuitems.filter(e => e.id === 3)
console.log(r3);

// items  includes biryani
const r4 = menuitems.filter(e => e.name.includes('biryani'))
console.log(r4);