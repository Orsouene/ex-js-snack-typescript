import './style.css'
import "./style.css";

const data: unknown = undefined;

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
if (typeof data === "number") {
  console.log(data * 2 );
}
if (typeof data === "boolean") {
  console.log(data);
}

else {
  console.log("Tipo non supportato");
}


