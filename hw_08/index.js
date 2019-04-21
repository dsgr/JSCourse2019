/**
 * 1. Управление временем
 * Необходимо реализовать дополнительные функции для управления датой и
 * временем.
 * var date = require(&#39;./index.js&#39;);
 * var time = date(&#39;2017-05-16 13:45&#39;)
 * .add(24, &#39;hours&#39;)
 * .subtract(1, &#39;months&#39;)
 * .add(3, &#39;days&#39;)
 * .add(15, &#39;minutes&#39;);
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



















