// AOS init
AOS.init({ duration: 800, once: true });

// year
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- typing effect (preserved) ---------------- */
const words = ["Muthukumar", "Full Stack Developer", "React Enthusiast", "Node.js Developer", "Problem Solver"];
const el = document.getElementById('changingText');
let wordIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        el.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        el.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
}
setTimeout(type, 1000);

/* ---------------- dark/light toggle (preserved, using body.dark / body.light) ---------------- */
const darkToggle = document.getElementById('darkToggle');
const darkToggleIcon = document.getElementById('darkToggleIcon');

// initial theme: default to saved or dark
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    if (darkToggleIcon.classList.contains('fa-moon'))
        darkToggleIcon.classList.replace('fa-moon', 'fa-sun');
    darkToggleIcon.classList.add('text-blue-400');
} else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    if (darkToggleIcon.classList.contains('fa-sun'))
        darkToggleIcon.classList.replace('fa-sun', 'fa-moon');
    darkToggleIcon.classList.remove('text-blue-400');
}

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkToggleIcon.classList.replace('fa-moon', 'fa-sun');
        darkToggleIcon.classList.add('text-blue-400');
    } else {
        localStorage.setItem('theme', 'light');
        darkToggleIcon.classList.replace('fa-sun', 'fa-moon');
        darkToggleIcon.classList.remove('text-blue-400');
    }
});

// Create and populate skill tracks with Devicon icons
function initializeSkillTracks() {
    // Frontend skills with Devicon
    const frontendSkills = [
        { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
        { icon: 'devicon-html5-plain colored', name: 'HTML5' },
        { icon: 'devicon-css3-plain colored', name: 'CSS3' },
        { icon: 'devicon-react-original colored', name: 'React' },
        { icon: 'devicon-bootstrap-plain colored', name: 'Bootstrap' },
        { icon: 'devicon-tailwindcss-plain colored', name: 'Tailwind' },
        { icon: 'devicon-redux-original colored', name: 'Redux' },
        { icon: 'devicon-jquery-plain colored', name: 'jQuery' }
    ];

    // Backend skills with Devicon
    const backendSkills = [
        { icon: 'devicon-nodejs-plain colored', name: 'Node.js' },
        { icon: 'devicon-express-original', name: 'Express' },
        { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
        { icon: 'devicon-mysql-plain colored', name: 'MySQL' },
        { icon: 'devicon-git-plain colored', name: 'Git' },
        { icon: 'devicon-github-original', name: 'GitHub' },
        { icon: 'devicon-npm-original-wordmark colored', name: 'NPM' }
    ];

    const leftTrack = document.getElementById('skillTrackLeft');
    const rightTrack = document.getElementById('skillTrackRight');

    // Clear any existing content
    leftTrack.innerHTML = '';
    rightTrack.innerHTML = '';

    // Populate frontend skills (left track) - duplicate for seamless scrolling
    for (let i = 0; i < 2; i++) {
        frontendSkills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <div class="skill-item-inner">
                    <i class="${skill.icon}" title="${skill.name}"></i>
                </div>
                <span>${skill.name}</span>
            `;
            leftTrack.appendChild(skillItem);
        });
    }

    // Populate backend skills (right track) - duplicate for seamless scrolling
    for (let i = 0; i < 2; i++) {
        backendSkills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <div class="skill-item-inner">
                    <i class="${skill.icon}" title="${skill.name}"></i>
                </div>
                <span>${skill.name}</span>
            `;
            rightTrack.appendChild(skillItem);
        });
    }
}

// Initialize skill tracks when page loads
window.addEventListener('load', initializeSkillTracks);

/* ---------------- Mobile Menu Toggle ---------------- */
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('open');
    mobileMenuOverlay.classList.toggle('open');
}

mobileMenuToggle.addEventListener('click', toggleMobileMenu);
mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a nav item
mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuOverlay.classList.remove('open');
    });
});