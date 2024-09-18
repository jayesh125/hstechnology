document.addEventListener('DOMContentLoaded', function () {
    const typewriter = document.querySelector('.typewriter-text');
    const texts = ['Funnel Building',
        'SEO Optimization',
        'Content Creation',
        'Digital Marketing']; // Replace with your desired texts
    let index = 0;
    let text = '';
    let isDeleting = false;

    function type() {
        const fullText = texts[index];
        if (isDeleting) {
            text = fullText.substring(0, text.length - 1);
        } else {
            text = fullText.substring(0, text.length + 1);
        }

        typewriter.textContent = text;

        let typingSpeed = isDeleting ? 50 : 150;

        if (!isDeleting && text === fullText) {
            typingSpeed = 2000; // Pause at the end of the text
            isDeleting = true;
            console.log("Deleting");
        } else if (isDeleting && text === '') {
            isDeleting = false;
            index = (index + 1) % texts.length;
            typingSpeed = 3000;
        }

        setTimeout(type, typingSpeed);
    }

    type();
});