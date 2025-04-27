document.addEventListener('DOMContentLoaded', () => {
  MathJax = {
    tex: {
      inlineMath: [
        ['$', '$'],
      ['\\(', '\\)']
      ],
      displayMath: [
        ['$$', '$$'],
        ['\\[', '\\]']
      ],
      tags: 'ams'
    }
  };
});