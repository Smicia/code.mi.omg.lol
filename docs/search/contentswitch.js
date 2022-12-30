function chooseEnglish() {
    // Select all elements with the 'english' class
    const englishes = document.querySelectorAll('.english');
  
    // Iterate over each element and update its style
    englishes.forEach(english => {
      english.style.display = 'block';
    });
  
    // Select all elements with the 'french' class
    const frenches = document.querySelectorAll('.french');
  
    // Iterate over each element and update its style
    frenches.forEach(french => {
      french.style.display = 'none';
    });
  }
  
  function choisissezFrancais() {
    // Select all elements with the 'english' class
    const englishes = document.querySelectorAll('.english');
  
    // Iterate over each element and update its style
    englishes.forEach(english => {
      english.style.display = 'none';
    });
  
    // Select all elements with the 'french' class
    const frenches = document.querySelectorAll('.french');
  
    // Iterate over each element and update its style
    frenches.forEach(french => {
      french.style.display = 'block';
    });
  }
  