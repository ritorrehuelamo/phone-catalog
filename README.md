# Phone catalog

An API for get a phone catalog, and a phone by id.

```GET /phone```

```GET /phone/:id```

You can create an order with name, surname, email and a list of phones,
in the response you get your information and the total price of the 
phones you want, with the currency.

```POST /phone```

```javascript
  request:
  {
    "name": string,
    "surname": string,
    "email": string,
    "phones": [
      {
        "name": "string"
      }
    ]
  }

  response:
  {
    "data": {
      "name": string,
      "surname": string,
      "email": string,
        "price": {
            "currency": string,
            "total": number
        }
    }
}
```