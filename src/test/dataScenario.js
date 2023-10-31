import { createHash } from "../utils/utils.js";

const testUserPassword = 'test';
const testUser = {
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    birthDate: '1988-05-17T00:00:00.000Z',
    password: createHash(testUserPassword),
    role: 'customer'
};

const newUserPassword = 'newPass789';
const newUser = {
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    birthDate: '1995-11-29T00:00:00.000Z',
    password: createHash(newUserPassword),
    role: 'admin'
};

const testProduct = {
    title: 'Sample Product A',
    description: 'This is a sample product description for testing purposes',
    code: 'PROD1234',
    price: 29.99,
    stock: 50,
    category: 'Test Category'
};

const newProduct = {
    title: 'Another Product',
    description: 'A new product description goes here',
    code: 'NEWPROD5678',
    price: 49.99,
    stock: 20,
    category: 'New Category',
    image: './src/public/img/products/image123.png'
};

export { testUser, newUser, testUserPassword, testProduct, newProduct };

