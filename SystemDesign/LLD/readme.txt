npm init -y
npm i -D typescript tsx @types/node
npx tsc --init

tsconfig.json

{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "node",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "types": ["node"],
    "lib": ["ES2022"],
    "skipLibCheck": true
  },
  "include": ["src"]
}

Difference Between public, private, and protected

public → A public variable or method can be accessed from anywhere — inside the class, outside the class, or by derived (child) classes. This is the most open level of access.
private → A private variable or method can be accessed only within the same class where it is defined. It cannot be accessed from outside the class or by derived classes. This is the most restrictive access modifier.
protected → A protected variable or method can be accessed within the same class and also by its child (derived) classes. However, it cannot be accessed directly from outside those classes.

👉 In short:

public → accessible everywhere
private → accessible only inside the class
protected → accessible inside the class and in child classes