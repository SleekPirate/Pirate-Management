/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5zzc0xvoiy0gp6o")

  // remove
  collection.schema.removeField("dyoxztij")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ipbsgyrp",
    "name": "500000000_Belly",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5zzc0xvoiy0gp6o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dyoxztij",
    "name": "value",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("ipbsgyrp")

  return dao.saveCollection(collection)
})
