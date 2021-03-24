var typed = new Typed('#animateText', {
  strings: ['mountain biking', 'programming', 'photography'],
  smartBackspace: true,
  typeSpeed: 100,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  startDelay: 100,
  // loop: true,
  // loopCount: Infinity,
  onComplete: (self) => {},
});
