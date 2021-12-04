async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  let data = await res.json();

  data = data.map((user) => user.username);

  console.log(data);
}

fetchUsers("https://jsonplaceholder.typicode.com/users");

// Array(10)
// 0: "Bret"
// 1: "Antonette"
// 2: "Samantha"
// 3: "Karianne"
// 4: "Kamren"
// 5: "Leopoldo_Corkery"
// 6: "Elwyn.Skiles"
// 7: "Maxime_Nienow"
// 8: "Delphine"
// 9: "Moriah.Stanton"
// length: 10
// [[Prototype]]: Array(0)
