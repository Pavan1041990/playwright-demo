class Person{
age=25

get loaction(){
    return 'india'
}

constructor (firstname,lastname){
    this.firstname=firstname
    this.lastname=lastname
}



fullname(){
    return this.firstname+this.lastname
}
}
let person= new Person('Pavan ','Nayak')

console.log(person.age)
console.log(person.loaction)
console.log(person.firstname)
console.log(person.lastname)
console.log(person.fullname())

let person2= new Person('Pavan Kumar ','Nayak')
console.log(person2.firstname)
console.log(person2.lastname)
console.log(person2.fullname())
