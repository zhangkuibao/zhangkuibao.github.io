1. for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，for..in迭代的是对象的**键**的列表，而for..of则迭代对象的**键对应的值**。
```ts
let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}
```
2. for..in可以操作任何对象；它提供了查看对象属性的一种方法。 但是 for..of关注于迭代对象的值。内置对象Map和Set已经实现了Symbol.iterator方法，让我们可以访问它们保存的值。