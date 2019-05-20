module.exports = Collection;

/**
 * Конструктор коллекции
 */
function Collection() {
    this._elements = [];
}

// Методы коллекции
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
};

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

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (inArr) {
    var collection = new Collection();
    collection.append(inArr);
    return collection;
}