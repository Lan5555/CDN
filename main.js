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
  
  
  return {
    FloatingActionButton:function(child = {}) {
      const defaultButton = {
        text:'<strong style="font-size: 22pt;">+</strong>',
        position: 'bottomRight',
        backgroundColor:'plum',
        color:'white',
        onclick: () => {}
      }
      
      const config = {...defaultButton, ...child}
      this.renderButton(config);
      },
      
      renderButton: function(config){
        let button = document.createElement('button');
        document.body.appendChild(button);
        
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

const nJListTile = (function(){
  
  
 return {
   ListTile: function(params = {}) {
     const defaultList = {
       title:'Content',
       leading:'Icon',
       trailing:'>',
       iconColor:'black',
       actionColor: 'black',
       titleColor:'black',
       onTrailingClick: () => {}
     }
     const config = {...defaultList, ...params}
     this.showTile(config);
   },
   showTile: function(config) {
     let listTile = document.createElement('div');
     let leading = document.createElement('p');
     let trailing = document.createElement('p');
     let title = document.createElement('p');
     listTile.appendChild(leading);
     listTile.appendChild(title);
     listTile.appendChild(trailing);
     document.body.appendChild(listTile);
     leading.innerHTML = config.leading
     ;
     title.innerHTML = config.title;
     trailing.innerHTML = config.trailing;
     leading.style.color = config.iconColor;
     trailing.style.color = config.actionColor;
     title.style.color = config.titleColor;
     
     leading.classList.add('leading');
     trailing.classList.add('trailing');
     title.classList.add('title');
     listTile.classList.add('listtile');
     trailing.addEventListener('click', () => {
       config.onTrailingClick();
     });
   }
   
 }
  
})();

const nJContainer = (function() {
  return {
    Container: function(params = {}) {
      const defaultStyle = {
        width: '100%',
        height: '200px',
        borderRadius: '0',
        border: 'none',
        padding: '5px',
        margin: '0',
        backgroundColor: 'white',
        item1: null,
        item2:null,
        item3:null,
        item4:null
        // Default to null, since we expect an element, not a string
      };

      const config = { ...defaultStyle, ...params };
      this.displayContainer(config);
    },

    displayContainer: function(config) {
      const div = document.createElement('div'); // Create a new div each time
      div.classList.add('con');
      div.style.width = config.width;
      div.style.height = config.height;
      div.style.border = config.border;
      div.style.padding = config.padding;
      div.style.margin = config.margin;
      div.style.borderRadius = config.borderRadius;
      div.style.backgroundColor = config.backgroundColor;
      if(config.append instanceof HTMLElement){
      div.appendChild(config.item1)
      div.appendChild(config.item2)
      div.appendChild(config.item3)
      div.appendChild(config.item4)
      }
      document.body.appendChild(div);
    }
  };
})();

