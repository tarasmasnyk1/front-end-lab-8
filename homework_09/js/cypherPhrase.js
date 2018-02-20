function cypherPhrase(object, string) {
    let arr = string.split('');
    return getTransformedArray(arr, function(element) {
        if (Object.keys(object).indexOf(element) !== -1) {
            return object[element];
        } else {
           return element;
   }