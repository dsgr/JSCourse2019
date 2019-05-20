function Collection() {
    this._elements = [];
}

Collection.from = function (inArr) {
    var collection = new Collection();
    collection.append(inArr);
    return collection;
}

Collection.prototype.count = function () {
    return this._elements.length;
};

Collection.prototype.append = function () {
    var argsArr = [].slice.call(arguments);
    argsArr.forEach(function (item) {
        if (Array.isArray(item)) {
            this._elements = this._elements.concat(item);
        } else if (item instanceof Collection) {
            this._elements = this._elements.concat(item.values());
        } else {
            this._elements.push(item);
        }
    }, this);
};

Collection.prototype.values = function () {
    return this._elements;
}

Collection.prototype.at = function (position) {
    return typeof (this._elements[position - 1]) == "undefined"
        ? null
        : this._elements[position - 1];
}

Collection.prototype.removeAt = function (position) {
    if (position < 1 || position > this._elements.length) {
        return false;
    } else {
        var removedItmes = this._elements.splice(position - 1, 1);
        return removedItmes.length > 0;
    }
}


var numbers = Collection.from([11, 22, 33]);
numbers.append(1);
numbers.append([2, 3]);
numbers.append(Collection.from([55, 77]))

console.log(numbers.values());
console.log(numbers.count());
console.log(numbers.at(10));
numbers.removeAt(2);
numbers.removeAt(20);


console.log(numbers.values());
console.log(numbers.prototype);


