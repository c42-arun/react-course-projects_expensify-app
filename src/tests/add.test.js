const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(4, 5);

    expect(result).toBe(9);
});

test('should generate greeting with name', () => {
    const result = generateGreeting('Arun');

    expect(result).toBe('Hello Arun!');
});

test('should generate greeting with no name', () => {
    const result = generateGreeting();

    expect(result).toBe('Hello Anonymous!');
});