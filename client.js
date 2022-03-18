import fetch from "node-fetch";
import axios from "axios";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function main() {
  // Option 1: main thread waits for http call via fetch
  await getNumberAsync().then((data) => console.log(data));

  // Placeholder for other tasks
  doMoreWork();

  // Option 2: use axios library, expands on fetch
  await axios
    .get("https://localhost:7083/number")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.error(error));

  // Placeholder for other tasks
  doMoreWork();
}

async function getNumberAsync() {
  console.log("calling");
  let response = await fetch("https://localhost:7083/number");
  let data = response.json();
  return data;
}

function doMoreWork() {
  console.log("working");
}

// Wrap in a main call so we can properly await our async calls
main();
