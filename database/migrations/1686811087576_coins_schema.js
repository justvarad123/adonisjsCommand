'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoinsSchema extends Schema {
  up () {
    this.create('coins', (table) => {
      table.string('id',254);
      table.string('symbol',254);
      table.string('name',254);
      table.json('platforms');
    })
  }

  down () {
    this.drop('coins')
  }
}

module.exports = CoinsSchema
