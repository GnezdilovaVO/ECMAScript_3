"use strict";
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

class Employee {
  constructor(name) {
    this.name = name;
  }
  displayInfo() {
    console.log(`${this.name} имя сотрудника`);
  }
}
class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
  displayInfo() {
    console.log(`${this.name} работает в отделе ${this.department}`);
  }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Order {
  constructor(orderNumber, products) {
    this.orderNumber = orderNumber;
    this.products = products;
  }
  addProduct(product) {
    return this.products.push(product);
  }
  getTotalPrice() {
    let amount = 0;
    for (let i = 0; i < this.products.length; i++) {
      amount += this.products[i].price;
    }
    return amount;
  }
}
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const order = new Order(12345, []);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice());

// Управление животными в зоопарке
// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.

// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

// Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, что вы используете приватные поля и статическое поле в соответствии с описанием.

class ZooAnimal {
  #name;
  #age;
  #gender;
  static maxAge = 15;
  constructor(name, age, gender) {
    this.#name = name;
    if (age > ZooAnimal.maxAge) {
      throw new Error("Старое животное");
    }
    this.#age = age;
    this.#gender = gender;
  }
  set name(newName) {
    this.#name = newName;
  }
  set age(newAge) {
    if (newAge > ZooAnimal.maxAge) {
      throw new Error("Старое животное");
    }
    this.#age = newAge;
  }
  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }
}
const animal1 = new ZooAnimal("Burka", 5, "cow");
animal1.name = "Sivka";
console.log(animal1.name);
animal1.age = 8;
console.log(animal1.age);
