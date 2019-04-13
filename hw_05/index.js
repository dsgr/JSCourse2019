/**1. Найти хештеги
Необходимо написать функцию, которая принимает один аргумент – строку
и возвращает массив хештегов, которые содержатся в строке. Знак решетки
(#) необходимо удалить.
Например:
getWords(‘Прохожу курс в компнии #intexsoft по #javascript’) – функция
должна вернуть [‘intexsoft’, ’ javascript’];
*/
function getWords(input) {
    return input.split("#")
        .slice(1)
        .map(
            function (item, i, arr) {
                return item.split(" ")[0]
            }
        )
}

console.log("Task #1");
console.log(
    getWords("Прохожу курс в компнии #intexsoft по #javascript")
);


/**
2. Убрать повторяющиеся слова
Необходимо написать функцию, которая принимает один аргумент – массив
со списком слов и возвращает строку, которая не содержит повторяющихся
слов, и все слова в этой строке приведены к нижнему регистру. Все слова в
итоговой строке должны быть разделены запятой и пробелом.
Например:
normalizeWords(["web", "intexsoft", "JavaScript", "Intexsoft", "script", "programming"])
должна вернуть строку: &quot;web, intexsoft, javascript, script, programming&quot; (все
слова в нижнем регистре, разделяются запятой и пробелом, нет
повторяющихся слов)
*/
function normalizeWords(inWords) {
    return inWords
        .map(function (item, i, arr) {
            return item.toLowerCase();
        })
        .filter(function (item, i, arr) {
            return arr.indexOf(item) === i;;
        })
        .join(", ");

}

console.log("Task #2");
console.log(
    normalizeWords(["web", "intexsoft", "JavaScript", "Intexsoft", "script", "programming"])
);


/**
3. Адресная книга
В этом задании необходимо реализовать функцию, через которую можно
управлять телефонной книгой.
Для управления телефонной книгой нужно реализовать три команды:
 ADD — добавляет контакт
 REMOVE_PHONE — удаляет номер
 SHOW — возвращает содержимое телефонной книги
addressBook("ADD Ivan 555-10-01,555-10-03");
addressBook("ADD Ivan 555-10-02");
console.info(addressBook ("SHOW"));
// Вывод:
// [&quot;Ivan: 555-10-01, 555-10-03, 555-10-02&quot;]
addressBook("REMOVE_PHONE 555-10-03");
addressBook("ADD Alex 555-20-01");
addressBook("SHOW");
// Вывод:
// [&quot;Alex: 555-20-01&quot;, &quot;Ivan: 555-10-01, 555-10-02&quot;]
addressBook("REMOVE_PHONE 555-20-01");
addressBook("SHOW");
// Вывод:
// [&quot;Ivan: 555-10-01, 555-10-02&quot;]
Гарантируется, что функция будет вызываться корректно, только со списком
перечисленных команд. Корректность входных данных проверять не нужно.
Имя команды пишется большими буквами, параметры разделяются одним
пробелом.
Гарантируется уникальность добавляемых телефонов.

Команда ADD
Добавляет контакт в телефонную книгу со списком телефонов. Телефоны
перечисляются через запятую. Если такой контакт существует, то команда
пополняет список телефонов контакта.
ADD Name phone1,phone2
Команда REMOVE_PHONE
Удаляет телефон из телефонной книги. Если телефон успешно удалён, то
функция должна вернуть true. Если такого телефона в телефонной книге не
существует, то возвращается false.
REMOVE_PHONE phone1
Команда SHOW
Возвращает массив контактов с их телефонами. Массив содержит строчки
вида: &quot;Имя: Телефон1, Телефон2&quot;. Массив должен быть отсортирован по
имени контакта. Телефоны идут в порядке добавления их в телефонную
книгу. Контакт с пустым списком телефонов не должен возвращаться.
ADD Contact2 phone4,phone3
ADD Contact1 phone1
ADD Contact1 phone2
SHOW
[
&quot;Contact1: phone1, phone2&quot;,
&quot;Contact2: phone4, phone3&quot;
] */
phoneBook = [];
function addressBook(command) {
    var comandAction = command.split(" ")[0];
    switch (comandAction) {
        case "ADD":
            var comandName = command.split(" ")[1];
            var comandPhones = command.split(" ")[2];
            if (phoneBook.some(function (item, pos, arr) {
                return item.name === comandName;
            })) { //если имя уже записано
                var arrPos;
                phoneBook.some(function (item, pos, arr) {
                    if (item.name === comandName) {
                        arrPos = pos;
                        return true;
                    }
                })
                phoneBook[arrPos].phones = phoneBook[arrPos].phones.concat(comandPhones.split(","));
            } else {
                phoneBook.push({
                    name: comandName,
                    phones: comandPhones.split(",")
                });
            }
            break;

        case "SHOW":
            phoneBook.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });

            return phoneBook
                .filter(function (item, pos, arr) {
                    return item.phones.length > 0;
                })
                .map(function (item, pos, arr) {
                    return item.name + ": " + item.phones.join(", ") + ";";

                })
            break;

        case "REMOVE_PHONE":
            var removePhone = command.split(" ")[1];
            if (phoneBook.every(function (item, pos, arr) {
                item.phones.indexOf(removePhone) === -1;
            })) {
                return false;

            } else {
                return phoneBook.some(
                    function (item, pos, arr) {
                        if (item.phones.indexOf(removePhone) != -1) {
                            item.phones.splice(pos, 1);
                            return true;
                        }
                    }
                );
            }
            break;
    }
}

console.log("Task #3");
addressBook("ADD Ivan 555-10-01,555-10-03");
addressBook("ADD Ivan 555-10-02");
addressBook("REMOVE_PHONE 555-10-01");
addressBook("ADD Alex 555-20-03");
console.log(phoneBook);
console.log(addressBook("SHOW"));
