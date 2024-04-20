var model = {
  todos: [], // empty array
  hash: "#/" // the hash in the url (for routing)
}

/**
 * `update` transforms the `model` based on the `action`.
 * @param {String} action - the desired action to perform on the model.
 * @param {Object} model - the App's (current) model (or "state").
 * @return {Object} new_model - the transformed model.
 */
function update(action, model) {
  switch (action) {                  // action (String) determines which case
    default:                         // if action unrecognised or undefined,
      return model;                  // return model unmodified
  }    // default? https://softwareengineering.stackexchange.com/a/201786/211301
 }

module.exports = {
  model,
  update
}