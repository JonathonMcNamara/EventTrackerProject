# EventTrackerProject
## Project Description
- This project is a diet tracker app that will allow the user to keep up to date on their meals, specifically all of the calories and macros for each individual meal. This program is designed to keep the user accountable by keeping track of every meal to stay consistent with their diet or goals
## Endpoints
| HTTP Verb | URI               | Request Body | Response Body | Status Codes |
|-----------|-------------------|--------------|---------------|---------|
| GET       | `/api/meals`      |              |               | 200 |
| GET       | `/api/meals/1`    |              | JSON of meal `1` | 200,404 |
| POST      | `/api/meals`      | JSON of a new meal entity  | JSON of created _book_ | 201,400 |
| PUT       | `/api/meals/1`    | JSON of a new version of meal `1` | JSON of updated meal | 200,404,400 |
| DELETE    | `/api/meals/1`    |              |               | 204,404,400|

## Technologies Used
- Java
- JPA
- REST Api
- Gradle
- JUnit
- Postman
- SpringBoot
