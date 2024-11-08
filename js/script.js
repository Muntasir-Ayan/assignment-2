

// heart button red start
const heartButton = document.querySelector('.fa-regular.fa-heart');

// Check if the saved state is stored in localStorage on initial load
let isSaved = localStorage.getItem('isSaved') === 'true';
updateHeartButtonState();

heartButton.addEventListener('click', () => {
    isSaved = !isSaved;
    updateHeartButtonState();
    localStorage.setItem('isSaved', isSaved);
});

function updateHeartButtonState() {
    if (isSaved) {
        heartButton.style.color = 'red';
    }
    else {
        heartButton.style.color = '#00BFFF';
    }
}

// heart button red end


// share pop start
// Function to open the popup
function openPopupShare() {
    document.getElementById("share-overlay").style.display = "block";
    document.getElementById("sharePopup").style.display = "block";
}

// Function to close the popup
function closePopupShare() {
    document.getElementById("share-overlay").style.display = "none";
    document.getElementById("sharePopup").style.display = "none";
}

// Function to copy link to clipboard
function copyLink() {
    const link = "https://example.com/share-link";
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copied to clipboard!");
    }).catch((error) => {
        console.error("Could not copy link: ", error);
    });
}


// share pop end

// region pop up 
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
// region script end

// side-bar PopUp
// Initial count values
let adultCount = 0;
let childCount = 0;

// Function to open popup
function openPopup() {
    document.getElementById('sidebar-popup').style.display = 'block';
}

// Function to close popup and update traveler count
function closePopup() {
    document.getElementById('sidebar-popup').style.display = 'none';
    const totalCount = adultCount + childCount;
    document.getElementById('sidebar-traveler-count').textContent = `👤 ${totalCount} traveler${totalCount > 1 ? 's' : ''}`;
}

// Function to update count
function updateCount(type, delta) {
    if (type === 'adult') {
        adultCount = Math.max(0, adultCount + delta);
        document.getElementById('sidebar-adult-count').textContent = adultCount;
        document.getElementById('sidebar-adult-decrement').style.visibility = adultCount > 0 ? 'visible' : 'hidden';
    } else if (type === 'child') {
        childCount = Math.max(0, childCount + delta);
        document.getElementById('sidebar-child-count').textContent = childCount;
        document.getElementById('sidebar-child-decrement').style.visibility = childCount > 0 ? 'visible' : 'hidden';
    }
}

// Initialize button visibility
document.getElementById('sidebar-adult-decrement').style.visibility = 'hidden';
document.getElementById('sidebar-child-decrement').style.visibility = 'hidden';

// side-bar PopUp end



// pop up image 

// const photoCountElement = document.querySelector('.photo-count');
// const imageViewerElement = document.getElementById('image-viewer');
// const closeButton = document.getElementById('closeButtonImage');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// const imageElement = document.querySelector('.image');
// const titleElement = document.querySelector('.title');
// const countElement = document.querySelector('.count');

// // Sample image data
// const images = [
//   {
//     src: 'https://example.com/image1.jpg',
//     title: 'Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs Required'
//   },
//   {
//     src: 'https://example.com/image2.jpg',
//     title: 'Another Image'
//   },
//   {
//     src: 'https://example.com/image2.jpg',
//     title: 'Another Image'
//   },
//   {
//     src: 'https://example.com/image2.jpg',
//     title: 'Another Image'
//   },
//   {
//     src: 'https://example.com/image2.jpg',
//     title: 'Another Image'
//   },
//   // Add more images as needed
// ];

// let currentIndex = 0;

// photoCountElement.addEventListener('click', () => {
//   showImageViewer();
//   updateImage(currentIndex);
// });

// closeButton.addEventListener('click', () => {
//   hideImageViewer();
// });

// prevButton.addEventListener('click', () => {
//   currentIndex = Math.max(currentIndex - 1, 0);
//   updateImage(currentIndex);
// });

// nextButton.addEventListener('click', () => {
//   currentIndex = Math.min(currentIndex + 1, images.length - 1);
//   updateImage(currentIndex);
// });

// function showImageViewer() {
//   imageViewerElement.style.display = 'block';
// }

// function hideImageViewer() {
//   imageViewerElement.style.display = 'none';
// }

// function updateImage(index) {
//   imageElement.src = images[index].src;
//   titleElement.textContent = images[index].title;
//   countElement.textContent = `${index + 1}/${images.length}`;

//   prevButton.disabled = index === 0;
//   nextButton.disabled = index === images.length - 1;
// }

// pop up image end
