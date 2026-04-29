document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = { name, email, password };

  // Get existing data
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Add new user
  users.push(user);

  // Save back to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // AJAX POST Simulation
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Registration Successful!");
      document.getElementById("regForm").reset();
    })
    .catch((err) => console.log(err));
});
