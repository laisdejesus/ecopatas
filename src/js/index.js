function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const all = document.getElementById("all-animals");
  animateValue(all, 0, 2916, 5000);

  const dogs = document.getElementById("dogs");
  animateValue(dogs, 0,  1301, 5000);

  const cats = document.getElementById("cats");
  animateValue(cats,  0, 1611, 5000);

  const others = document.getElementById("other-animals");
  animateValue(others, 0, 4, 5000);