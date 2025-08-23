document.addEventListener('DOMContentLoaded', function() {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
    
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
        document.querySelectorAll('.skill-item, .project-card').forEach(item => {
            item.addEventListener('touchstart', function() {
                this.classList.add('hover-effect');
            });
            
            item.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('hover-effect');
                }, 200);
            });
        });
    }
    
    
// Mobile menu toggle

const hamburger = document.querySelector('.hamburger');
const navLinksMenu = document.querySelector('.nav-links'); // renamed
const body = document.body;

// Open/close menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinksMenu.classList.toggle('active');
    if (navLinksMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

// Close menu when a link is clicked
navLinksMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksMenu.classList.remove('active');
        body.style.overflow = '';
    });
});

// Optional: close menu when clicking outside (on mobile)
document.addEventListener('click', function(event) {
    if (
        navLinksMenu.classList.contains('active') &&
        !event.target.closest('.nav-links') &&
        !event.target.closest('.hamburger')
    ) {
        navLinksMenu.classList.remove('active');
        body.style.overflow = '';
    }
});

    // Canvas animation
    const canvas = document.getElementById('techCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = window.innerWidth < 768 ? 30 : 60;
        const colors = ['#3A86FF', '#38bdf8', '#7dd3fc'];
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        function animate() {
            ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        ctx.strokeStyle = 'rgba(56, 189, 248, ' + (1 - distance / 150) + ')';
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
                
                particles[i].update();
                particles[i].draw();
            }
            
            requestAnimationFrame(animate);
        }
        
        animate();
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // Hero section animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Typed.js animation
    const typed = new Typed('.typing', {
        strings: ['Web Developer', 'Frontend Developer', 'Tech Enthusiast', 'Backend Developer', 'Software Developer', 'ICT Engineer', 'Problem Solver'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // Projects data
    const projects = [
        {
            title: 'Movie Ticket Booking System',
            description: 'A web application for booking movie tickets with showtimes, seat selection, and payment integration.',
            tags: ['HTML5', 'css3', 'javascript', 'PHP', 'MySQL'],
            codeLink: 'https://github.com/Parth-Makwana06/Movie-Ticket-Booking-System-.git',
            image:  'https://tse4.mm.bing.net/th/id/OIP.lITsnJq6dEigqekUw8kIqAHaEJ?pid=Api&P=0&h=180pg'
        },
        {
            title: 'Employee Leave Application',
            description: 'A productivity application for managing employee leave requests and approvals.',
            tags: ['HTML5', 'CSS3', 'javascript', 'PHP', 'MySQL'],
            codeLink: 'https://github.com/Parth-Makwana06/Employee-Leave-Application-.git',
            image: 'https://businessfirstfamily.com/wp-content/uploads/2019/02/employee-management-software.jpg'
        },
        {
            title: 'Stock Management System',
            description: 'A comprehensive system for managing stock levels, orders, and sales.',
            tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            codeLink: 'https://github.com/Parth-Makwana06/stock-management-system-.git',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/012/684/396/small_2x/businessman-touching-virtual-screen-graph-stock-market-indicator-currency-exchange-financial-management-forex-business-profit-chart-trade-growth-index-economy-concept-free-photo.jpg'
        },
        {
            title: 'Stock Portfolio Tracker',
            description: 'Web application for tracking stock market investments and portfolio performance.',
            tags: ['Java'],
            codeLink: 'https://github.com/Parth-Makwana06/Stock-Portfolio-Tracker.git',
            image: 'https://wallpaperaccess.com/full/6048820.jpg'
        },
        {
            title: 'Gujarati Dhaba Management System',
            description: 'Dashboard for tracking restaurant orders, inventory, and order list.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'php', 'MySQL'],
            codeLink: 'https://github.com/Parth-Makwana06/Gujarati-Dhaba-Management-System-.git',
            image: 'https://furnitureroots.com/wp-content/uploads/2019/07/Custom-Made-Dhaba-Theme-Restaurant-Furniture-Project-by-FurnitureRoots-Urban-Dhaba-1-1024x672.jpg'
        },
        {
            title: 'Portfolio Website',
            description: 'A responsive portfolio website to showcase projects and skills (this website).',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
            codeLink: 'https://github.com/Parth-Makwana06/Portfolio-Website.git',
            image: 'https://tse4.mm.bing.net/th/id/OIP.ExQubzZNveMn7tWE81uLNAHaET?pid=Api&P=0&h=180'
        }
    ];
    
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-img-container">
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.codeLink}" target="_blank"><i class="fab fa-github"></i> View Code</a>
                    </div>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    
    
    // Skills data
    const skills = [
        { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'Java', icon: 'fab fa-java', color: '#007396' },
        { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
        { name: 'Web Developer', icon: 'fas fa-laptop-code', color: '#61DAFB' },
        { name: 'Frontend Developer', icon: 'fas fa-code', color: '#3A86FF' },
        { name: 'Backend Developer', icon: 'fas fa-server', color: '#38bdf8' },
        { name: 'Fullstack Developer', icon: 'fas fa-rocket', color: '#3f4041ff'},
        { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'C/C++', icon: 'fas fa-c', color: '#A8B9CC' },
        { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
        { name: 'VLSI', icon: 'fas fa-microchip', color: '#FF5722' },
        { name: 'AI/ML', icon: 'fas fa-robot', color: '#4CAF50' },
    ];
    
    const skillsList = document.querySelector('#skills .skills-list');
    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-icon" style="color: ${skill.color}">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-text">
                <h4>${skill.name}</h4>
            </div>
        `;
        
        skillItem.addEventListener('mouseenter', () => {
            skillItem.style.transform = 'translateY(-5px)';
            skillItem.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.1), 0 0 15px ${skill.color}40`;
        });
        
        skillItem.addEventListener('mouseleave', () => {
            skillItem.style.transform = 'translateY(0)';
            skillItem.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        skillItem.style.animationDelay = index * 0.1 + 's';
        skillsList.appendChild(skillItem);
    });
    
    // Education timeline
    const educationData = [
        {
            items: [
                {
                    degree: 'Diploma In Information And Communication Technology',
                    institution: 'A.V.Parekh Technical Institute, Rajkot | GTU',
                    duration: '2023 To 26 July',
                    image: 'https://tse1.mm.bing.net/th?id=OIP.7SLX-ZqFzz7mHd0pVks8oAHaE8&pid=Api&P=0&h=180'
                },
                {
                    degree: 'SSC | General Stream',
                    institution: 'Aditya Birla Higher Secondary School, Veraval | GSEB',
                    duration: 'Completed in 2022',
                    image: 'https://adityabirlaschools.co.in/abhss-veraval/wp-content/uploads/sites/37/2022/07/School-Garden-Temple-1024x768.jpg'
                }
            ]
        }
    ];
    
    const educationTimeline = document.querySelector('.education-timeline');
    educationData.forEach(section => {
        section.items.forEach((item, index) => {
            const educationItem = document.createElement('div');
            educationItem.className = 'education-item';
            educationItem.innerHTML = `
                <div class="education-content">
                    <img src="${item.image}" alt="${item.degree}" class="education-img">
                    <div class="education-text">
                        <h3>${item.degree}</h3>
                        <p class="institution">${item.institution}</p>
                        <p class="duration">${item.duration}</p>
                    </div>
                </div>
            `;
            educationTimeline.appendChild(educationItem);
        });
    });
    
    // Experience timeline
    const experienceData = [
        {
            position: 'Mysql Bootcamp',
            company: 'ITM Edutech Training Pvt. Ltd.',
            duration: '2023 To 26 July',
            description: 'I Sucessfully Completed Mysql bootcamp from GDG MAD, N.S.D.C. (National skill development copration).',
            skills: ['MySQL', 'Database']
        },
        {
            position: 'Semiconductor Design & Development',
            company: 'DIC Spoke Center Rajkot',
            duration: '21 May To 23 May 2025',
            description: 'I Sucessfully completed a 3-days workshop on <b>semiconductor Design & Development</b> held on A.V. Parekh Technical Institute, Rajkot by DIC Spoke center Rajkot.',
            skills: ['VLSI', 'Semiconductor', 'Design']
        },
        {
            position: 'Python Bootcamp',
            company: 'ITM Edutech Training Pvt. Ltd.',
            duration: '16 April to 18 April 2025',
            description: 'I Sucessfully completed Python bootcamp from GDG MAD, N.S.D.C. (National skill development copration).',
            skills: ['Python', 'Programming']
        },
        {
            position: 'Volunteer - NBA Accreditation & AICTE VANNI Workshop',
            company: 'A.V. Parekh Technical Institute, Rajkot',
            duration: '2024-2025',
            description: 'Actively participated as a volunteer in NBA Accreditation, Job Fair, and 3-days AICTE VANNI Workshop organized by EC Engineering Department.',
            skills: ['Teamwork', 'Event Management', 'Communication']
}

    ];
    
    const experienceTimeline = document.querySelector('.experience-timeline');
    experienceData.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';
        expItem.innerHTML = `
            <div class="experience-content">
                <h3>${exp.position}</h3>
                <p class="experience-company">${exp.company}</p>
                <p class="experience-duration">${exp.duration}</p>
                <p class="experience-description">${exp.description}</p>
                <div class="experience-skills">
                    ${exp.skills.map(skill => `<span class="experience-skill">${skill}</span>`).join('')}
                </div>
            </div>
        `;
        experienceTimeline.appendChild(expItem);
    });
    
    // Navigation highlighting
    const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a'); // this is fine now

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
    
    // Copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    
});
