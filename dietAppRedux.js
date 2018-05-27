
// The types of actions that you can dispatch to modify the state of the store
export const types = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    NEWVIEW: "NEWVIEW"
  };
  
  // Helper functions to dispatch actions, optionally with payloads
  export const actionCreators = {
    add: item => {
      return { type: types.ADD, payload: item };
    },
    remove: index => {
      return { type: types.REMOVE, payload: index };
    },
    newview: viewName => {
      return { type: types.NEWVIEW, payload: viewName }
    }
  };
  
  // Function to handle actions and update the state of the store.
  // Notes:
  // - The reducer must return a new state object. It must never modify
  //   the state object. State objects should be treated as immutable.
  // - We set \`state\` to our \`initialState\` by default. Redux will
  //   call reducer() with no state on startup, and we are expected to
  //   return the initial state of the app in this case.
  export const reducer = (state = initialState, action) => {
    const { todos } = state;
    const { type, payload } = action;
  
    switch (type) {
      case types.ADD: {
        return {
          ...state,
          todos: [payload, ...todos]
        };
      }
      case types.REMOVE: {
        return {
          ...state,
          todos: todos.filter((todo, i) => i !== payload)
        };
      }
      case types.NEWVIEW: {
        return {
          ...state,
          view: payload
        }
      }
    }
    return state;
  };

  
  // Initial state of the store
  const initialState = {
    todos: ["Click to remove", "Learn React", "Write Code", "Ship App"],
    view: 'landing',
    meals: [{
        "mealName": "Penne Carbonara",
        "MealId": "470612",
        "ingredients": [
          {"ingredientName": "Pancetta", "amount": "30g"},
          {"ingredientName": "Double Cream", "amount": "40ml"},
          {"ingredientName": "Penne", "amount": "200g"},
          {"ingredientName": "Parmesan", "amount": "50g"},
          {"ingredientName": "Egg", "amount": "1"},
          {"ingredientName": "Onion", "amount": "50g"}
        ],
        "method":[
          {"description": "Fry onion and pancetta in hot pan until golden. Begin to boil pasta until al dente."},
          {"description": "Once al dente, drain almost all the water and mix pasta with pancetta & onion."},
          {"description": "Add double cream and egg and mix in before adding parmasan to taste."}
        ],
        "image":{
          "src":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
          "href":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
          "tag":"Penne Carbonara"}
    },
    {
      "mealName": "Chicken Fajitas",
      "MealId": "470612",
      "ingredients": [
        {"ingredientName": "Chicken", "amount": "80g"},
        {"ingredientName": "Peppers", "amount": "100g"},
        {"ingredientName": "Tortilla Wraps", "amount": "1"},
        {"ingredientName": "Cheddar", "amount": "50g"},
        {"ingredientName": "Jalepeno Peppers", "amount": "10g"},
        {"ingredientName": "Onion", "amount": "50g"}
      ],
      "method":[
        {"description": "Fry onion and peppers. Separately fry chicken in sealed pan"},
        {"description": "Whack a ton of spices in there and mix it like mad"},
        {"description": "Throw it in a wrap with some guac & sour cream. Go gnarly on it. But don't forget cheese."}
      ],
      "image":{
        "src":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
        "href":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
        "tag":"Penne Carbonara"}
    },
    {
      "mealName": "Chicken Pad Thai",
      "MealId": "470612",
      "ingredients": [
        {"ingredientName": "Chicken", "amount": "80g"},
        {"ingredientName": "Noodles", "amount": "100g"},
        {"ingredientName": "Peanuts", "amount": "1"},
        {"ingredientName": "Fish Sauce", "amount": "50g"},
        {"ingredientName": "Sumting", "amount": "10g"},
        {"ingredientName": "Onion", "amount": "50g"}
      ],
      "method":[
        {"description": "Fry onion and peppers. Separately fry chicken in sealed pan"},
        {"description": "Whack a ton of spices in there and mix it like mad"},
        {"description": "Throw it in a wrap with some guac & sour cream. Go gnarly on it. But don't forget cheese."}
      ],
      "image":{
        "src":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
        "href":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
        "tag":"Penne Carbonara"}
    },
    {
      "mealName": "Ceasar Salad",
      "MealId": "470612",
      "ingredients": [
        {"ingredientName": "Chicken", "amount": "80g"},
        {"ingredientName": "Lettuce", "amount": "100g"},
        {"ingredientName": "Anchovies", "amount": "1"},
        {"ingredientName": "Parmesan", "amount": "50g"},
        {"ingredientName": "Tommies", "amount": "10g"},
        {"ingredientName": "Mayonaise", "amount": "50g"}
      ],
      "method":[
        {"description": "Fry onion and peppers. Separately fry chicken in sealed pan"},
        {"description": "Whack a ton of spices in there and mix it like mad"},
        {"description": "Throw it in a wrap with some guac & sour cream. Go gnarly on it. But don't forget cheese."}
      ],
      "image":{
        "src":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
        "href":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
        "tag":"Penne Carbonara"}
    },
    {
      "mealName": "Feta Salad",
      "MealId": "470612",
      "ingredients": [
        {"ingredientName": "Feta", "amount": "80g"},
        {"ingredientName": "Peppers", "amount": "100g"},
        {"ingredientName": "Rocket", "amount": "1"},
        {"ingredientName": "Red Onion", "amount": "50g"},
        {"ingredientName": "Tomatoes", "amount": "10g"},
        {"ingredientName": "Balsamic Vinegar", "amount": "50g"}
      ],
      "method":[
        {"description": "Fry onion and peppers. Separately fry chicken in sealed pan"},
        {"description": "Whack a ton of spices in there and mix it like mad"},
        {"description": "Throw it in a wrap with some guac & sour cream. Go gnarly on it. But don't forget cheese."}
      ],
      "image":{
        "src":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
        "href":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
        "tag":"Penne Carbonara"}
    }]};
  