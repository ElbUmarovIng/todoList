const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],

    printAll: function () {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].text);

        }
        printAll: function () {
            for (let i = 0; i < this.items.length; i++) {
                return print([])
    
            }
    

    },

    add: function (text) {
        return this.items.unshift({
            text: text,
            completed: false,
        })

    },

    remove: function (index) {
        return this.items.splice(2, 2)
    },

    print: function (index) {
        return this.items[index].text
    },

    print: function (index) {
        if (this.items[index].completed === true) {
            return console.log(`[x] ${this.items[index].text}`);
        }

        return console.log(`[ ] ${this.items[index].text}`);
    },

    complete: function (index) {
        this.items[index].completed = true
    },

};
// todoList.remove()
// todoList.add('Перейти к следующему релизу')
// todoList.printAll()
// console.log(todoList.print(0));
// todoList.complete(0)