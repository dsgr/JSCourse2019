function query() {
    var argsArr = [].slice.call(arguments);
    var currArray = arguments[0];

    for (i = 1; i < argsArr.length; i++) {
        if (argsArr[i].name == 'filterIn') {
            currArray = argsArr[i].action(currArray);
        }
    }

    for (i = 1; i < argsArr.length; i++) {
        if (argsArr[i].name == 'select') {
            currArray = argsArr[i].action(currArray);
        }
    }
    return currArray;
}

function select() {
    var argsArr = [].slice.call(arguments);
    return {
        name: 'select',
        action: function (inArr) {
            var outArr = [];
            inArr.forEach(function (objItem, i, arr) {
                var outObj = {};
                argsArr.forEach(function (argItem, i, arr) {
                    outObj[argItem] = objItem[argItem];
                });
                outArr.push(outObj);
            });
            return outArr;
        }
    }

}

function filterIn() {
    var argsArr = [].slice.call(arguments);
    return {
        name: 'filterIn',
        action: function (inArr) {
            outArr = []
            inArr.forEach(function (objItem) {
                var isSuccessCheck = false;
                for (i = 0; i < argsArr.length; i = i + 2) {
                    var fieldName = argsArr[i];
                    var acceptedValues = argsArr[i + 1];

                    isSuccessCheck = acceptedValues.some(
                        function (value) { return value == objItem[fieldName] }
                    );
                    if (!isSuccessCheck) {
                        break;
                    }
                }

                if (isSuccessCheck) {
                    outArr.push(objItem)
                }
            });
            return outArr;
        }
    }
}

module.exports = {
    timeShift: function (date) {
        return {
            date: new Date(inDate),

            toString: function () {
                return this.date.getFullYear() + '-' +
                    ("00" + (this.date.getMonth() + 1)).slice(-2) + '-' +
                    ("00" + this.date.getDate()).slice(-2) + ' ' +

                    ("00" + this.date.getHours()).slice(-2) + ':' +
                    ("00" + this.date.getMinutes()).slice(-2);
            },

            add: function (num, unit) {
                switch (unit) {
                    case 'minutes':
                        this.date.setMinutes(this.date.getMinutes() + num);
                        this.value = this.toString();

                        return this;
                    case 'hours':
                        this.date.setHours(this.date.getHours() + num);
                        this.value = this.toString();
                        return this;
                    case 'days':
                        this.date.setDate(this.date.getDate() + num);
                        this.value = this.toString();
                        return this;
                    case 'months':
                        this.date.setMonths(this.date.getMonths() + num);
                        this.value = this.toString();
                        return this;
                    case 'years':
                        this.value = this.date.toISOString().slice(0, 16).replace("T", " ");
                        this.value = this.toString();
                        return this;
                }
            },

            subtrack: function (num, unit) {
                switch (unit) {
                    case 'minutes':
                        this.date.setMinutes(this.date.getMinutes() - num);
                        this.value = this.toString();
                        return this;
                    case 'hours':
                        this.date.setHours(this.date.getHours() - num);
                        this.value = this.toString();
                        return this;
                    case 'days':
                        this.date.setDate(this.date.getDate() - num);
                        this.value = this.toString();
                        return this;
                    case 'months':
                        this.date.setMonths(this.date.getMonths() - num);
                        this.value = this.toString();
                        return this;
                    case 'years':
                        this.date.setYears(this.date.getYears() - num);
                        this.value = this.toString();
                        return this;
                }
            }
        }
    },
    lib: {
        query: query,
        select: select,
        filterIn: filterIn
    }
};