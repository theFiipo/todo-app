var model = {
  todos: [], 
  hash: "#/" 
}

/**
 * `update` transforms the `model` based on the `action`.
 * @param {String} action - the desired action to perform on the model.
 * @param {Object} model - the App's (current) model (or "state").
 * @param {String} data - data we want to "apply" to the item. e.g: item Title.
 * @return {Object} new_model - the transformed model.
 */
function update(action, model, data) {
  var new_model = JSON.parse(JSON.stringify(model)) // "clone" the model
  switch (action) {   
    case 'ADD':
      new_model.todos.push({
        id: model.todos.length + 1,
        title: data,
        done: false,
      });
      break;    
    case 'TOGGLE':
      new_model.todos.forEach(element => {
        if (element.id == data) {
          element.done = !element.done;
        }
      });;
      break;            
    default:                         
      return model;                  
  }
  return new_model;   
 }

module.exports = {
  model,
  update
}