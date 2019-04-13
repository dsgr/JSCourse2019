//Подсказка: сюда можно складывать записи адресной книги.
var phoneBook = [];

//Здесь можно объявить переменные и функции, которые понядобятся вам для работы ваших функций

module.exports = {
    getWords: function (input) {
        return input.split("#")
            .slice(1)
            .map(
                function (item, i, arr) {
                    return item.split(" ")[0]
                }
            )
    },
    normalizeWords: function (inWords) {
        return inWords
            .map(function (item, i, arr) {
                return item.toLowerCase();
            })
            .filter(function (item, i, arr) {
                return arr.indexOf(item) === i;;
            })
            .join(", ");
    
    },
    addressBook: function (command) {
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
}
