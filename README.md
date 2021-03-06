# Finder Application - Backend

This is the back end API of a Finder Application, built as the final project for the [Tech Returners](https://techreturners.com) Your Journey Into Tech course. It is consumed by a front end React application, available [here](https://github.com/EstamosAlwaysCurious/finder) and connects to an RDS Database.

The hosted version of the application is available here: [https://EstamosAlwaysCurious.github.io/finder/](https://EstamosAlwaysCurious.github.io/finder/)

### Technology Used

This project uses the following technology:

- Serverless Framework
- JavaScript (ES2015+)
- Express
- SQL
- Mysql library
- AWS Lambda and API Gateway
- AWS RDS
- ESLint

### Endpoints

The API exposes the following endpoints:

---

##### GET /pharmacies

**************************amazonaws.****/dev/pharmacies/

Responds with JSON containing all pharmacies in the database.

---

##### POST /pharmacies

**************************amazonaws.****/dev/pharmacies/

Will create a new pharmacy when sent a JSON payload in the format:

```json
{
    "location": "still.glory.blur", 
    "town": "Cheadle",
    "late": 1,
    "vaccine": 0,
    "delivery": 0,
    "e_pres": 1,
    "comments": "max 160 characters comments box",
    "date": "2019-10-15"   
}
```

---

##### DELETE /pharmacies/:id

**************************amazonaws.****/dev/pharmacies/:id

Deletes the pharmacy of the given ID.

---

##### PUT /tasks/:taskId

**************************amazonaws.****/dev/pharmacies/:id

Will update a pharmacy when sent a JSON payload in the format:

```json
{
  "location": "still.glory.blur", 
    "town": "Cheadle",
    "late": 1,
    "vaccine": 1,
    "delivery": 0,
    "e_pres": 1,
    "comments": "optional comments box",
    "date": "2020-01-03"
}
```