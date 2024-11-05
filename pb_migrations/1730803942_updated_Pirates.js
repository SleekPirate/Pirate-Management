/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u6tbapbvztrqn4m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wo5frue1",
    "name": "Name",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "buf4tsqr",
    "name": "Crew_Role",
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
  const collection = dao.findCollectionByNameOrId("u6tbapbvztrqn4m")

  // remove
  collection.schema.removeField("wo5frue1")

  // remove
  collection.schema.removeField("buf4tsqr")

  return dao.saveCollection(collection)
})
