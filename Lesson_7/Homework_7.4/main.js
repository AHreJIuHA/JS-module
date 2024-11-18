/*створити класс для об'єктів Client з полями id, name, surname , email,
phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

function Client(id, name, surname, email, phoneNumber) {
    this.id = id;
    this.name = name
    this.surname = surname;
    this.email = email;
    this.phoneNumber = phoneNumber;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

const clients = [
    new Client(1, 'Mickey', 'Mouse', 'mickey.mouse@disney.com', '+380634567890', new Product('toy', 300)),
    new Client(2, 'Donald', 'Duck', 'donald.duck@disney.com', '+380634567890', new Product('cap', 150)),
    new Client(3, 'Goofy', 'Goof', 'goofy.goof@disney.com', '+380634567890', new Product('skateboard', 500)),
    new Client(4, 'Minnie', 'Mouse', 'minnie.mouse@disney.com', '+380634567890', new Product('dress', 700)),
    new Client(5, 'Daisy', 'Duck', 'daisy.duck@disney.com', '+380634567890', new Product('phone', 11250)),
    new Client(6, 'Pluto', 'Dog', 'pluto.dog@disney.com', '+380634567890', new Product('bone', 150)),
    new Client(7, 'Scrooge', 'McDuck', 'scrooge.mcduck@disney.com', '+380634567890', new Product('safe', 1000)),
    new Client(8, 'Chip', 'Chipmunk', 'chip.chipmunk@disney.com', '+380634567890', new Product('heat', 240)),
    new Client(9, 'Dale', 'Chipmunk', 'dale.chipmunk@disney.com', '+380634567890', new Product('nut', 30)),
    new Client(10, 'Simba', 'Lion', 'simba.lion@disney.com', '+380634567890', new Product('crown', 2750))
];
console.log(clients);