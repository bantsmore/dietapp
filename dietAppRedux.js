// The types of actions that you can dispatch to modify the state of the store
export const types = {
    ADD: "ADD",
    REMOVE: "REMOVE"
  };
  
  // Helper functions to dispatch actions, optionally with payloads
  export const actionCreators = {
    add: item => {
      return { type: types.ADD, payload: item };
    },
    remove: index => {
      return { type: types.REMOVE, payload: index };
    }
  };
  
  // Initial state of the store
  const initialState = {
    todos: ["Click to remove", "Learn React", "Write Code", "Ship App"],
    view: 'meal',
    meal: {
        "ingredientCollectionId": "Penne Carbonara",
        "NutritionDatabaseId": "470612",
        "ingredients": [
          {"ingredientName": "pancetta", "amount": "30g"},
          {"ingredientName": "double cream", "amount": "40ml"},
          {"ingredientName": "penne", "amount": "200g"},
          {"ingredientName": "parmesan", "amount": "50g"},
          {"ingredientName": "egg", "amount": "1"},
          {"ingredientName": "onion", "amount": "50g"}
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
    }
  
    return state;
  };
  