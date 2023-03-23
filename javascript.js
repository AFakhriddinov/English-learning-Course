function myFunction() {
  document.getElementById("mobile-menu").style.visibility = "visible";
  document.getElementById("menu-button").style.visibility = "hidden";
  // document.getElementById("logo-div").style.display = "block";
}

function myFunction2() {
  document.getElementById("mobile-menu").style.visibility = "hidden";
  document.getElementById("menu-button").style.visibility = "visible";
}

const array = [
  {
    image: "images/1.jpg",
    name: "Yochai Benkler",
    heading: "Professor of Entrepreneurial Legal studies",
    description:
      "Benkler studies commons based peer production and published his seminal book 'The wealth of networks in 2006'",
  },
  {
    image: "images/2.jpg",
    name: "Kilnam Chon",
    heading: "",
    description:
      "Kilnam CHon helped bring internet to Asia and is an outspoken advocate. He helped bring internet to Asia and is an outspoken advocate. He helped bring internet to Asia and is an outspoken advocate",
  },
  {
    image: "images/3.jpg",
    name: "SohYeong Noh",
    heading: "Director of Art center",
    description:
      "SohYeong Noh helped bring internet to Asia and is an outspoken advocate. He helped bring internet to Asia and is an outspoken advocate.",
  },
  {
    image: "images/4.jpg",
    name: "Teen Holland",
    heading: "Director of young pirats of Europe",
    description:
      "Teen Holland helped bring internet to Asia and is an outspoken advocate. He helped bring internet to Asia and is an outspoken advocate.",
  },
  {
    image: "images/5.jpg",
    name: "John Robinson",
    heading: "Director of young pirats of Europe",
    description:
      "Teen Holland helped bring internet to Asia and is an outspoken advocate. He helped bring internet to Asia and is an outspoken advocate.",
  },
  {
    image: "images/6.jpg",
    name: "John Robinson",
    heading: "Director of young pirats of Europe",
    description:
      "Teen Holland helped bring internet to Asia and is an outspoken advocate. He helped bring internet to Asia and is an outspoken advocate.",
  },
];

function team() {
  const a = document.getElementById("team");
  for (let i = 0; i < array.length; i += 2) {
    a.innerHTML += `
    <div class="flex-container">
      <div class="item">
        <img class="team-img" src="${array[i].image}" alt="">
        <div class="team-div">
          <h4 class="team-h4">${array[i].name}</h4>
          <p class="team-p-italic">${array[i].heading}</p>
          <p class="team-p">${array[i].description}</p>
        </div>
      </div>
      <div class="item">
        <img class="team-img" src="${array[i + 1].image}" alt=""/>
        <div class="team-div">
          <h4 class="team-h4">${array[i + 1].name}</h4>
          <p class="team-p-italic">${array[i + 1].heading}</p>
          <p class="team-p">${array[i + 1].description}</p>
        </div>
      </div>
    </div>`;
  }
}

team();
