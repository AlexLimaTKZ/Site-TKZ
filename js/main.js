var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let players = [];
let currentVideoIndex = 0;
let carousel3dItems;
let carousel3d;
let total3dItems;
let angle;
let translateZ;
let current3dAngle = 0;

function onYouTubeIframeAPIReady() {
    carousel3d = document.querySelector('.carousel-3d');
    carousel3dItems = document.querySelectorAll('.carousel-3d-item');
    total3dItems = carousel3dItems.length;
    angle = 360 / total3dItems;

    // Ensure carousel3d is rendered before calculating offsetWidth
    // This might require a small delay or checking if offsetWidth is non-zero
    // For now, assume it's rendered. If not, this might still be an issue.
    const itemWidth = carousel3dItems[0].offsetWidth;
    translateZ = (itemWidth / 2) / Math.tan((angle / 2) * (Math.PI / 180));

    carousel3dItems.forEach((item, index) => {
        const iframe = item.querySelector('iframe');
        if (iframe) {
            players.push(new YT.Player(iframe, {
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            }));
        }
        item.style.transform = `rotateY(${index * angle}deg) translateZ(${translateZ}px)`;
    });
    rotateCarousel();
    // Play the first video after all players are initialized and carousel is set up
    // This ensures the first video starts playing
    if (players.length > 0) {
        players[0].playVideo();
    }
}

function onPlayerReady(event) {
    // Play the first video when the API is ready and set volume to 100
    if (players.indexOf(event.target) === 0) {
        event.target.playVideo();
        event.target.setVolume(100);
    }
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        // Video ended, move to the next one
        currentVideoIndex = (currentVideoIndex + 1) % total3dItems;
        current3dAngle -= angle; // Rotate carousel
        rotateCarousel();
        // Do not autoplay the next video
        // players[currentVideoIndex].playVideo(); // Removed autoplay for subsequent videos
    }
}

function rotateCarousel() {
    if (carousel3d) {
        carousel3d.style.transform = `translateZ(-${translateZ}px) rotateY(${current3dAngle}deg)`;
    }
    // Pause all other videos
    players.forEach((player, index) => {
        if (index !== currentVideoIndex) {
            player.pauseVideo();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const pagination = document.querySelector('.carousel-pagination');

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarousel() {
        if (carouselInner) {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        if (pagination) {
            pagination.textContent = `${currentIndex + 1} / ${totalItems}`;
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });
    }

    updateCarousel();

    // Intersection Observer for card animations
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Dropdown menu
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        if (dropdownMenu) {
            dropdown.addEventListener('mouseover', () => {
                dropdownMenu.classList.add('show');
            });

            dropdown.addEventListener('mouseout', () => {
                dropdownMenu.classList.remove('show');
            });
        }
    }

    // 3D Carousel controls
    const prev3dBtn = document.querySelector('.carousel-3d-control.prev');
    const next3dBtn = document.querySelector('.carousel-3d-control.next');

    if (next3dBtn) {
        next3dBtn.addEventListener('click', () => {
            currentVideoIndex = (currentVideoIndex + 1) % total3dItems;
            current3dAngle -= angle;
            rotateCarousel();
            players[currentVideoIndex].playVideo();
        });
    }

    if (prev3dBtn) {
        prev3dBtn.addEventListener('click', () => {
            currentVideoIndex = (currentVideoIndex - 1 + total3dItems) % total3dItems;
            current3dAngle += angle;
            rotateCarousel();
            players[currentVideoIndex].playVideo();
        });
    }

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});