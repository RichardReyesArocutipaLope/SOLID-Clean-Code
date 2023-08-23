
interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface swimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public eat() { }
    public fly() { }
}

class Humminbird implements Bird, FlyingBird {
    public eat() { }
    public fly() { }
}

class Ostrich implements Bird, RunningBird {
    public eat() { }
    public run() { }
}

class Penguin implements Bird, swimmerBird {
    public eat() { }
    public swim() { }
}

