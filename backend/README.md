# Chatter Backend 💬

## Models

- **User** 
- **Room**
- **UserInRoom**
- **Message**

## HTTP Routes

| Type   | Route                 | Description                          |
|--------|-----------------------|--------------------------------------|
| POST   | /user/login           | Log in a user                        |
| POST   | /user/signup          | Sign up a user                       |
| GET    | /user/me              | Get user making request              |
| GET    | /user/:username       | Get user with specified username     |
| POST   | /room                 | Create a room                        |
| GET    | /room                 | Query for rooms                      |
| POST   | /room/:roomId/user    | Add user making request to room      |
| DELETE | /room/:roomId/user    | Remove user making request from room |
| GET    | /room/:roomId/user    | Get all users in specified room      |
| GET    | /room/:roomId/message | Query messages in a room             |


## Socket Events

| Event Name     | Description      |
|----------------|------------------|
| message:create | Create a message |
