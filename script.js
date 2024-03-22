//Adding the functions to show and close the add meal section

    //Variables
    const addMealBtn = document.getElementById('addMealsBtn');
    const closeMealBtn = document.getElementById('close');
    const addMeal = document.getElementById('addMeal');
    const overlay = document.getElementById('overlay');

    //Functions
    function showAddMeal () {
        addMeal.style.display = ('flex');
        overlay.style.opacity = ('.9');
        overlay.style.zIndex = ('1');
    }
    function closeAddMeal () {
        addMeal.style.display = ('none');
        overlay.style.opacity - ('0');
        overlay.style.zIndex = ('-1');
    }

    //On click calls
    addMealBtn.onclick = showAddMeal;
    closeMealBtn.onclick = closeAddMeal;

//Function to add additional ingredients and directions in the add meal section

    //Variables
    const ingBtn = document.getElementById('ingBtn');
    const dirBtn = document.getElementById('dirBtn');
    const ingList = document.getElementById('ingList');
    const dirList = document.getElementById('dirList');

    //Functions
    function ingAdd () {
        let ingLi = document.createElement('li');
        let input = document.createElement('input');
        input.classList.add('ing');
        input.setAttribute('type', 'text');
        ingLi.appendChild(input);
        ingList.appendChild(ingLi);
    }
    function dirAdd () {
        let dirLi = document.createElement('li');
        let input = document.createElement('input');
        input.classList.add('dir');
        input.setAttribute('type', 'text');
        dirLi.appendChild(input);
        dirList.appendChild(dirLi);
    }

    //On click calls
    ingBtn.onclick = ingAdd;
    dirBtn.onclick = dirAdd;