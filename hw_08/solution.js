function query(collection) {

}

function select() {

}

function filterIn(property, values) {

}

module.exports = {
    timeShift: function(date) {
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