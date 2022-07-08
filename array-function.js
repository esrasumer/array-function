/*
push : array'in sonuna eleman eklemek
map : array içinde tek tek döner
find : yazdığımız koşullara uyan elemanları seçer
filter : filtreleme
some : array'in içindeki elemanlardan herhangibiri verilen koşula uyuyorsa true uymuyorsa false döner
every : array'in bütün elemanların koşula uymalı
includes : arattığımız eleman array de vaar mı yok mu
 */

const users = [{
        name: "Mehmet",
        age: 18,
    },
    {
        name: "Mehmet",
        age: 21,
    },
    {
        name: "Mehmet",
        age: 43,
    }
];

//push
users.push("Esra");
users.push("Fatma");

//console.log(users);

//map
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }
// ==>>>> yukıradıkini yapmak yerine map'i kullanabiliriz

//==>>>>> map

users.map((item) => {
    //console.log(item)
})

// find
const result = users.find((item) => item.name === "Mehmet" && item.age > 20);

// console.log(result);

//filter
const filtered = users.filter(
    (item) => item.name === "Mehmet" && item.age < 20
);
// console.log(filtered);

// some
const some = users.some(
    (item) => item.name === "Mehmet"
);
// console.log(some);

// every
const every = users.every((item) => item.name === "Mehmet");
// console.log(every); ///!!!!true dönmesi lazım ama false döndü

// includes

const meyveler = ["elma", "armut", "muz"];

const isIncluded = meyveler.includes("portakal");

console.log(isIncluded);