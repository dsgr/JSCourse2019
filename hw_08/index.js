/**
 * 1. Управление временем
 * Необходимо реализовать дополнительные функции для управления датой и
 * временем.
 * var date = require('./index.js');
 * var time = date('2017-05-16 13:45')
 * .add(24, 'hours')
 * .subtract(1, 'months')
 * .add(3, 'days')
 * .add(15, 'minutes');
 * console.info(time.value);
 * // &quot;2017-04-20 14:00&quot;
 * В функцию всегда передается строка в правильном и полном формате.
 * Дополнительных проверок не требуется.
 * Формат даты — &quot;YYYY‒MM‒DD HH:SS&quot;, где YYYY — год, MM — месяц, DD
 * — день, HH — час, SS — минуты
 * В функции add/subtract всегда передается целое число
 * Гарантируется, что после всех манипуляций получится корректная дата.
 * Функции add/subtract
 * Каждая функция принимает первым аргументом количество единиц, на которое
 * нужно изменить дату, а вторым — единицу измерения.
 * Можно менять следующие значения: years (годы), months (месяцы), days (дни),
 * hours (часы), minutes (минуты)
 * В реализации советую использовать объект Date. В нём реализован правильный
 * переход через месяц, год, час.
 * Для решения задачи можно из функции date вернуть объект с методами. Чтобы
 * эти методы можно было вызывать цепочкой, из каждого метода нужно
 * возвращать сам объект.
 */
function timeShift(inDate) {
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
}

console.log('Task #1');
console.log(
    timeShift('2019-04-21 19:55').add(1, 'hours')
);


/**
 * 2. Выборка элементов коллекции
 * Необходимо написать библиотеку, которая упростит работу с коллекцией
 * однотипных объектов.
 * Для управления коллекцией нужно реализовать три функции:
 * query — функция, выполняющая запрос с заданными операциями;
 * select— операция выбора необходимых полей объектов;
 * filterIn— операция фильтрации объектов коллекции.
 * var friends = [
 * {
 * name: 'Сэм',
 * gender: 'Мужской',
 * email: 'email1@example.com',
 * favoriteFood: 'Картофель'
 * },
 * 
 * {
 * name: 'Эмили',
 * gender: 'Женский',
 * email: 'email2@example.com',
 * favoriteFood: 'Яблоко'
 * }
 * ];
 * var bestFriends = lib.query(
 * friends,
 * lib.select('name', 'gender', 'email'),
 * lib.filterIn('favoriteFood', ['Яблоко', 'Картофель'])
 * );
 * console.info(bestFriends);
 * [
 * { name: 'Сэм', gender: 'Мужской', email: 'email1@example.com' },
 * { name: 'Эмили', gender: 'Женский', email: 'email2@example.com' }
 * ]
 * 
 * После выполнения функции 'query' не должна измениться исходная коллекция.
 * Если в функцию 'query' передать только коллекцию, то вернётся её копия.
 * Операция 'select' должна игнорировать несуществующие в объекте поля.
 * Несколько операций 'select' должны отработать как одна с пересечёнными
 * аргументами. Например, если мы выбираем поля a и b, а затем b и c, то в
 * результате должно выбраться только поле b.
 * Несколько операций 'filterIn' должны отработать как одна с пересечёнными
 * аргументами. Например, если фильтруем поле по значениям a и b, а затем по b и
 * c, то в результате отфильтроваться должно только по значени b.
 * Операции должны выполняться в определённом порядке. В первую очередь
 * происходит фильтрация, а затем выборка полей. Таким образом, можно
 * фильтровать коллекцию даже по тем полям, которые не указаны в функции
 * select.
 * Порядок элементов после выполнения операций должен сохраниться.
 * Гарантируется, что функция 'query' будет вызываться корректно.
 * Дополнительную проверку аргументов делать не нужно.
 * Предполагается, что поля объектов имеют значения типа String или Number.
 * Функция 'query'
 * Выполняет запрос к коллекции. Принимает коллекцию и операции. Возвращает
 * коллекцию после применения всех операций. В качестве операций может быть
 * использован 'filterIn', 'select'.
 * lib.query(collection, operation1, operation2, ...)
 * Операция 'select'
 * 
 * Позволяет выбрать определённые поля объектов коллекции.
 * Принимаетсписокполей.
 * lib.select('fieldName1', 'fieldName2', ...)
 * Операция 'filterIn'
 * Позволяет отфильтровать коллекцию. Принимает название поля и допустимые
 * значения. После выполнения фильтрации должны остаться объекты, у которых
 * поле имеет одно из допустимых значений.
 * lib.filterIn('fieldName', ['acceptedValue1', 'acceptedValue1', ...])
 */
var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'email1@example.com',
        favoriteFood: 'Картофель'
    },
    {
        name: 'Сэм',
        gender: 'Мужской2',
        email: 'email111111@example.com',
        favoriteFood: 'Картофель111'
    },

    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'email2@example.com',
        favoriteFood: 'Яблоко'
    }
];

/** 
 * Принимает список полей и возвращает ф-циую,
 * котоая принимает массив объектов и возвращает 
 * новый массив новых объектов с заданными полями 
 */
function select() {
    var argsArr = [].slice.call(arguments);
    return function (inArr) {
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

console.log(
    select('name', 'email')(friends)
);


/**
 * Принимает имя поля и список доступных значений
 * filterIn('fieldName', ['acceptedValue1', 'acceptedValue1', ...])
 * Возвращает ф-цию
 */
function filterIn() {
    var argsArr = [].slice.call(arguments);
    return function (inArr) {
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

console.log(
    filterIn('name', ['Сэм'])(friends)
);


/**
 * Выполняет запрос к коллекции. Принимает коллекцию и операции. Возвращает
коллекцию после применения всех операций. В качестве операций может быть
использован 'filterIn', 'select'.
lib.query(collection, operation1, operation2, ...)
 */

function query() {
    var argsArr = [].slice.call(arguments);
    var currArray = arguments[0];
    for (i = 1; i < argsArr.length; i++) {
        currArray = argsArr[i](currArray);
    }
    return currArray;
}

console.log('Task #2')
console.log(
    query(
        friends,
        select('name'),
        filterIn('name', ['Сэм'])
    )
);



