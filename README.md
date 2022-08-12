
# HeadhunterApp

The app is designed to help developers find a job. And also make it possible for potential employers to find them.


## Run Locally
Prepare your local server e.g. XAMPP.
And database e.g. HeidiSQL,DBeaver

Clone the projects

- Server
```bash
  git clone https://github.com/KamilFil/megak-headhunterapp-be
```

- Client
```bash
  git clone https://github.com/KamilFil/megak-headhunterapp-fe
```



Go to the project directories

```bash
  cd megak-headhunterapp-fe
```
```bash
  cd megak-headhunterapp-be
```

Install dependencies

```bash
  npm install
```

Start the server via script in package.json
```bash
  start:dev 
```

Start the client via script in package.json
```bash
  start
```


## License




## Environment Variables

To run this project, you will need to add the following environment variables to files:

db.config.ts

`host`,
`port`,
`username`,
`password`

mailer.config.ts

`SEND_GRID_KEY`
`SEND_GRID_ACCOUNT`


## API Reference

*Auth*
____
  #### Request

| Name      | Path     | Method   | Description                                                                    | Params               | Permissions
| :-------- | :------- | :------- | :------------------------------------------------------------------------------| :------------------- | :-------------
| `login`   | `/login` | `POST`   | Log into application. Required existing **email** and **password** in database | `Body: email, pwd`   | All
| `logout`  | `/logout`| `GET`    | Log out from application.                                                      | -                    | All



*student*
____

  #### Request

| Name               | Path            | Method   | Description                       | Params                                                         | Permissions
| :----------------- | :-------------- | :------- | :-------------------------------- | :------------------------------------------------------------- | :-------------
| `getStudentUser`   | `/:id`          | `GET`    | Get student data by id.           | `id`                                                           | Student
| `updateStudentUser`| `/:id`          | `PATCH`  | Update student data by id.        | `id`                                                           | Student                               
| `updateHireStatus` | `/hired/:id`    | `PATCH`  | Set student status on "hired".    | `id` `Body: firstName, lastName, projectUrls, githubUserName`  | Hr                              
| `updateIsActive`   | `/activate/:id` | `PATCH`  | Set student account on "active".  | `id`                                                           | All                              


*hr-user*
____

  #### Request

| Name                         | Path                               | Method   | Description                             | Params                                                                                                       | Permissions
| :--------------------------- | :--------------------------------- | :------- | :-------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :-----------
| `getAllStudents`             | `/`                                | `GET`    | Get all students.                       | -                                                                                                            | Hr
| `getAllStudentsToCall`       | `/call-list/:hrId`                 | `GET`    | Get all students to call.               | `hrId`                                                                                                       | Hr
| `filterAllStudents`          | `/call-list/filter`                | `GET`    | Get filtered list of users.             | `Query: expectedTypeWork,expectedContractType, expectedSalary, canTakeApprenticeship, monthsOfCommercialExp` | Hr
| `setUserStatusToInterviewed` | `/call/:hrId/:studentId`           | `PATCH`  | Set student status to "interviewed".    | `hrId, studentId`                                                                                            | Hr
| `getStudentCv`               | `/student-cv/:hrId/:studentId`     | `GET`    | Get user CV.                            | `hrId, studentId`                                                                                            | Hr
| `setUserStatusToHired`       | `/hired/:hrId/:studentId`          | `PATCH`  | Set student status to "hired".          | `hrId, studentId`                                                                                            | Hr
| `setUserStatusAvailable`     | `/not-interested/:hrId/:studentId` | `PATCH`  | Set student status to "not-interested". | `hrId, studentId`                                                                                            | Hr

____
*admin*

  #### Request

| Name                  | Path                 | Method    | Description                     | Params                                                 | Permissions
| :-------------------- | :------------------- | :-------- | :------------------------------ | :----------------------------------------------------- | :-----------
| `createHerByAdmin`    | `/create-hr`         | `POST`    | Create Hr user.                 | `Query: email, fullName, company, maxReservedStudents` | Admin
| `uploadUsersList`     | `/upload-users-list` | `POST`    | Create student user from file.  | `Form data: [Key]: List, [Value]: *.json`              | Admin


JSON file structure:

```json
[
{
   "email": "user1@example.com",
   "courseCompletion": 2,
   "courseEngagement": 2,
   "projectDegree": 2,
   "teamProjectDegree": 3,
   "bonusProjectUrls":"url1, url2"
},
{
   "email": "user2@example.com",
   "courseCompletion": 3,
   "courseEngagement": 3,
   "projectDegree": 3,
   "teamProjectDegree": 4,
   "bonusProjectUrls":"url1"
}
]
```
## Authors

- [@kamilfil](https://github.com/KamilFil)
- [@zuravsky](https://github.com/Zuravsky)
- [@piotrb95](https://github.com/PiotrB95)
- [@karol](https://github.com/)
- [@krzysiek](https://github.com/)


## Tech Stack

**Client:** React, HTML, CSS

**Server:** Node, Express, Nest, TypeORM, Axios

