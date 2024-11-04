/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "torv40knaw68l2c",
    "created": "2024-11-04 17:03:39.368Z",
    "updated": "2024-11-04 17:03:39.368Z",
    "name": "Crews",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4sy4i7va",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tlyujanb",
        "name": "shipName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("torv40knaw68l2c");

  return dao.deleteCollection(collection);
})
