const iconChanger =  (urls, delay) => {
    urls = urls || ['link1.jpg', 'link2.jpg', 'link3.jpg'];
    delay = delay || 2000;
  
    let counter = 0;
  
    setInterval(() => {
        if (counter < urls.length) {
            let link =
            document.querySelector("link[rel*='icon']") ||
            document.createElement('link');
    
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = urls[counter];
    
            document.getElementsByTagName('head')[0].appendChild(link);
        } else counter = 0;
    
        ++counter;
    }, delay);
};