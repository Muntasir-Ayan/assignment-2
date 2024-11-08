const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// --- Heart Button Save State ---
const saveButtonHeart = document.querySelector('.save-button-heart');
const saveOnly = document.querySelector('.save-only');
const saved = document.querySelector('.saved');
let isSaved = localStorage.getItem('isSaved') === 'true';

updateHeartButtonState();

function toggleSaveState() {
    isSaved = !isSaved;
    updateHeartButtonState();
    localStorage.setItem('isSaved', isSaved);
}

function updateHeartButtonState() {
    if (isSaved) {
        saveOnly.style.display = 'none';
        saved.style.display = 'block';
    } else {
        saveOnly.style.display = 'block';
        saved.style.display = 'none';
    }
}

// --- Share Pop-Up ---
function openPopupShare() {
    document.getElementById("share-overlay").style.display = "block";
    document.getElementById("sharePopup").style.display = "block";
}

function closePopupShare() {
    document.getElementById("share-overlay").style.display = "none";
    document.getElementById("sharePopup").style.display = "none";
}

function copyLink() {
    const link = "http://127.0.0.1:5501/assignment-2/";
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copied to clipboard!");
    }).catch((error) => {
        console.error("Could not copy link: ", error);
    });
}

// --- Region Pop-Up ---
const regionLink = document.getElementById('regionLink');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
// const closeButton = document.getElementById('closeButton');
const regionSelect = document.getElementById('region');
const currencySelect = document.getElementById('currency');
const saveButton = document.getElementById('saveButton');

regionLink.addEventListener('click', function () {
    overlay.classList.add('show');
    popup.classList.add('show');
});

overlay.addEventListener('click', function () {
    overlay.classList.remove('show');
    popup.classList.remove('show');
});

closeButton.addEventListener('click', function () {
    overlay.classList.remove('show');
    popup.classList.remove('show');
});

regionSelect.addEventListener('change', function () {
    currencySelect.disabled = false;

    switch (this.value) {
        case 'Portugal':
            currencySelect.value = 'EUR';
            break;
        case 'United States':
            currencySelect.value = 'USD';
            break;
        case 'Japan':
            currencySelect.value = 'JPY';
            break;
        default:
            currencySelect.value = '';
            currencySelect.disabled = true;
    }
});

saveButton.addEventListener('click', function () {
    overlay.classList.remove('show');
    popup.classList.remove('show');
    regionLink.textContent = `🌐 ${regionSelect.value}`;
    alert('Settings saved!');
});

// --- Side-Bar Pop-Up ---
let adultCount = 0;
let childCount = 0;
let previousAdultCount = 0;
let previousChildCount = 0;

function openPopup() {
    previousAdultCount = adultCount;
    previousChildCount = childCount;
    document.getElementById('sidebar-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('sidebar-popup').style.display = 'none';

    if (adultCount !== previousAdultCount || childCount !== previousChildCount) {
        const totalCount = adultCount + childCount;
        document.getElementById('sidebar-traveler-count').textContent = `👤 ${totalCount} traveler${totalCount > 1 ? 's' : ''}`;
    }
}

function updateCount(type, delta) {
    if (type === 'adult') {
        adultCount = Math.max(0, adultCount + delta);
        document.getElementById('sidebar-adult-count').textContent = adultCount;
        document.getElementById('sidebar-adult-decrement').style.visibility = adultCount > 0 ? 'visible' : 'hidden';

        if (adultCount === 0) {
            childCount = 0;
            document.getElementById('sidebar-child-count').textContent = childCount;
            document.getElementById('sidebar-child-decrement').style.visibility = 'hidden';
        }
    } else if (type === 'child' && adultCount > 0) {
        childCount = Math.max(0, childCount + delta);
        document.getElementById('sidebar-child-count').textContent = childCount;
        document.getElementById('sidebar-child-decrement').style.visibility = childCount > 0 ? 'visible' : 'hidden';
    }
}

document.getElementById('sidebar-adult-decrement').style.visibility = 'hidden';
document.getElementById('sidebar-child-decrement').style.visibility = 'hidden';

// --- Image Pop-Up ---
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const images = Array.from(galleryImages).map(img => ({
        src: img.src,
        title: img.alt
    }));

    const photoCountElement = document.querySelector('.photo-count');
    const imageViewerElement = document.getElementById('image-viewer');
    const closeButton = document.getElementById('closeButtonImage');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const imageElement = document.querySelector('.image');
    const titleElement = document.querySelector('.title');
    const countElement = document.querySelector('.count');

    let currentIndex = 0;

    photoCountElement.addEventListener('click', () => {
        showImageViewer();
        updateImage(currentIndex);
    });

    closeButton.addEventListener('click', () => {
        imageViewerElement.style.display = 'none';
    });

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, images.length - 1);
        updateImage(currentIndex);
    });

    function showImageViewer() {
        imageViewerElement.style.display = 'block';
    }

    function updateImage(index) {
        imageElement.src = images[index].src;
        titleElement.textContent = images[index].title;
        countElement.textContent = `${index + 1}/${images.length}`;
        prevButton.disabled = index === 0;
        nextButton.disabled = index === images.length - 1;
    }
});





