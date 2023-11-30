# Endpoint 

## Open Ai
### GET /openai/menu 

## Description

- Create Menu With Ai Based On User Calory Limit And Extra Restriction



## Request

- Headers 
````json
{
    "access_token": "string"
}
````

## Response

_200 - Ok
````json
{
    "breakfast": "string",
    "breakfastCalorie": "integer",
    "lunch": "string",
    "lunchCalorie": "integer",
    "dinner": "string",
    "dinnerCalorie": "integer",
    "snack": "string",
    "snackCalorie": "integer",
    "message": "string"
}
````

## Menu

## GET /menus/:historyId

### Description

- Get Menus Based On Today And On User Login

## Request

- Params
````json
{
    "historyId": "integer"
}
````
- Headers 
````json
{
    "access_token": "string"
}
````

## Response

_200 - Ok

````json
{
    "id": "integer",
    "historyId": "integer",
    "breakfast": "string",
    "breakfastCalorie": "integer",
    "breakfastEaten": "boolean",
    "lunch": "string",
    "lunchCalorie": "integer",
    "lunchEaten": "boolean",
    "dinner": "string",
    "dinnerCalorie": "integer",
    "dinnerEaten": "boolean",
    "snack": "string",
    "snackCalorie": "integer",
    "snackEaten": "boolean"
}
````

_404 - Not Found
````json
{
    "message": "Menu Recommendation Is Empty Try Create One"
}
````
## POST /menus/:historyId

### Description

- Create Menu Today On User Based On Ai

### Request

- Params
````json
{
    "historyId": "integer"
}
````
- Headers 
````json
{
    "access_token": "string"
}
````
- Body
````json
{
    "breakfast": "string",
    "breakfastCalorie": "integer",
    "lunch": "string",
    "lunchCalorie": "integer",
    "dinner": "string",
    "dinnerCalorie": "integer",
    "snack": "string",
    "snackCalorie": "integer",
}
````

### Response

_201 - Created_ 
````json 
{
    "id": "integer",
    "historyId": "integer",
    "breakfast": "string",
    "breakfastCalorie": "integer",
    "breakfastEaten": "boolean",
    "lunch": "string",
    "lunchCalorie": "integer",
    "lunchEaten": "boolean",
    "dinner": "string",
    "dinnerCalorie": "integer",
    "dinnerEaten": "boolean",
    "snack": "string",
    "snackCalorie": "integer",
    "snackEaten": "boolean"
}
````

## PATCH /menus/:historyId

### Description

- Change food eaten from false to true and add calorie gain on history


## Request 
- Params
````json
{
    "historyId": "integer"
}
````
- Headers 
````json
{
    "access_token": "string"
}
````
- Body
````json
{
    "eaten": "string|breakfast|lunch|dinner|snack",
    "calorie": "integer"
}
````
## Response
_201 - Ok_
````json
{
    "message": "Food has been inputed" 
}
````

## History

## GET /histories/now

### Description

- Get The User Today History

### Request

- Headers 
````json
{
    "access_token": "string"
}
````

### Response

_200 - OK_
````json
{
    "id": 1,
    "day": "date",
    "calorieLimit": "integer",
    "calorieGain": "integer",
    "isOver": "boolean",
    "userId": "integer",
    "createdAt": "date",
    "updatedAt": "date",
    "Food": [
        {
            "id": "integer",
            "name": "string",
            "calorie": "integer",
            "createdAt": "date",
            "updatedAt": "date"
        },
        {
            ...
        }    
    ],
    "Menu": {
        "id": "integer",
        "historyId": "integer",
        "breakfast": "string",
        "breakfastCalorie": "integer",
        "breakfastEaten": "boolean",
        "lunch": "string",
        "lunchCalorie": "integer",
        "lunchEaten": "boolean",
        "dinner": "string",
        "dinnerCalorie": "integer",
        "dinnerEaten": "boolean",
        "snack": "string",
        "snackCalorie": "integer",
        "snackEaten": "boolean",
        "createdAt": "2023-11-18T10:30:38.900Z",
        "updatedAt": "2023-11-18T10:37:44.900Z"
    }
}
````
## Food
## GET /foods

### Description

- Get All Food On Server And Filter It

### Request

- Headers 
````json
{
    "access_token": "string"
}
````
- Query
````json
{
    "filter": "string"
}
````

### Response

_200 - Ok_

````json
{
    [
        {
            "id": "integer",
            "name": "string",
            "calorie": "integer",
            "createdAt": "date",
            "updatedAt": "date"
        },
        {
            ...
        }
    ]
}
````

## POST /foods/:historyId

## Description

- Input Food To Eaten Food And Ask It Calorie To Ai If It Didnt Exist In Food Server Then Add Calorie Gain In History

## Request

- Headers 
````json
{
    "access_token": "string"
}
````

- Body
````json
{
    "food": "string"
}
````

## Response

_201 - Created_
````json
{
    "message": "Food has been inputed"
}
````

_400 - Bad Request_
````json
{
    "message": "string"
}
````

## Fitnes

## GET /fitnes/bmi

## Description

- Get BMI Based on API And Data From Login User

## Request

- Headers 
````json 
{
    "access_token": "string"
}
````

## Response

_200 - Ok_
````json
{
    "bmiMax": "integer",
    "bmiMin": "integer",
    "bmi": "integer",
    "health": "string"
}
````
