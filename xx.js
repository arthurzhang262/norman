function xx() {
  console.log("xx");
  arguments[0] = "hello";
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
  console.log(arguments[4]);
  console.log(arguments[5]);
  console.log(arguments[6]);
}

xx();