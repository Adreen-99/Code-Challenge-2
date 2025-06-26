// Get elements from the page
let form = document.getElementById('guest-form');
let nameInput = document.getElementById('guest-name');
let categoryInput = document.getElementById('guest-category');
let guestList = document.getElementById('guest-list');

// When the form is submitted
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop the page from reloading

  let guestName = nameInput.value.trim();
  let category = categoryInput.value;

  // Check if the name is empty
  if (guestName === '') {
    alert('Please enter a name.');
    return;
  }

  // Check if guest list already has 10 guests
  if (guestList.children.length >= 10) {
    alert('Guest list limit (10) reached!');
    return;
  }

  // Create a list item for the guest
  let listItem = document.createElement('li');

  // Create a span to show the guest category
  let categorySpan = document.createElement('span');
  categorySpan.innerText = category;
  categorySpan.className = 'category ' + category;

  // Create a strong element to show the guest name
  let nameStrong = document.createElement('strong');
  nameStrong.innerText = guestName;

  // Create a small div to show the time
  let timeDiv = document.createElement('div');
  timeDiv.className = 'time';
  timeDiv.innerText = 'Added at ' + new Date().toLocaleTimeString();

  // Create RSVP button
  let rsvpBtn = document.createElement('button');
  rsvpBtn.innerText = 'RSVP: Not Attending';
  rsvpBtn.className = 'rsvp-btn';

  // Create Remove button
  let removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.className = 'delete-btn';

  // Add all elements to the list item
  listItem.appendChild(categorySpan);
  listItem.appendChild(nameStrong);
  listItem.appendChild(timeDiv);
  listItem.appendChild(rsvpBtn);
  listItem.appendChild(removeBtn);

  // Add the list item to the guest list
  guestList.appendChild(listItem);

  // Clear the form
  form.reset();
});

// Handle clicks on the guest list
guestList.addEventListener('click', function(event) {
  let clicked = event.target;

  // If "Remove" button is clicked
  if (clicked.classList.contains('delete-btn')) {
    let listItem = clicked.parentElement;
    listItem.remove();
  }

  // If "RSVP" button is clicked
  if (clicked.classList.contains('rsvp-btn')) {
    if (clicked.innerText.includes('Not Attending')) {
      clicked.innerText = 'RSVP: Attending';
    } else {
      clicked.innerText = 'RSVP: Not Attending';
    }
  }
});
