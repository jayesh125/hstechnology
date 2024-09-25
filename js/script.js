const syllabus = {
    "Google Ads": [{
        "content": [
            "Overview of Google Ads",
            "Type of Google Ads",
            "Keyword Planner & Account Creation",
            "Ad Ranking Factors & Billing Methods"
        ]
    }],

    "Email Marketing": [{
        "content": [
            "Introduction to Email Marketing",
            "Importance of Email Marketing"
        ]
    }],

    "WhatsApp Bulk Msg": [{
        "content": [
            "Why SMS Marketing is Effective?",
            "How Does SMS Marketing Work?",
            "SMS Marketing Tool Setup"
        ]
    }],

    "Competitor Analysis": [{
        "content": [
            "Introduction to Competitor Analysis",
            "Tools for Competitor Analysis"
        ]
    }],

    "Content Marketing": [{
        "content": [
            "Content Creation",
            "Types of Content Marketing",
            "Distribution Channel for Content Marketing",
            "Keyword Research for Content Ideas"
        ]
    }],

    "Social Media Optimization": [{
        "content": [
            "Campaign Planning",
            "Social Media Handling",
            "Content Strategy",
            "Hash-Tag Finder"
        ]
    }],

    "Facebook & Instagram Ads": [{
        "content": [
            "How to Use Instagram for Best Results?",
            "Creating an Instagram Business & Creator Account",
            "Paid Advertising on Instagram"
        ]
    }],

    "Twitter Marketing": [{
        "content": [
            "How Twitter Works?",
            "Importance of Twitter",
            "How to Use Twitter Effectively?",
            "Creating a Twitter Account",
            "Composing a Tweet & Using Hashtags"
        ]
    }],

    "LinkedIn Marketing": [{
        "content": [
            "Overview on LinkedIn",
            "Create & Optimize LinkedIn Profile",
            "Craft an Amazing Summary Profile",
            "Creating New Connections",
            "How to Create a Company Page"
        ]
    }],

    "YouTube Marketing": [{
        "content": [
            "Overview on LinkedIn",
            "Create & Optimize LinkedIn Profile",
            "Craft an Amazing Summary Profile",
            "Creating New Connections",
            "How to Create a Company Page"
        ]
    }],

    "Blog Setup Like Professionals": [{
        "content": [
            "Optimizing Title Tags and Meta Descriptions",
            "Content Optimization",
            "URL Structure",
            "Internal Linking",
            "Image SEO"
        ]
    }],

    "Affiliate Marketing": [{
        "content": [
            "Overview on LinkedIn",
            "Create & Optimize LinkedIn Profile",
            "Craft an Amazing Summary Profile",
            "Creating New Connections",
            "How to Create a Company Page"
        ]
    }],

    "Graphic Designing": [{
        "content": [
            "Creating Brand-Specific Designs",
            "Exporting Designs in Different Formats (JPEG, PNG, PDF)"
        ]
    }],

    "Website Development": [{
        "content": [
            "What is a Website?",
            "What is WordPress?",
            "Overview of WordPress.com vs WordPress.org",
            "Basic Website Terminology (Domain, Hosting, CMS)"
        ]
    }],

    "Copy Writing": [{
        "content": [
            "Understanding the Target Audience",
            "Writing Persuasive Copy for Different Platforms (Websites, Social Media, Email)",
            "SEO Copywriting: Incorporating Keywords Naturally",
            "Copywriting Tips for Different Industries (eCommerce, SaaS, Real Estate)",
        ]
    }],

    "Wordpress Plugins & Themes": [{
        "content": [
            "How to Create a Simple Navigation Menu",
            "Adding Links to Pages and Posts",
            "Internal Links vs External Links"
        ]
    }],
}


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
        } else if (isDeleting && text === '') {
            isDeleting = false;
            index = (index + 1) % texts.length;
            typingSpeed = 3000;
        }

        setTimeout(type, typingSpeed);
    }

    type();

    function generateAccordion(data) {
        const leftAccordion = document.getElementById('accordionLeft');
        const rightAccordion = document.getElementById('accordionRight');
        let half = Math.ceil(Object.keys(data).length / 2); // Split the content into two columns
        let count = 0;

        Object.keys(data).forEach((majorTopic, index) => {
            let allContent = ''; // Initialize a variable to hold all the content for the major topic

            // Loop through all the subtopics and append their content
            data[majorTopic].forEach((subtopic) => {
                allContent += `
                <ul>
                    ${subtopic.content.map(item => `<li>${item}</li>`).join('')}
                </ul>`;
            });

            // Create the accordion HTML for the major topic
            const accordionHTML = `
            <div class="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                        ${majorTopic}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionContainer">
                    <div class="accordion-body">
                        ${allContent} <!-- Insert the content directly here -->
                    </div>
                </div>
            </div>`;

            // Add the accordion to the left or right column
            if (count < half) {
                leftAccordion.innerHTML += accordionHTML;
            } else {
                rightAccordion.innerHTML += accordionHTML;
            }
            count++;
        });
    }

    // Generate accordion with the provided syllabus data
    generateAccordion(syllabus);


});

