function collectIds(movies) {
    let best = getFilteredArray(movies, function(element) {
        return element.rating > 3;
    });
   