export interface Animal {
    sound() : string;
}

export class Dog implements Animal {
    sound(): string { return "Bark..." }
}

export class Cat implements Animal {
    sound(): string { return "Meow..." }
}