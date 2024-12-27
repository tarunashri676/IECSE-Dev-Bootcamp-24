function toggleDarkMode() {
    const body = document.body;
    
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Change background image based on dark mode
    if (body.classList.contains('dark-mode')) {
      body.style.backgroundImage = 'url("https://i.pinimg.com/originals/4e/06/ce/4e06ce2958f643784f4607a208cf243c.gif")';
    } else {
      body.style.backgroundImage = 'url("https://motionbgs.com/dl/gif/1397")';
    }
  }
  