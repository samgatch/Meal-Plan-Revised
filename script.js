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

    //Creating new meals

        //Variables
        let meal;
        let name;
        let ingredients = [];
        let directions = [];
        let ingredientsLength;
        let ingredientsArray;
        let directionsLength;
        let directionsArray;
        const submit = document.getElementById('submit');

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
            console.log(meals);
        }

        //On click call
        submit.onclick = pullMeal;
