document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll(".step");
    const nextButtons = document.querySelectorAll(".next-button");
    const endMessage = document.getElementById("end-message");

    let currentStep = 0;

    nextButtons.forEach(button => {
        button.addEventListener("click", () => {
            steps[currentStep].classList.add("hidden");
            currentStep++;
            if (currentStep < steps.length) {
                steps[currentStep].classList.remove("hidden");
            } else {
                endMessage.classList.remove("hidden");
            }

            // Scroll ke atas halaman
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});
