function Person(name, age){
    this.name = name;
    this.age = age;  
 
}
Person.prototype.greet=function(){
	console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old'`);

}


maria = new Person("Maria", 23)
console.dir(maria.__proto__)