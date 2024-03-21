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