
// sort()        array

// map()         array

// filter()      array

// find()        element

// reduce()      single vale

// reduceRight() single value (first)

// some()        true / false

// forEach()     elements

a=[1,3,4,5,6]
a.forEach(i=>console.log(i**2))

// includes()    element check
b=[1,2,3,5,9]
console.log(b.includes(7));

// flat()      convert nested array into single
c=[
    [24,56],
    [8,41],
    [27,65],
    [1,9]
]
console.log(c.flat().filter(i=>i<10));