//Adding the functions to show and close the add meal section

    //Variables
    const addMealBtn = document.getElementById('addMealsBtn');
    const closeMealBtn = document.getElementById('close');
    const addMeal = document.getElementById('addMeal');

    //Functions
    function showAddMeal () {
        addMeal.style.display = ('flex');
    }
    function closeAddMeal () {
        addMeal.style.display = ('none');
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

    //Variables
    let meals = [];
    let length;
    let meal;
    let name;
    let storage = [];
    let ingredients = [];
    let directions = [];
    let ingredientsLength;
    let ingredientsArray;
    let directionsLength;
    let directionsArray;
    let ingLiList = document.getElementById('ingList');
    let dirLiList = document.getElementById('dirList');
    const submit = document.getElementById('submit');
    const mealBox = document.getElementById('mealsStorage');
    let mealsStorageId;
    let mealsJSON;

    //Pulling stored meals
    length = localStorage.getItem('mealsLength');
        function getStorage () {
            for(let i=0; i<length; i++){
                storage.push(JSON.parse(localStorage.getItem('meal' + i)));
            }
            
            if(storage === null) {
                console.log('No stored meals');
            }
            else {
                meals = storage;
            }
        }   

    getStorage();
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
        for(let i=0; i<ingredientsArray.length; i++){
            ingLiList.removeChild(ingLiList.lastChild);
        }
        for(let i=0; i<directionsArray.length; i++){
            dirLiList.removeChild(dirLiList.lastChild);
        }
        pushMeal(name,ingredients,directions);
        document.getElementById('name').value = null;
        dirLiList.firstElementChild.firstElementChild.value = null;
        ingLiList.firstElementChild.firstElementChild.value = null;
        ingredientsArray = [];
        ingredientsLength = 0;
        directionsArray = [];
        directionsLength = 0;
        ingredients = [];
        directions = [];
        closeAddMeal();

        //Storing meals
        for (let i=0; i<meals.length; i++){
            mealsStorageId = 'meal' + i;
            mealsJSON = JSON.stringify(meals[i]);
            localStorage.setItem(mealsStorageId, mealsJSON);
        }
        localStorage.setItem('mealsLength', meals.length);
        displayMeals();
    }

    //Function to display the meals
    function displayMeals () {
        const mealStore = document.getElementById('mealsStorage');
        mealStore.innerHTML = '';
        length = meals.length;
        for(let i=0; i<length; i++) {
            const mealEl = document.createElement('div');
            mealEl.classList.add('mealEl');
            mealEl.id = 'meal' + i;
            const mealTitle = document.createElement('h2');
            const mealIng = document.createElement('div');
            const ingList = document.createElement('ul');
            const mealDir = document.createElement('div');
            const dirList = document.createElement('ul');
            if (meals[i] === null){
                console.log('invalid meal');
            }
            else {
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
                mealDir.appendChild(dirList);
                mealEl.appendChild(mealTitle);
                mealEl.appendChild(mealIng);
                mealEl.appendChild(mealDir);
                mealStore.appendChild(mealEl);
            }
        }
    }

    //Function to remove meals
    const removeMealBtn = document.getElementById('removeMealsBtn');

    function removeMeal () {
        let removeInput = document.getElementById('removeInput');
        for(let i=0; i<length;i++) {
            if(meals[i].name === removeInput.value){
                localStorage.removeItem('meal' + i);
                meals.splice(i,1);
                length -= 1;
                for (let i=0; i<meals.length; i++){
                    mealsStorageId = 'meal' + i;
                    mealsJSON = JSON.stringify(meals[i]);
                    localStorage.setItem(mealsStorageId, mealsJSON);
                }
                localStorage.setItem('mealsLength', meals.length);
                length = meals.length;
            }
        }
        removeInput.value = '';
        displayMeals();
    }

    removeMealBtn.onclick = removeMeal;

    displayMeals();

    //On click call
    submit.onclick = pullMeal;


//Getting the meals for the week

    //variables
    const weekBtn = document.getElementById('getMeals');
    var tempMeals;
    var total;
    var tempPicked;
    var picked;

    function addWeek () {
        tempMeals = meals.slice();
        total = meals.length;
        tempPicked;
        picked = [];
        for (let i=0; i < 7; i++) {
            tempPicked = tempMeals[Math.floor(Math.random() * total)];
            picked.push(tempPicked);
            index = tempMeals.indexOf(tempPicked);
            tempMeals.splice(index,1);
            total -= 1;
        }
        return picked;
    }

    //Function to get meals on button click
    function getWeek () {
        let picked = addWeek();
        let dayName = document.getElementsByClassName('nameShow');
        let dayIng = document.getElementsByClassName('ingShow');
        let dayDir = document.getElementsByClassName('dirShow');
        for(let i=0;i<7;i++){
            dayName[i].innerHTML = picked[i].name;
            for(let j=0;j<picked[i].ingredients.length;j++){
                if(picked[i].ingredients[j] === picked[i].ingredients[picked[i].ingredients.length - 1]){
                    dayIng[i].innerHTML += picked[i].ingredients[j];
                }
                else {
                    dayIng[i].innerHTML += picked[i].ingredients[j] + ", ";
                }
            }
            for(let k=0;k<picked[i].directions.length;k++){
                if(picked[i].directions[k] === picked[i].directions[picked[i].directions.length - 1]){
                    dayDir[i].innerHTML += picked[i].directions[k];
                }
                else {
                    dayDir[i].innerHTML += picked[i].directions[k] + ", ";
                }
            }
        }
        
    }

    //on click call
    weekBtn.onclick = getWeek;
