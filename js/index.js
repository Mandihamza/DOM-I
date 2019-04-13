const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
// console.log(logo);

// ====== Images ======
const logo = document.getElementById("logo-img");
logo.src = 'img/logo.png'

const headerImg = document.getElementById('cta-img');
headerImg.src = 'img/header-img.png'

const middleImg = document.getElementById('middle-img');
middleImg.src = 'img/mid-page-accent.jpg'


// ====== Nav ======
const navItems = document.querySelectorAll('a');
 navItems.forEach(
   (item, index) =>
  (item.textContent =  siteContent.nav[`nav-item-${index++}`])
);

const newNavItem = document.createElement('a');
newNavItem.textContent = "Book Appointment";
const addNavItems = document.querySelector('nav');
addNavItems.appendChild(newNavItem);

 const newNavElement = document.createElement('a');
 newNavElement.textContent = "Events";
 const addNavElement = document.querySelector('nav');
addNavElement.prepend(newNavElement);

// ====== Cta content ======
// CTA h1
  const ctaH1=  document.querySelector('.cta-text h1');
  const ctaText = siteContent.cta.h1.replace(/ /g, " <br> ");
  ctaH1.innerHTML = ctaText;

//CTA button
  const ctaButton =  document.querySelector('button');
  ctaButton.textContent = siteContent.cta.button;

  // ====== Main content ======

// h4 elements

const h4Elements = document.querySelectorAll('.main-content h4');

const featuresH4 = h4Elements[0];
featuresH4.textContent = siteContent['main-content']['features-h4'];

const aboutH4 = h4Elements[1];
aboutH4.textContent = siteContent['main-content']['about-h4'];

const servicesH4 = h4Elements[2];
servicesH4.textContent = siteContent['main-content']['services-h4'];

const productH4 = h4Elements[3];
productH4.textContent = siteContent['main-content']['product-h4'];

const visionH4 = h4Elements[4];
visionH4.textContent = siteContent['main-content']['vision-h4'];

// p elements

const pElements = document.querySelectorAll('.main-content p');

const featuresP = pElements[0];
featuresP.textContent = siteContent['main-content']['features-content'];

const aboutP = pElements[1];
aboutP.textContent = siteContent['main-content']['about-content'];

const servicesP = pElements[2];
servicesP.textContent = siteContent['main-content']['services-content'];

const productP = pElements[3];
productP.textContent = siteContent['main-content']['product-content'];

const visionP = pElements[4];
visionP.textContent = siteContent['main-content']['vision-content'];

// ====== Contact content ======

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact['contact-h4'];

const contactElements = document.querySelectorAll('.contact p');

const contactAddy = contactElements[0];
contactAddy.textContent = siteContent.contact.address;

const contactTel = contactElements[1];
contactTel.textContent = siteContent.contact.phone;

const contactEmail = contactElements[2];
contactEmail.textContent = siteContent.contact.email;

// ====== Footer content ======

const footerCopyright =  document.querySelector('footer p');
footerCopyright.textContent = siteContent.footer.copyright;
