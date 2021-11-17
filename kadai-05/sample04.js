// プロパティの値を書き換える

const obj = {
    name: "kamata",
    age: 37,
    gender: "male",
}

console.log(obj)
obj.age = obj.age + 1
console.log(obj)
obj.hasCat = true
obj.hasDog = false
obj.address = "滋賀県"
console.log(obj)
delete obj.hasDog
console.log(obj)