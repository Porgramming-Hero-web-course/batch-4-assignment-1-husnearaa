function getProperty<Type, Key extends keyof Type>(object: Type, key: Key): Type[Key] {
    return object[key];
  }
  
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name")); 

  