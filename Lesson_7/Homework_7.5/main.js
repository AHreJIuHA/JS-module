/*Взяти масив (Client [] з попереднього завдання).
Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/

function Client(id, name, surname, email, phoneNumber, order) {
    this.id = id;
    this.name = name
    this.surname = surname;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.order = order;
}

const clients = [
    new Client(1, 'Mickey', 'Mouse', 'mickey.mouse@disney.com', '+380634567890', [{title: 'toy', price: 300}, {title: 'cap', price: 150}]),
    new Client(2, 'Donald', 'Duck', 'donald.duck@disney.com', '+380634567890', [{title: 'cap', price: 150}]),
    new Client(3, 'Goofy', 'Goof', 'goofy.goof@disney.com', '+380634567890', [{title: 'skateboard', price: 500},{title: 'phone', price: 11250}]),
    new Client(4, 'Minnie', 'Mouse', 'minnie.mouse@disney.com', '+380634567890', [{title: 'dress', price: 700}]),
    new Client(5, 'Daisy', 'Duck', 'daisy.duck@disney.com', '+380634567890', [{title: 'phone', price: 11250}]),
    new Client(6, 'Pluto', 'Dog', 'pluto.dog@disney.com', '+380634567890', [{title: 'bone', price: 150}]),
    new Client(7, 'Scrooge', 'McDuck', 'scrooge.mcduck@disney.com', '+380634567890', [{title: 'safe', price: 1000}]),
    new Client(8, 'Chip', 'Chipmunk', 'chip.chipmunk@disney.com', '+380634567890', [{title: 'heat', price: 240}, {title: 'cap', price: 150},{title: 'phone', price: 11250}]),
    new Client(9, 'Dale', 'Chipmunk', 'dale.chipmunk@disney.com', '+380634567890', [{title: 'nut', price: 30},{title: 'phone', price: 11250}]),
    new Client(10, 'Simba', 'Lion', 'simba.lion@disney.com', '+380634567890', [{title: 'crown', price: 2750}])
];
const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);
