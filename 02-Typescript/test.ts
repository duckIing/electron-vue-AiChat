const hello = (name) => {
    return `hello ${name}`
};

hello('this is hello');

const hello2 = (name: string) => {
    return `hello ${name}`
};

hello2(123);