const { Command } = use('@adonisjs/ace');
var axios = require("axios");
const database = use('Database');

class Quote extends Command {
    static get signature() {
        return 'store:data';
    }

    static get description() {
        return 'Fetch the data from Coingecko API and stores the data into database';
    }

    async handle(args, options) {
        axios.get("https://api.coingecko.com/api/v3/coins/list?include_platform=true")
            .then(async (res) => {
                await database.table('coins').returning('symbol').insert(res.data);
            }).then(() => {
                console.log("Successfully added the data into database!");
                database.close();
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

module.exports = Quote;
