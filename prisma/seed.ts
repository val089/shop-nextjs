import { User, Product } from '@prisma/client';
import { faker } from '@faker-js/faker';
import prisma from '.';

const createUsers = async () => {
  await prisma.user.deleteMany({}); // use with caution.

  const amountOfUsers = 20;

  const users: User[] = [];

  for (let i = 0; i < amountOfUsers; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const user: User = {
      id: `user-${i}`,
      name: `${firstName} ${lastName}`,
      email: faker.internet.email(firstName, lastName),
      emailVerified: null,
      image: faker.image.avatar(),
    };

    users.push(user);
  }

  const addUsers = async () => await prisma.user.createMany({ data: users });

  await addUsers();
};

const createProducts = async () => {
  await prisma.product.deleteMany({}); // use with caution.

  const amountOfProducts = 50;

  const products: Product[] = [];

  for (let i = 0; i < amountOfProducts; i++) {
    const product: Product = {
      id: faker.random.alphaNumeric(10),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      image: faker.image.nature(),
      price: Number(faker.commerce.price()),
    };

    products.push(product);
  }

  const addProducts = async () => await prisma.product.createMany({ data: products });

  await addProducts();
};

async function main() {
  await createUsers();
  await createProducts();
}

main()
  .then(async () => {
    await prisma.$disconnect(); //kończymy połączenie żeby nie było za dużo otwartych klientów
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
