var typed = new Typed('', {
  strings: ['', 'Welcome to baily.at x sebos.ch'],
  smartBackspace: true,
  typeSpeed: 100,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  startDelay: 100,
  onComplete: (self) => {
    self.showCursor = false;
  },
});
