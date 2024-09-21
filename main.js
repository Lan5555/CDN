const nJToast = (function() {
  let toast = document.createElement('div');
  let header = document.createElement('h1');
  let text = document.createElement('p');
  let progressBar = document.createElement('div');

  // Append elements to the toast
  toast.appendChild(header);
  toast.appendChild(text);
  toast.appendChild(progressBar);
  document.body.appendChild(toast);

  // Set initial styles for progressBar
  progressBar.style.height = '5px'; // Set a height for the progress bar
  progressBar.style.width = '100%'; // Start full width
  progressBar.style.backgroundColor = 'white'; // Progress bar color

  // Return object with methods
  return {
    success: function(options = {}) {
      const defaultOptions = {
        title: 'Success',
        message: 'Toast shown successfully',
        timeout: 4000,
        position: 'topRight',
        color: 'white',
        backgroundColor: 'green',
        titleColor: 'white',
        textColor: 'black'
      };

      const config = { ...defaultOptions, ...options };
      this.showToast(config);
    },

    warning: function(options = {}) {
      const defaultOptions = {
        title: 'Warning',
        message: 'Warning toast shown',
        timeout: 4000,
        position: 'topRight',
        color: 'white',
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        titleColor: 'white',
        textColor: 'black'
      };

      const config = { ...defaultOptions, ...options };
      this.showToast(config);
    },

    showToast: function(config) {
      toast.classList.add('toast');
      header.classList.add('header');
      text.classList.add('text');
      toast.style.display = "block";
      toast.style.position = 'absolute';
      progressBar.classList.add('progressBar');

      // Clear previous content
      header.innerHTML = '';
      text.innerHTML = '';

      // Positioning logic
      toast.style.top = config.position.includes('top') ? '10px' : 'auto';
      toast.style.bottom = config.position.includes('bottom') ? '10px' : 'auto';
      toast.style.left = config.position.includes('Left') ? '10px' : 'auto';
      toast.style.right = config.position.includes('Right') ? '10px' : 'auto';

      // Set colors and content
      header.innerHTML = config.title;
      text.innerHTML = config.message;
      header.style.color = config.titleColor;
      text.style.color = config.textColor;
      toast.style.backgroundColor = config.backgroundColor;

      // Initialize the progress bar
      progressBar.style.width = '100%';

      // Animate the progress bar
      let width = 100; // Starting width
      const interval = setInterval(() => {
        width -= 100 / (config.timeout / 100); // Decrease width based on timeout
        progressBar.style.width = `${width}%`;

        if (width <= 0) {
          clearInterval(interval);
          toast.style.display = "none"; // Hide toast when done
        }
      }, 100); // Update every 100 milliseconds
    }
  };
})();

