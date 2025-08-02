const messages = [
  "Bunu sana özel hazırladım.",
  "Çünkü sen benim hayatımda en özel olan kişisin.",
  "Her anımda yanımda olmanı, gözlerinin içindeki ışığı izlemeyi çok seviyorum.",
  "Güzel kokunu içime çekmeyi çok seviyorum",
  "Kısacası seni çok seviyorum yavrum, iyi ki varsın. ❤️",
  "Hazırsan... biraz sihir yapalım mı? 🎈"
];



let current = 0;

function startStory() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.id = "story";
  h1.innerText = "";
  content.appendChild(h1);

  showNextMessage();
}

function showNextMessage() {
  if (current < messages.length) {
    const h1 = document.getElementById("story");
    h1.innerText = messages[current];
    current++;
    setTimeout(showNextMessage, 3000);
  } else {
    const content = document.getElementById("content");

    // 🎈 Balon butonu
    const balloonBtn = document.createElement("button");
    balloonBtn.innerText = "Balonları uçurmak için tıkla 🎈";
    balloonBtn.onclick = launchColorfulBalloons;
    content.appendChild(balloonBtn);

    // 💖 Hemen altına video butonu
    const videoBtn = document.createElement("button");
    videoBtn.innerText = "Bu Videoyu Kalbimde Saklıyorum. Hadi Tıkla 🥰";
    videoBtn.style.marginTop = "15px";
    videoBtn.onclick = showHeartAndVideo;
    content.appendChild(videoBtn);
  }
}

function launchColorfulBalloons() {
  const colors = ['#ff4d4d', '#ffb347', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6', '#e84393'];

  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");

      const color = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.backgroundColor = color;

      const size = Math.random() * 30 + 40;
      balloon.style.width = size + "px";
      balloon.style.height = size * 1.4 + "px";
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.animationDuration = (4 + Math.random() * 3) + "s";

      document.body.appendChild(balloon);

      setTimeout(() => {
        balloon.remove();
      }, 6000);
    }, i * 200);
  }
}

function showHeartAndVideo() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const heartWrapper = document.createElement("div");
  heartWrapper.className = "svg-heart-wrapper";

  heartWrapper.innerHTML = `
    <svg id="animated-heart" viewBox="0 0 512 512" width="200" height="200">
      <path d="M471.7,73.2c-54.5-46.4-136-38.5-186.4,13.7L256,116l-29.3-29.1
               c-50.4-52.2-131.9-60.1-186.4-13.7C-14.4,121.3-15.6,211.4,43,270.9
               l193.5,192.3c6.2,6.2,16.3,6.2,22.6,0L469,270.9C527.6,211.4,526.4,121.3,471.7,73.2z"
            fill="#e84393"/>
    </svg>
  `;

  content.appendChild(heartWrapper);

  setTimeout(() => {
    document.getElementById("animated-heart").classList.add("open");

    const video = document.createElement("video");
    video.src = "video2.mp4";
    video.controls = true;
    video.autoplay = true;
    video.className = "final-video";
    content.appendChild(video);
  }, 2000);
}
