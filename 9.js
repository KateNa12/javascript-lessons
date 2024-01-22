// ДЗ1
function myBlend(arr) {
    for(let i = 0; i < arr.length; i++) {
        let randIdx = Math.round(Math.random() * (arr.length - 1));
        let tmp = arr[randIdx];
        arr[randIdx] = arr[i];
        arr[i] = tmp;
    }
}

let arr2 = ["a", 5, 'abc'];
myBlend(arr2);
console.log(arr2);

let arr = [0,1,2,3,4,5,6,7,8,9,10];
myBlend(arr);
console.log(arr);


// ДЗ2
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ],
    findValueByKey: function(companyName) {
        if(this.name == companyName) {
            return console.log(this);
        }
        let result = this.findValueByKeyInArr(companyName, this.clients);
        if(result != null) {
            console.log(result);
        } else {
            console.log('No such company');
        }
    },
    findValueByKeyInArr: function(companyName, arr) {
        for(let i in arr) {
            let client = arr[i];
            if (client.name == companyName) {
                return client;
            }
            if (client.partners != undefined) {
                let result = this.findValueByKeyInArr(companyName, client.partners);
                if (result != null) {
                    return result;
                }
            }            
        }
        return null;
    },
};

company.findValueByKey('Велика Компанія');
company.findValueByKey('Клієнт 1.2');
