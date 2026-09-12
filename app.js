function searchVideos() {

  const search =
    document.getElementById("searchInput")
      .value
      .toLowerCase();

  const cards =
    document.querySelectorAll(".video-card");

  cards.forEach(card => {

    const title =
      card.dataset.title.toLowerCase();

    if (title.includes(search)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });
}


function openVideo(video, title) {

  const url =
    "watch.html?video=" +
    encodeURIComponent(video) +
    "&title=" +
    encodeURIComponent(title);

  window.location.href = url;
}


function showAll() {

  document.querySelectorAll(".video-card")
    .forEach(card => {
      card.style.display = "block";
    });

}


function filterCategory(category) {

  alert(
    "Category selected: " +
    category +
    "\nConnect this button to your database later."
  );

}


function toggleMenu() {

  const menu =
    document.getElementById("mobileMenu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

}


/* Make video cards clickable */

document.addEventListener("DOMContentLoaded", () => {

  const cards =
    document.querySelectorAll(".video-card");

  cards.forEach((card, index) => {

    card.addEventListener("click", () => {

      const title =
        card.dataset.title;

      const video =
        "videos/video" +
        (index + 1) +
        ".mp4";

      openVideo(video, title);

    });

  });

});
