// Countdown timer example (set your target date)
const targetDate = new Date('March 24, 2025 16:00:00').getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);


  // Display the result in an element with id="countdown"
  document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the countdown is finished, write some text
  if (difference < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = "The event has started!";
  }
}, 1000);

// Define the openTab function outside the timer callback
function openTab(evt, tabName) {
  // Hide all tab content
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Remove the active class from all tab links
  const tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  
  // Show the current tab's content and add "active" class to the clicked tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
