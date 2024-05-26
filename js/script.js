const buttonClose = document.querySelectorAll('[data-dismiss="modal"]')
const modal = document.querySelector('.modal')
const trigger = document.querySelector('[data-toggle="modal"]')



// Static backdrop

function getStaticClass (modal) {
    modal.classList.add('astroui-modal-static')
    document.body.style.overflow = 'hidden'
    document.body.classList.add('astroui-modal-open')
    setTimeout(() => {
        modal.classList.remove('astroui-modal-static')
    }, 100)
}

// Show modal

function showModal (modal) {
    modal.style.display = 'flex'
    setTimeout(() => {
        modal.classList.add('show')
    }, 100)
    modal.setAttribute('aria-hidden', 'false')
    document.body.style.overflow = 'hidden'
    document.body.classList.add('astroui-modal-open')
}


// Remove modal

function dismissModal (modal) {
    modal.classList.remove('show')
    setTimeout(() => {
        modal.style.display = 'none'
    }, 200)
    modal.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
    document.body.classList.remove('astroui-modal-open')
}

dismissModal(modal)

//
// Function on dismissing modal by button close

const getDismiss = (buttonClose, modal) => {
    buttonClose.addEventListener('click', () => {
        dismissModal(modal)
    })
}

buttonClose.forEach((buttonClose) => {
    getDismiss(buttonClose, modal)
})


// Open modal

trigger.addEventListener('click', () => {
    showModal(modal)
})

// Close modal with press escape

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        dismissModal(modal)
    }

})


document.addEventListener("alpine:init", () => {
    Alpine.data("select", () => ({
        open: false,
        language: "",

        toggle() {
            this.open = !this.open;
        },

        setLanguage(val) {
            this.language = val;
            this.open = false;
        },
    }));
});


const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');
let isDropdownOpen = true; // Set to true to open the dropdown by default, false to close it by default

// Function to toggle the dropdown
function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
    if (isDropdownOpen) {
        dropdownMenu.classList.remove('hidden');
    } else {
        dropdownMenu.classList.add('hidden');
    }
}

// Initialize the dropdown state
toggleDropdown();

// Toggle the dropdown when the button is clicked
dropdownButton.addEventListener('click', toggleDropdown);

// Close the dropdown when clicking outside of it
window.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
        isDropdownOpen = false;
    }
});



const dropdownButton2 = document.getElementById('dropdown-button-2');
const dropdownMenu2 = document.getElementById('dropdown-menu-2');
let isDropdownOpen2 = true; // Set to true to open the dropdown by default, false to close it by default

// Function to toggle the dropdown
function toggleDropdown2() {
    isDropdownOpen2 = !isDropdownOpen2;
    if (isDropdownOpen2) {
        dropdownMenu2.classList.remove('hidden');
    } else {
        dropdownMenu2.classList.add('hidden');
    }
}

// Initialize the dropdown state
toggleDropdown2();

// Toggle the dropdown when the button is clicked
dropdownButton2.addEventListener('click', toggleDropdown2);

// Close the dropdown when clicking outside of it
window.addEventListener('click', (event) => {
    if (!dropdownButton2.contains(event.target) && !dropdownMenu2.contains(event.target)) {
        dropdownMenu2.classList.add('hidden');
        isDropdownOpen2 = false;
    }
});

$(function(){
    $('.nav_show').hover(function() {
        $('.content_menu').addClass('active');
    }, function() {
        $('.content_menu').removeClass('active');
    })
})


    window.addEventListener('load', function () {
        document.querySelector('.pre-loader').className += ' hidden';
    });


multiUploadButton = document.getElementById("multi-upload-button");
multiUploadInput = document.getElementById("multi-upload-input");
imagesContainer = document.getElementById("images-container");
multiUploadDisplayText = document.getElementById("multi-upload-text");


multiUploadButton.onclick = function () {
    multiUploadInput.click(); // this will trigger the click event
};

multiUploadInput.addEventListener('change', function (event) {

    if (multiUploadInput.files) {
        let files = multiUploadInput.files;

        // show the text for the upload button text filed
        multiUploadDisplayText.innerHTML = files.length + ' files selected';
        // add styles to the images wrapper container
        imagesContainer.classList.add("w-full", "grid", "grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4", "gap-4");
        Object.keys(files).forEach(function (key) {
            let file = files[key];
            // the FileReader object is needed to display the image
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                // for each file we create a div to contain the image
                let imageDiv = document.createElement('div');
                imageDiv.classList.add("h-64", "mb-3", "w-full", "p-3", "rounded-lg", "bg-cover", "bg-center");
                imageDiv.style.backgroundImage = 'url(' + reader.result + ')';
                imagesContainer.appendChild(imageDiv);
            }
        })
    }
})


function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );

  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );

  decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
  });


  function btnCategory() {
    var element = document.getElementById("show-menu-cat");
    element.classList.toggle("showmenucat");
 }

    function myFunctionSearch() {
    var element = document.getElementById("overlay-bg");    
    element.classList.add("!block");

    var element = document.getElementById("showBoxSearch");    
    element.classList.add("!block");

    }

   
    function myFunctionHidden() {
    var element = document.getElementById("overlay-bg");    
    element.classList.remove("!block");     

    var element = document.getElementById("showBoxSearch");    
    element.classList.remove("!block");  
    
    }