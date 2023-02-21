// Implement the removeProperty function which takes an object and property name, and does the following:

// If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.

function removeProperty(obj, prop) {
  
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  }
  else {
    return false;
  }
 
}