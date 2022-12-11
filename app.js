const userName = document.querySelector("#user");
const form = document.querySelector("#form");
const profilName = document.querySelector(".name");
const repo = document.querySelector(".repo");
const bio = document.querySelector(".bio");
const imgUser = document.querySelector("img");
let url = `https://api.github.com/users/`;

window.addEventListener("load", () => {
  url = `https://api.github.com/users/Yves62`;
  handleUser();
});

userName.addEventListener("input", (e) => {
  url = `https://api.github.com/users/${e.target.value}`;
  handleUser();
});

async function handleUser() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    } else {
      const data = await response.json();
      handleInfo(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function handleInfo(data) {
  imgUser.src = data.avatar_url;
  profilName.textContent = `Nom : ${data.name}`;
  repo.textContent = `Repos : ${data.public_repos}`;
  bio.textContent = `Bio : ${data.bio}`;
}
