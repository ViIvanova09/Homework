/* --------------------------- Person constructor --------------------------- */
function Person(name, age){
    this.name = name;
    this.age = age;  
 
}
Person.prototype.greet=function(){
	console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old'`);

}
/* --------------------------- Manager constructor -------------------------- */
function Manager(name, age, managed){
   Person.call(this, name, age);
   this.managed = managed;
    }
// // Manager objects should inherit all methods from Person:
Object.assign(Manager.prototype, Person.prototype)

// /* -------------------------- Developer constructor ------------------------- */
function Developer(name, age, skillset){
   Person.call(this, name, age);
   this.skillset = skillset;
  }
// Developer objects should inherit all methods from Person:
Object.assign(Developer.prototype, Person.prototype)
/* ----------------------------- Create Objects ----------------------------- */
// Developer instances
   let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
   let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// // Manager instances
 let gates = new Manager('Bill Gates', 43, [maria, pesho]);

/* ----------------------------- Use the objects ---------------------------- */
maria.greet();
pesho.greet();
gates.greet();