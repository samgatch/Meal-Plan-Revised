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

//Code Dealing with adding, storing, and manipulating meals

    //Base Variables
    let meals = [];
    let length;
    let meal;
    let name;
    let ingredients = [];
    let directions = [];
    let ingredientsLength;
    let ingredientsArray;
    let directionsLength;
    let directionsArray;
    const submit = document.getElementById('submit');
    const mealBox = document.getElementById('mealsStorage');

    //Function to create new meals in js
    function CreateMeal (name, ingredients, directions) {
        this.name = name;
        this.ingredients = ingredients;
        this.directions = directions;
    }

    //Function to add created meals to the meals array
    function pushMeal (name, ingredients, directions) {
        meal = new CreateMeal(name,ingredients,directions);
        meals.push(meal);
    }
    
    //Adding meals from the add meal box
    function pullMeal () {
        name = document.getElementById('name').value;
        ingredientsArray = document.getElementById('ingList').getElementsByTagName('li');
        ingredientsLength = ingredientsArray.length;
        for(let i=0; i<ingredientsLength; i++){
            ingredients.push(ingredientsArray[i].firstChild.value);
        };
        directionsArray = document.getElementById('dirList').getElementsByTagName('li');
        directionsLength = directionsArray.length;
        for(let i=0; i<directionsLength; i++){
            directions.push(directionsArray[i].firstChild.value);
        };
        pushMeal(name,ingredients,directions);
        ingredientsArray = [];
        ingredientsLength = 0;
        directionsArray = [];
        directionsLength = 0;
        ingredients = [];
        directions = [];
        closeAddMeal();
        displayMeals()
    }

    //Function to display the meals
    function displayMeals () {
        const mealStore = document.getElementById('mealsStorage');
        mealStore.innerHTML = '';
        length = meals.length;
        for(let i=0; i<length; i++) {
            const mealEl = document.createElement('div');
            mealEl.classList.add('mealEl');
            const mealTitle = document.createElement('h2');
            const mealIng = document.createElement('div');
            const ingList = document.createElement('ul');
            const mealDir = document.createElement('div');
            const dirList = document.createElement('ul');
            let titleData = meals[i].name;
            let ingData = meals[i].ingredients;
            let dirData = meals[i].directions;
            mealTitle.innerHTML = titleData;
            for(let j=0; j<ingData.length; j++) {
                const ingItem = document.createElement('li');
                ingItem.innerHTML = ingData[j];
                ingList.appendChild(ingItem);
            }
            for(let k=0; k<dirData.length; k++) {
                const dirItem = document.createElement('li');
                dirItem.innerHTML = dirData[k];
                dirList.appendChild(dirItem);
            }
            mealIng.appendChild(ingList);
            console.log(mealIng);
            mealDir.appendChild(dirList);
            console.log(mealDir);
            mealEl.appendChild(mealTitle);
            mealEl.appendChild(mealIng);
            mealEl.appendChild(mealDir);
            console.log(mealEl);
            mealStore.appendChild(mealEl);
        }
    }
    
    //On click call
    submit.onclick = pullMeal;
