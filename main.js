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
        textColor: 'black',
        progressBarColor: 'white'
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
        textColor: 'black',
        progressBarColor: 'white'
        
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
      progressBar.style.backgroundColor = config.progressBarColor;
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

const nJFloatingActionButton = (function() {
  
  let button = document.createElement('button');
  document.body.appendChild(button);
  return {
    FloatingActionButton:function(child = {}) {
      const defaultButton = {
        text:'<strong style="font-size: 22pt;">+</strong>',
        position: 'bottomRight',
        backgroundColor:'plum',
        color:'white',
        onclick: function(){},
      }
      
      const config = {...defaultButton, ...child}
      this.renderButton(config);
      },
      
      renderButton: function(config){
        button.classList.add('floating');
        button.innerHTML = config.text;
        button.style.position = 'fixed';
        button.style.top = config.position.includes('top') ? '30px' : 'auto';
        button.style.bottom = config.position.includes('bottom') ? '80px' : 'auto';
        button.style.left = config.position.includes('Left') ? '30px' : 'auto';
        button.style.right = config.position.includes('Right') ? '30px' : 'auto';
        button.addEventListener('click', () => {
          config.onclick();
          button.style.backgroundColor = 'grey';
          setTimeout(() => {
            button.style.backgroundColor = config.backgroundColor;
          },200);
        });
        button.style.color = config.color;
        button.style.backgroundColor = config.backgroundColor;
        
      }
  };
  
})();

