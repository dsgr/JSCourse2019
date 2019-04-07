/**
 * 1. Проверка времени на корректность
 * В этом задании необходимо проверить, что числа составляют корректное время.
 * Необходимо реализовать функцию, первым аргументом в которую передается
 * количество часов в 24-часовом формате, вторым – количество минут. Функция
 * должна вернуть логическое значение true или false, что будет означать
 * корректность времени.
 * Например:
 * isTimeValid(14, 43); должнавернуть true
 * isTimeValid(32, 43); должна вернуть false
 */
function isTimeValid(hours, minutes) {
    return hours <= 23 && hours >= 0 &&
        minutes <= 59 && hours >= 0;
}

console.log("Task #1");
console.log(isTimeValid(14, 05));
console.log(isTimeValid(14, 99));


/** 
 * 2. Добавление минут ко времени.
 * В этом задании необходимо реализовать функцию, которая увеличивает время
 * на заданное количество минут.Первым аргументом в функцию передается
 * количество часов в 24-часовом формате, вторым – количество минут, третьим –
 * произвольное количество минут, которое необходимо добавить к указанному
 * времени.
 * Например:
 * addMinutes(12, 25, 30); должна вернуть строку со значением 12:55
 * Например:
 * addMinutes(23, 40, 83); должна вернуть строку со значением 01:03
 */
function addMinutes(hours, minutes, addMinutes) {
    totalMinutes = hours * 60 + minutes + addMinutes;

    resultHours = Math.floor(totalMinutes / 60) % 24;
    resultHours = ("0" + resultHours).slice(-2);

    resultMinutes = totalMinutes % 60
    resultMinutes = ("0" + resultMinutes).slice(-2);

    return resultHours + ":" + resultMinutes;
}

console.log("Task #2");
console.log(addMinutes(12, 25, 30));
console.log(addMinutes(23, 40, 83));


/**
 * 3. Определение поры года
 * Необходимо реализовать функцию, которая вернет название поры года в виде
 * строки. Функция принимает один аргумент – номер месяца.
 * Например:
 * getSeason(1); должна вернуть строку со значением Зима
 * getSeason(7); должна вернуть строку со значением Лето
 */
function getSeason(month) {
    if (month < 1 || month > 12) {
        throw "Неверный номер месяца";
    }

    if (month == 12 || month <= 2) {
        return "Зима";
    } else if (month <= 5) {
        return "Весна";
    } else if (month <= 8) {
        return "Лето";
    } else {
        return "Осень";
    }
}

console.log("Task #3");
console.log(getSeason(1) + getSeason(5) + getSeason(7) + getSeason(10));
//console.log(getSeason(155));


/**
 * 4. Склонения слова «День»
 * Необходимо реализовать функцию, которая вернет верное склонение слова
 * «День» виде строки. Функция принимает один аргумент – количество дней.
 * Например:
 * getDayDeclension(2); должна вернуть строку со значением Дня
 * getDayDeclension(1); должна вернуть строку со значением День
 * getDayDeclension(7); должна вернуть строку со значением Дней
 */
function getDayDeclension(number) {
    lastDigit = number % 10;
    switch (lastDigit) {
        case 1:
            return "День";
        case 2:
        case 3:
        case 4:
            return "Дня";
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            return "Дней";
    }
}

console.log("Task #4");
console.log(1 + getDayDeclension(1));
console.log(3 + getDayDeclension(3));
console.log(9 + getDayDeclension(9));


/**
 * 5. В поисках суммы.
 * Необходимо реализовать функцию, которая вернет числовое значение суммы в
 * зависимости от введенного аргумента. Функция принимает один аргумент –
 * положительное целое число.
 * Например:
 * getSumm(6); должна вывести 21
 * Алгоритм расчета суммы: getSumm(6) –&gt; 1+2+3+4+5+6
 */
function getSumm(number) {
    if (number == 1) {
        return 1;
    } else {
        return number + getSumm(number - 1);
    }
}

console.log("Task #5");
console.log(getSumm(6));


/**
 * 6. Таблица умножения.
 * Необходимо реализовать функцию, которая выведет в консоль таблицу
 * умножения до 10. Функция принимает один аргумент – число, и должна
 * вывести в консоль таблицу умножения для этого числа.
 */
function multiplyTable(number) {
    for (i = 1; i <= 10; i++) {
        console.log(number + " * " + i + " = " + number * i);
    }
}

console.log("Task #6");
console.log(multiplyTable(178));


/**
 * 7. 1. Попадание в цель.
 * Необходимо реализовать две функции, которые определяют, попадает ли точка
 * внутрь графика
 *
 * если (cirX-x)^2 + (cirY-y)^2 < R^2 - попадает
 */
function isPointInsideRadius(x, y) {
    var cirX = 3, cirY = 5, cirRadius = 4;
    return Math.pow(cirX - x, 2) + Math.pow(cirY - y, 2) <= Math.pow(cirRadius, 2);
}

console.log("Task #7.1");
console.log("Попадает " + isPointInsideRadius(0, 4))
console.log("Не попадает " + isPointInsideRadius(15, 44))


/**
 * 7. 2. Попадание в цель.
 * Необходимо реализовать две функции, которые определяют, попадает ли точка
 * внутрь графика
 *
 * Ax+Bу+С>0 если точка лежит выше прямой и Ax+Bу+С<0, если ниже
 
 * 21
 * 34
 * 
 * 1: a( 5,0)  b(0,  3)
 * 0 = -0.6x + 3 - y
 * 
 * 2: a(-7,0)  b(0,  4)
 * 0 = 4/7(x +7) - y
 *  
 * 3: a(-8,0)  b(0,-12)
 * 0 = -1.5(x+8) - y
 * 
 * 4: a(0,-2)  b(5,  0)
 * 0 = 0.4x - y - 2
 * 
 */
function isPointInsideShape(x, y) {
    //ниже прямых
    l1 = -0.6 * x + 3 - y > 0;
    l2 = 4 / 7 * (x + 7) - y > 0;
    //выше прямых
    l3 = -1.5 * (x + 8) - y < 0;
    l4 = 0.4 * x - y - 2 < 0;

    return l1 && l2 && l3 && l4;
}

console.log("Task #7.2")
console.log("Попадает " + isPointInsideShape(0, 0))
console.log("Не попадает " + isPointInsideShape(99, 99))

