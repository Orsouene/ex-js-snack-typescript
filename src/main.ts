import './style.css'
import "./style.css";

const data: unknown = ["orsouene",28];

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
else if (typeof data === "number") {
  console.log(data * 2 );
}
else if (typeof data === "boolean") {
  console.log(data);
}
else if ( data === null) {
  console.log("il dato è vuoto ");
}
else if (Array.isArray(data)) {
  console.log(data.length);}
  else if (data instanceof Promise){
    data.then(res=>console.log(res))
} else {
  console.log("Tipo non supportato");
}


