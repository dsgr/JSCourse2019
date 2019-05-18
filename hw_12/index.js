function Collection() {
    _elements = []; // todo разобраться почему здесь без this
}

Collection.from = function(inArr){
    var collection = new Collection();
    collection.append(inArr);
    return collection;
}

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


var numbers = Collection.from([11,22,33]);
numbers.append(1);
numbers.append([2, 3]);

console.log(numbers.values());
console.log(numbers.count());
console.log(numbers.at(10));
numbers.removeAt(2);
console.log(numbers.values());
console.log(numbers.prototype);
