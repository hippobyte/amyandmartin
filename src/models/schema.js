export const schema = {
    "models": {
        "RSVPs": {
            "name": "RSVPs",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "RSVPs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Guests": {
            "name": "Guests",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "latName": {
                    "name": "latName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "relationship": {
                    "name": "relationship",
                    "isArray": false,
                    "type": {
                        "enum": "Relationship"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "RSVPs": {
                    "name": "RSVPs",
                    "isArray": false,
                    "type": {
                        "model": "RSVPs"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "guestsRsvPsId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Guests",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Relationship": {
            "name": "Relationship",
            "values": [
                "ID",
                "BRIDE",
                "GROOM"
            ]
        }
    },
    "nonModels": {},
    "version": "3e3e628483fbe6ffbcb6f1205a97fc22"
};