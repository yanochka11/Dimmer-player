document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("videoUpload");
  const videoContainer = document.querySelector(".video-container");
  const mainVideo = document.querySelector(".main-video");

  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      mainVideo.src = videoUrl;
      mainVideo.load();
      mainVideo.play();
      videoContainer.style.display = "block";
      fileInput.closest(".upload-container").style.display = "none";
    }
  });
});
