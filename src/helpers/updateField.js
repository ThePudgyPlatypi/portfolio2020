import Camelize from "./camelize";

export default async function update(coll, id, keyVal, value, callback) {
  if(keyVal) {
    keyVal = Camelize(keyVal);
  }
  
  const result = await fetch(`/api/${coll}/${id}/${keyVal}/update-piece`, {
    method: "post",
    body: JSON.stringify({
      value: value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const body = await result.json();

  // checking to see if it's real => making it optional
  if (callback) {
    callback(body);
  }
}
