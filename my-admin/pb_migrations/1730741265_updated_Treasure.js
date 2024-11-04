/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5zzc0xvoiy0gp6o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ipbsgyrp",
    "name": "Value",
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

  // update
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
})
