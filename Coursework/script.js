const heroImage = document.querySelector(".hero-lesson-image");
const lessonIcons = document.querySelectorAll(".lesson-icon");

lessonIcons.forEach(function (icon) {
	icon.addEventListener("click", function () {
		lessonIcons.forEach(function (item) {
			item.classList.remove("active");
		});
		icon.classList.add("active");
		heroImage.src = icon.dataset.image;
	});
});
