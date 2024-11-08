
// heart button red start
// Get references to the elements
const saveButtonHeart = document.querySelector('.save-button-heart');
const saveOnly = document.querySelector('.save-only');
const saved = document.querySelector('.saved');

// Check if the saved state is stored in localStorage on initial load
let isSaved = localStorage.getItem('isSaved') === 'true';
updateHeartButtonState();

// Function to toggle save state
function toggleSaveState() {
    isSaved = !isSaved;
    updateHeartButtonState();
    localStorage.setItem('isSaved', isSaved);
}

// Function to update visibility of save-only and saved elements based on the save state
function updateHeartButtonState() {
    if (isSaved) {
        saveOnly.style.display = 'none';
        saved.style.display = 'block';
    } else {
        saveOnly.style.display = 'block';
        saved.style.display = 'none';
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
// Initial count values
let adultCount = 0;
let childCount = 0;
let previousAdultCount = 0;
let previousChildCount = 0;

// Function to open popup
function openPopup() {
    // Store previous counts to detect changes when closing
    previousAdultCount = adultCount;
    previousChildCount = childCount;
    document.getElementById('sidebar-popup').style.display = 'block';
}

// Function to close popup and update traveler count only if changes were made
function closePopup() {
    document.getElementById('sidebar-popup').style.display = 'none';

    // Check if there were any changes in counts
    if (adultCount !== previousAdultCount || childCount !== previousChildCount) {
        const totalCount = adultCount + childCount;
        document.getElementById('sidebar-traveler-count').textContent = `👤 ${totalCount} traveler${totalCount > 1 ? 's' : ''}`;
    }
}

// Function to update count
function updateCount(type, delta) {
    if (type === 'adult') {
        adultCount = Math.max(0, adultCount + delta);
        document.getElementById('sidebar-adult-count').textContent = adultCount;
        document.getElementById('sidebar-adult-decrement').style.visibility = adultCount > 0 ? 'visible' : 'hidden';
        
        // Reset child count if adult count becomes 0
        if (adultCount === 0) {
            childCount = 0;
            document.getElementById('sidebar-child-count').textContent = childCount;
            document.getElementById('sidebar-child-decrement').style.visibility = 'hidden';
        }
    } else if (type === 'child' && adultCount > 0) { // Allow child count changes only if adult count > 0
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
document.addEventListener('DOMContentLoaded', function() {
  // Get all gallery images
  const galleryImages = document.querySelectorAll('.gallery-item img');
  
  // Create images array from gallery
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

  function hideImageViewer() {
    imageViewerElement.style.display = 'none';
  }

  function updateImage(index) {
    imageElement.src = images[index].src;
    titleElement.textContent = images[index].title;
    countElement.textContent = `${index + 1}/${images.length}`;
    prevButton.disabled = index === 0;
    nextButton.disabled = index === images.length - 1;
  }
});

// pop up image end
