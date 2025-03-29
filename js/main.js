const faqQuestions = document.querySelectorAll(".faq-question");

for (const faqQuestion of faqQuestions) {
	faqQuestion.addEventListener("click", () => {
		const isOpen = faqQuestion.getAttribute("data-open");
		if (isOpen === null) {
			return;
		}

		if (isOpen === "0") {
			faqQuestion
				.querySelector(".faq-question-description")
				.classList.remove("hidden");
			faqQuestion.style.backgroundColor = "#f0f5f9";

			faqQuestion
				.querySelector(".faq-question-plus")
				.classList.add("hidden");
			faqQuestion
				.querySelector(".faq-question-minus")
				.classList.remove("hidden");
			faqQuestion.setAttribute("data-open", "1");
		} else {
			faqQuestion
				.querySelector(".faq-question-description")
				.classList.add("hidden");
			faqQuestion.style.removeProperty("background-color");

			faqQuestion
				.querySelector(".faq-question-plus")
				.classList.remove("hidden");
			faqQuestion
				.querySelector(".faq-question-minus")
				.classList.add("hidden");
			faqQuestion.setAttribute("data-open", "0");
		}
	});
}
