function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    collection.forEach(callback);
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
  }
  return collection;
}
  
function myMap(collection, callback) {
  if (Array.isArray(collection)) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
    return result;
  } else if (typeof collection === 'object' && collection !== null) {
    const result = [];
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key]));
      }
    }
    return result;
  }
  return collection;
}

function myReduce(collection, callback, initialValue) {
  if (Array.isArray(collection)) {
    if (collection.length === 0) {
      if (initialValue !== undefined) {
        return initialValue;
      } else {
        throw new Error('Array cannot be empty');
      }
    }

    let accumulator = initialValue !== undefined ? initialValue : collection[0];

    for (let i = initialValue !== undefined ? 0 : 1; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }

    return accumulator;
  } else if (typeof collection === 'object' && collection !== null) {
    const keys = Object.keys(collection);

    if (keys.length === 0) {
      if (initialValue !== undefined) {
        return initialValue;
      } else {
        throw new Error('Object cannot be empty');
      }
    }

    let accumulator = initialValue !== undefined ? initialValue : collection[keys[0]];

    for (let i = initialValue !== undefined ? 0 : 1; i < keys.length; i++) {
      const key = keys[i];
      accumulator = callback(accumulator, collection[key], collection);
    }

    return accumulator;
  } else {
    throw new Error('Invalid collection type');
  }
}

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

function myFilter(collection, callback) {
  if (Array.isArray(collection)) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  } else if (typeof collection === 'object' && collection !== null) {
    const result = {};
    for (const key in collection) {
      if (collection.hasOwnProperty(key) && callback(collection[key])) {
        result[key] = collection[key];
      }
    }
    return result;
  } else {
    return []; // Return an empty array when no matching values are found
  }
}

function mySize(collection) {
  if (Array.isArray(collection)) {
      return collection.length; // For arrays, return the length
  } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length; // For objects, return the number of keys
  } else {
      return 0; // Return 0 for unsupported types or null/undefined
  }
}

function myFirst(collection, n = 1) {
  if (Array.isArray(collection)) {
      return collection.slice(0, n); // Slice the first n elements from the array
  } else {
      return undefined; // Return undefined for unsupported types
  }
}

function myLast(collection, n = 1) {
  if (Array.isArray(collection)) {
      return collection.slice(-n); // Slice the last n elements from the array
  } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      const values = Object.values(collection);
      const lastKeys = keys.slice(-n);
      const lastValues = values.slice(-n);
      return Object.fromEntries(lastKeys.map((key, index) => [key, lastValues[index]])); // Create an object from the last n keys and values
  } else {
      return undefined; // Return undefined for unsupported types
  }
}
