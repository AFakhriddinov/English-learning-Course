// mobile menu section
function myFunction() {
  document.getElementById('mobile-menu').style.visibility = 'visible';
  document.getElementById('menu-button').style.visibility = 'hidden';
}

function myFunction2() {
  document.getElementById('mobile-menu').style.visibility = 'hidden';
  document.getElementById('menu-button').style.visibility = 'visible';
}

// projects section with popup window

const array = [
  {
    number: 0,
    heading: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/Snapshoot Portfolio1.png',
    popupImage: 'images/popup1.png',
    languages: ['html', 'css', 'javascript', 'Ruby', 'GitHub', 'Bootstrap'],
    profession: ['Canopy', 'Full Stack Dev', '2015'],
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and when an unknown printer took a galley of type and and when an  unknown printer took a galley of type and scrambled it 1960s",
  },
  {
    number: 1,
    heading: 'Multi-Post Stories',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/Snapshoot Portfolio2.png',
    popupImage: 'images/popup2.png',
    languages: ['html', 'css', 'javascript', 'Ruby', 'GitHub', 'Bootstrap'],
    profession: ['FACEBOOK', 'Full Stack Dev', '2015'],
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and when an unknown printer took a galley of type and scrambled it 1960s",
  },
  {
    number: 2,
    heading: 'Facebook 360',
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    image: 'images/Snapshoot Portfolio3.png',
    popupImage: 'images/popup3.png',
    languages: ['html', 'css', 'javascript', 'Ruby', 'GitHub', 'Bootstrap'],
    profession: ['FACEBOOK', 'Full Stack Dev', '2015'],
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and when an unknown printer took a galley of type and scrambled it 1960s",
  },
  {
    number: 3,
    heading: 'Uber Navigation',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'images/Snapshoot Portfolio4.png',
    popupImage: 'images/popup4.png',
    languages: ['html', 'css', 'javascript', 'Ruby', 'GitHub', 'Bootstrap'],
    profession: ['Uber', 'Lead Developer', '2018'],
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and when an unknown printer took a galley of type and scrambled it 1960s",
  },
];

function project() {
  const a = document.getElementById('project-portfolio');
  for (let i = 0; i < array.length; i += 1) {
    if (i % 2 === 0) {
      a.innerHTML += `
  <section class="works" id="portfolio">
    <div class="content" id="project1">
      <img src="${array[i].image}" alt="Work 1" class="content-picture"/>
      <div class="content-body" id="content-body">
        <h2 class="content-title">${array[i].heading}</h2>
        <ul class="layout">
          <li class="call">${array[i].profession[0]}</li>
          <li><img src="images/point.svg" alt="." /></li>
          <li class="profession">${array[i].profession[1]}</li>
          <li><img src="images/point.svg" alt="." /></li>
          <li class="year">${array[i].profession[2]}</li>
        </ul>
        <p class="job-explanation">
          ${array[i].description}
        </p>
        <ul class="programming">
          <li class="platform">
            <a href="#html">${array[i].languages[0]}</a>
          </li>
          <li class="platform">
            <a href="#CSS">${array[i].languages[1]}</a>
          </li>
          <li class="platform">
            <a href="#JS">${array[i].languages[2]}</a>
          </li>
        </ul>
        <button onclick="popup(${array[i].number})" type="button" class="content-view-button">See Project</button>
      </div>
    </div>
  </section>`;
    } else {
      a.innerHTML += `
    <section class="works" id="portfolio">
    <div class="content content-reverse" id="project1">
      <div class="content-body" id="content-body">
        <h2 class="content-title">${array[i].heading}</h2>
        <ul class="layout">
          <li class="call">${array[i].profession[0]}</li>
          <li><img src="images/point.svg" alt="." /></li>
          <li class="profession">${array[i].profession[1]}</li>
          <li><img src="images/point.svg" alt="." /></li>
          <li class="year">${array[i].profession[2]}</li>
        </ul>
        <p class="job-explanation">
          ${array[i].description}
        </p>
        <ul class="programming">
          <li class="platform">
            <a href="#html">${array[i].languages[0]}</a>
          </li>
          <li class="platform">
            <a href="#CSS">${array[i].languages[1]}</a>
          </li>
          <li class="platform">
            <a href="#JS">${array[i].languages[2]}</a>
          </li>
        </ul>
        <button onclick="popup(${array[i].number})" type="button" class="content-view-button">See Project</button>
      </div>
      <img src="${array[i].image}" alt="Work 1" class="content-picture"/>
    </div>
  </section>`;
    }
  }
}

