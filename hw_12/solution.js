module.exports = Collection;

/**
 * Конструктор коллекции
 */
function Collection() {
    _elements = [];
}

// Методы коллекции
Collection.prototype.count = function () {
    return _elements.length;
};

Collection.prototype.append = function () {
    var argsArr = [].slice.call(arguments);
    argsArr.forEach(function (item) {
        if (Array.isArray(item)) {
            _elements = _elements.concat(item);
        } else {
            _elements.push(item);
        }
    });
};

Collection.prototype.values = function () {
    return _elements;
}

Collection.prototype.at = function (position) {
    return typeof (_elements[position - 1]) == "undefined"
        ? null
        : _elements[position - 1];
}

Collection.prototype.removeAt = function (position) {
    _elements.splice(position - 1, 1);
}

/**
 * Создание коллекции из массива значений
 */
Collection.from = function(inArr){
    var collection = new Collection();
    collection.append(inArr);
    return collection;
}