//Get the header element
const head = document. getElementsByTagName('header')
console.log(head)
//Get all the section elements
const sections = document.getElementsByTagName('section')
console.log(sections)
//Get the section element with class="current"
const currentSection = document.querySelector('section.current')
console.log(currentSection)
//Get the section that comes after the current section
const nextSection = currentSection.nextElementSibling;
console.log(nextSection)
//Get the h2 node from the section before the 'current' section
const prevSectionHeading = currentSection.previousElementSibling.lastElementChild;
console.log(prevSectionHeading)
//Get the div that contains the section that has an h2 with a class of 'highlight'
const highlightSectionDiv = currentSection.lastElementChild.parentElement.parentElement;
console.log(highlightSectionDiv)
//Get all the sections that contain an H2 (using a single statement);
const h2Sections = document.querySelectorAll('section h2')
console.log(h2Sections)