function removeBlur() {
  document.getElementById('header').style.filter = 'blur(0px)';
  document.getElementById('headline').style.filter = 'blur(0px)';
  document.getElementById('about').style.filter = 'blur(0px)';
  document.getElementById('contact').style.filter = 'blur(0px)';
  document.getElementById('project-portfolio').style.filter = 'blur(0px)';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  removeBlur();
  document.getElementById('header').style.position = 'fixed';
}

function makeBlur() {
  document.getElementById('header').style.filter = 'blur(10px)';
  document.getElementById('headline').style.filter = 'blur(10px)';
  document.getElementById('about').style.filter = 'blur(10px)';
  document.getElementById('contact').style.filter = 'blur(10px)';
  document.getElementById('project-portfolio').style.filter = 'blur(10px)';
}

function popup(number) {
  const b = document.getElementById('popup-window');
  makeBlur();

  b.innerHTML = `
    <div class="popup" id="popup">
      <div class="sub-popup">
        <div class="popup-heading">
          <h1 class="popup-h1">${array[number].heading}</h1>
          <img
            onclick="closePopup()"
            id="close-popup"
            class="popup-x"
            src="./images/popup-x.png"
            alt=""
          />
        </div>
        <ul class="layout">
          <li class="call">${array[number].profession[0]}</li>
          <li><img src="images/point.svg" alt="." /></li>
          <li class="profession">${array[number].profession[1]}</li>
          <li><img src="images/point.svg" alt="." /></li>
          <li class="year">${array[number].profession[2]}</li>
        </ul>
        <img src="${array[number].popupImage}" alt="Work 2" class="popup-img" />
        <div class="popup-bottom">
          <p class="popup-p">${array[number].popupDescription}</p>
          <div class="popup-lang">
            <ul class="programming program">
              <li class="platform program-li">
                <a href="#html">${array[number].languages[0]}</a>
              </li>
              <li class="platform program-li">
                <a href="#CSS">${array[number].languages[1]}</a>
              </li>
              <li class="platform program-li">
                <a href="#JS">${array[number].languages[2]}</a>
              </li>

            </ul>

            <div class="parent-two-buttons">
              <button type="button" class="two-buttons">
                <a href="#" class="live-a"> See live </a>
                <img src="./images/Icon.png" class="icon" alt="" />
              </button>
              <button type="button" class="two-buttons">
                <a href="#" class="live-a2"> See Source </a>
                <img src="./images/icon-github.png" class="icon2" alt="" />
              </button>
            </div>
            </div
            </div>
      </div>
    </div>

    `;
  document.getElementById('header').style.position = 'static';
}

// Preserve data in the browser

const form = document.getElementById('form-id');
const nameInput = document.getElementById('username');
const message = document.getElementById('message');
const emailInput = document.getElementById('useremail');

form.addEventListener('input', () => {
  const formInfo = {
    name: nameInput.value,
    email: emailInput.value,
    message: message.value,
  };
  localStorage.setItem('formDetails', JSON.stringify(formInfo));
});

function displayInfo() {
  const info = JSON.parse(localStorage.getItem('formDetails'));
  if (info) {
    nameInput.value = info.name;
    emailInput.value = info.email;
    message.value = info.message;
  }
}

displayInfo();
myFunction();
myFunction2();
project();
closePopup();
popup();
