# Go Website Project

## Database Schema Design

![db-schema]

[db-schema]: schema_db/Go_website_schema2_updated_9_1_23.png

## API Documentation

### SGFs (Endpoints for current user's SGFs)

- `GET /api/sgfs/current`: Get all SGFs of the current user (format like go4go.net)
- `POST /api/sgfs/current`: Upload new SGFs to the current user's SGF table
- `PUT /api/sgfs/:sgf_id/current`: Edit the SGF name, player names, player ranks, and/or result
- `POST /api/sgfs/:sgf_id/current/puzzles`: Create a new puzzle from the user's SGF (either manually or from AI's suggestion). Difficulty is calculated by
  taking the rank of the player that made the mistake, then converting that Go rank
  into an elo rating. If there are no ranks, it'll default to 1500 elo (which should be around 5-7k range)
- `GET /api/sgfs/:sgf_id/current/puzzles/:puzzle_id/mistakes`: Get the move numbers of the best puzzles according to KataGo.
- `DELETE /api/sgfs/:sgf_id/current/puzzles/puzzle_id`: Delete a puzzle that belongs to the user
- `DELETE /api/sgfs/:sgf_id/current`: Delete an SGF (do NOT delete the puzzles with it)

### Puzzles (Endpoints for puzzles, which includes user's puzzles and all public puzzles along with filters for puzzles)

- `GET /api/puzzles?source=[own|public]&completed=[true|false]&min_rank=:min_rank&max_rank=:max_rank&difficulty=:difficulty&move_number=:move_number&category=:category&board_size=:board_size&min_votes=:min_votes&max_votes=:max_votes`: Retrieve puzzles based on various filters.
- `PUT /api/puzzles/:puzzle_id`: Edit the description, category, and other puzzle info (requires priviledges / reputation)
- `DELETE /api/puzzles/:puzzle_id`: Delete a puzzle (Must be admin if deleting a public puzzle, don't need to be admin if deleting own puzzle)

### Users (Endpoints of user specific info. Includes the user's account information like user's rank, and count of solved puzzles by category)

- `Get /api/users/:user_id/puzzles/completed?source=[own|public]`: Get all completed puzzles of the current user, filtered by source. The optional source query parameter can be set to own to return only puzzles created from the user’s private SGFs, or public to return only puzzles created from public puzzles. If the source parameter is not provided, all completed puzzles (user's own puzzles and public puzzles) are returned.

- `GET /api/users/:user_id`: Get the user's ranking (elo), number of total puzzles completed, and a count of puzzle completed for each category

### Features for later

- `POST /api/sgfs/:sgf_id/puzzles/:puzzle_id/practice`: [OPTIONAL FOR NOW] Play against AI from a specific move and get accuracy rating
- `POST /api/puzzles/:puzzle_id/practice`: [OPTIONAL FOR NOW] Play against AI from a specific move and get accuracy rating
- `POST /api/users/:user_id/ranking`: Set initial user's ranking (don't allow it to be changed later)
- `PUT /api/users/:user_id/username`: Edit the user's username
- `PUT /api/users/:user_id/password`: Edit the user's password
- `PUT /api/users/:user_id/email`: Edit the user's email
- `DELETE /api/users/:user_id`: Delete the user's account

## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

- Request: endpoints that require authentication
- Error Response: Require authentication

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Authentication required"
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

- Request: endpoints that require proper authorization
- Error Response: Require proper authorization

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Forbidden"
    }
    ```

### Get the Current User

Returns the information about the current user that is logged in.

- Require Authentication: true
- Request

  - Method: GET
  - URL: /api/session
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user": {
        "id": 1,
        "email": "john.smith@gmail.com",
        "username": "JohnSmith"
      }
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

- Require Authentication: false
- Request

  - Method: POST
  - URL: /api/session
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "credential": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user": {
        "id": 1,
        "email": "john.smith@gmail.com",
        "username": "JohnSmith"
      }
    }
    ```

- Error Response: Invalid credentials

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Invalid credentials"
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

- Require Authentication: false
- Request

  - Method: POST
  - URL: /api/users
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "password": "secret password"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "email": "john.smith@gmail.com",
      "username": "JohnSmith"
    }
    ```

- Error response: User already exists with the specified email

  - Status Code: 500
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User already exists",
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

- Error response: User already exists with the specified username

  - Status Code: 500
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User already exists",
      "errors": {
        "username": "User with that username already exists"
      }
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "email": "Invalid email",
        "username": "Username is required"
      }
    }
    ```

## SGFs

### Get all SGFs of Current User

Get all SGFs of the current user (format like go4go.net)

- Require Authentication: true (error 401)

- Request

  - Method: GET
  - URL: /api/sgfs/current
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "SGFs" [
        {
          "id": 1,
          "user_id": 1,
          "createdAt": "2023-7-14 20:39:36",
          "updatedAt": "2023-7-15 20:39:36",
          "sgf_name": "Nathan 6d vs. Matthew 9d",
          "board_size": 19,
          "sgf_data (instead of it being separate, just have it be a clickable and openable from the sgf_name)": "Giant amount of SGF/text here",
          "black_player": "Nathan",
          "white_player": "Matthew",
          "black_rank": "6d",
          "white_player": "9d",
          "result": "B+Resign",
          "thumbnail": "cloudinaryThumbnailPuzzleId1.jpg"
        }
      ]
      "numberOfSGFs": 8,
    }
    ```

### Upload SGF(s)

Upload new SGFs to the current user's SGF table

- Require Authentication: true (error 401)

- Request

  - Method: POST
  - URL: /api/sgfs/current
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "sgf_data": [
        "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[9]KM[6.50]PW[test9by9]PB[yep];B[gc];W[gg];B[cc];W[cg];B[ee];W[eg];B[ge];W[ce])"
      ]
    }
    ```

- Successful Response

  - Status Code: 201
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      [
      "id": 1,
      "user_id": 1,
      "sgf_data": "sgf data user sent",
      "sgf_name": "Nathan 6d vs. Matthew 9d",
      "board_size": 19,
      "black_player": "Nathan",
      "white_player": "Matthew",
      "black_rank": "6d",
      "white_rank": "9d",
      "result": "B+Resign",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "thumbnail": "cloudinaryThumbnailPuzzleId1.jpg",
      //
      "id": 2,
      "user_id": 1,
      "sgf_data": "sgf data user sent",
      "sgf_name": "Nathan 6d vs. Matthew 9d",
      "board_size": 13,
      "black_player": "Nathan",
      "white_player": "Matthew",
      "black_rank": "6d",
      "white_rank": "9d",
      "result": "W + 3.5",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "thumbnail": "cloudinaryThumbnailPuzzleId1.jpg",
      ]
    }
    ```

- Error Response: Body validation error

- On the client side, we can iterate over the array of error messages and display each message to the user.

- Status Code: 400
- Headers:
  - Content-Type: application/json
- Body:

  ```json
  {
    "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
    "errors": {
      "sgf_data": [
        "valid sgf is required",
        "can only upload 1 SGF at once!"
      ]
    }
  }
  ```

### Edit SGF

Edit the SGF name, player names, player ranks, and/or result

- Require Authentication: true (error 401)
- Require Authorization: SGF data/table must belong to the current user (error 403)

- Request

  - Method: PUT
  - URL: /api/sgfs/:sgf_id/current
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "sgf_name": "Changed SGF name to this",
      "board_size": 19,
      "black_player": "Nathannn",
      "white_player": "Matthewww",
      "black_rank": "2d",
      "white_rank": "3d",
      "result": "B+5.5"
    }
    ```

- Successful Response

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body:

  ```json
  {
    "sgf_id": "1",
    "sgf_name": "Changed SGF name to this",
    "board_size": 19,
    "black_player": "Nathannn",
    "white_player": "Matthewww",
    "black_rank": "2d",
    "white_rank": "3d",
    "result": "B+5.5",
    "updatedAt": "2023-08-07 14:06:15"
  }
  ```

- Error Response: Body validation error

- sgf_name can't be left blank or null, rank can be set to "", ?, or null though

- Status Code: 400
- Headers:
  - Content-Type: application/json
- Body:

  ```json
  {
    "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
    "errors": {
      "sgf_name": ["sgf name is required", "sgf name cannot be empty", "maximum sgf name length is 100 characters!"],
      "board_size": ["board_size is required"]
    }
  }
  ```

### Create Puzzle from SGF

Create a new puzzle from the user's SGF (either manually or from AI's suggestion).

- Require Authentication: true (error 401)
- Require Authorization: SGF must belong to the current user (error 403)

- Request

  - Method: POST
  - URL: /api/sgfs/:sgf_id/current/puzzles
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "move_number": "56",
      "completed": true, // This is referring to the completed field in the Puzzles table, which means the user won't be shown their own puzzle they made
      "category": "life and death",
      "description": "Can you save the group?"
    }
    ```

- Successful Response

- Status Code: 201
- Headers:
  - Content-Type: application/json
- Body:

  ```json
  {
    "message": "puzzle created successfully!",
    "puzzle": {
      "id": 1,
      "sgf_id": 1,
      "category": "life and death",
      "move_number": 56,
      "difficulty": 950,
      "description": "Can you save the group?",
      "board_size": 19,
      "completed": true,
    }
  }
  ```

- Error Response: Validation error

- Status Code: 400
- Headers:
- Content-Type: application/json
- Body:

  ```json
  {
    "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
    "errors": [
      "move_number must be an integer",
      "move_number must be between 1 and 1000",
      "description can't be longer than 1000 characters",
      "category length must be between 2 and 100 characters"
    ]
  }
  ```

  - Error response: Couldn't find a SGF with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "SGF couldn't be found!"
    }
    ```

  - Error response: Puzzle for the current SGF already exists, please edit the puzzle instead

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User already has a puzzle for this move number. If you wanted to create a new puzzle for this move instead, please choose the option to edit the puzzle."
    }
    ```

### Get AI recommended puzzles from SGF

Use KataGo to recommend puzzles from the uploaded SGF.  User can choose to accept the puzzle or not.

- Require Authentication: true (error 401)
- Require Authorization: SGF data/table must belong to the current user (error 403)

- Request

  - Method: GET
  - URL: /api/sgfs/:sgf_id/current/puzzles/:puzzle_id/mistakes
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "SGFs": [
        {
          "sgf_id": 1,
          "puzzle_id": 1,
          "board_size": 19,
          "move_analysis": [
            {
              "move_number": 15,
              "correct_moves": ["E4", "D5"]
            },
            {
              "move_number": 35,
              "correct_moves": ["G7", "H6"]
            },
            {
              "move_number": 78,
              "correct_moves": ["A1", "B2"]
            },
          ],
          "createdAt": "2023-07-14T20:39:36Z",
          "updatedAt": "2023-07-15T20:39:36Z"
        }
      ]
    }
    ```

  - Error response: Couldn't find a SGF with the specified sgf_id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "SGF couldn't be found"
    }
    ```

### Delete a User's Puzzle

Delete a puzzle that belongs to the user

- Require Authentication: true (error 401)
- Require authorization: true, puzzle must belong to the user (error 403)
- Request

  - Method: DELETE
  - URL: /api/sgf/:sgf_id/current/puzzles/puzzle_id
  - Body: none

- Successful Response

  - Status Code: 204
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

- Error response: Couldn't find a puzzle with the specified puzzle_id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Puzzle couldn't be found"
    }
    ```

### Delete a SGF

Delete an SGF (do NOT delete the puzzles with it)

- Require Authentication: true (error 401)
- Require authorization: true (error 403)
- Request

  - Method: DELETE
  - URL: /api/sgf/:sgf_id/current
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted SGF"
    }
    ```

- Error response: Couldn't find a SGF with the specified sgf_id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "SGF couldn't be found"
    }
    ```

## Puzzles

### Get all Public Puzzles

Get all public puzzles with optional query parameters for rank and category filters.

- Require Authentication: false
- Require Authorization: false

- Request

  - Method: GET
  - URL: /api/puzzles
  - Body: none

- Query Parameters:
  rank: (optional) integer, minimum 1, maximum: 5000, default: 1500
  category: (optional) string, default: "reading"
  page: (optional) integer, minimum: 1, default: 1
  size: (optional) integer, minimum: 1, maximum: 30, default: 30

- Successful Response

Status Code: 200
Headers:
Content-Type: application/json
Body:

```json
{
  "puzzles": [
    {
      "puzzle_id": 1,
      "category": "life and death",
      "move_number": 35,
      "difficulty": 855,
      "description": "Can you save the group?",
      "vote_count": 15,
      "board_size": 19,
      "thumbnail": "url",
      "completed": false,
    }
  ],
  "page": 2,
  "size": 30
}
```

- Error Response: Query parameter validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "rank": "Rank must be between 1 and 5000",
        "category": "Invalid category",
        "page": "Page must be at least 1",
        "size": "Size must be between 1 and 30"
      }
    }
    ```

### Edit a Public Puzzle

Edit the description, category, and other info of a public puzzle. Requires privileges/reputation.

- Require Authentication: true (error 401)
- Require Authorization: User must have privileges/reputation (error 403)

- Request

- Method: PUT
- URL: /api/puzzles/:puzzle_id
- Headers:
  Content-Type: application/json
  Body:
  ```json
  {
    "description": "New description",
    "category": "New category"
  }
  ```

Successful Response

- Status Code: 200
- Headers:
  Content-Type: application/json
  Body:

```json
{
  "id": 1,
  "category": "New category",
  "move_number": 56,
  "difficulty_rank": 654,
  "description": "New description",
  "completed": false,
  "vote_count": 55,
  "board_size": 19
}
```

### Delete a public puzzle

Deletes an existing public puzzle.

- Require Authentication: true (error 401)
- Require authorization: User must be an admin (error 403)
- Request

  - Method: DELETE
  - URL: /api/puzzles/:puzzle_id
  - Body: none

- Successful Response

  - Status Code: 204
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

- Error response: Couldn't find a Puzzle with the specified puzzle_id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Puzzle couldn't be found"
    }
    ```

## Users

### Get Puzzles

Retrieve puzzles based on various filters.

- Require Authentication: true (error 401)
- Require Authorization: true (error 403)

- Request

  - Method: GET
  - URL: /api/puzzles?source=[own|public]&completed=[true|false]&min_rank=:min_rank&max_rank=:max_rank&difficulty=:difficulty&move_number=:move_number&category=:category&board_size=:board_size&min_votes=:min_votes&max_votes=:max_votes
  - Body: none

- Successful Response

Status Code: 200
Headers:
Content-Type: application/json

Body:

```json

  {
    "puzzles": [
      {
        {
          "puzzle_id": 1,
          "category": "life and death",
          "move_number": 35,
          "difficulty_rank": 855,
          "description": "Can you save the group?",
          "completed": true,
          "is_user_puzzle": true,
          "vote_count": 10,
          "board_size": 19,
          "thumbnail": "cloudinaryThumbnailPuzzleId1.jpg",
          "createdAt": "2023-11-19 20:39:36",
          "updatedAt": "2023-11-19 20:39:36",
        }
      },
      {
        {
          "puzzle_id": 2,
          "category": "reading",
          "move_number": 135,
          "difficulty_rank": 2750,
          "description": "Are you an AI?",
          "completed": true,
          "is_user_puzzle": false,
          "vote_count": 250,
          "board_size": 9,
          "thumbnail": "cloudinaryThumbnailPuzzleId2.jpg",
          "createdAt": "2023-11-19 20:39:36",
          "updatedAt": "2023-11-19 20:39:36",
        }
      },
      {
        {
          "puzzle_id": 3,
          "category": "ladder",
          "move_number": 109,
          "difficulty_rank": 1350,
          "description": "Great ladder puzzle",
          "completed": false,
          "is_user_puzzle": true,
          "vote_count": 0,
          "board_size": 13,
          "thumbnail": "cloudinaryThumbnailPuzzleId3.jpg",
          "createdAt": "2022-11-19 20:39:36",
          "updatedAt": "2022-11-19 20:39:36",
        }
      }
    ]
  }

```

- Error Response: Query parameter validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "source": "Source must be either own or public"
      }
    }
    ```

  - Error response: Couldn't find a user with the specified user_id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User couldn't be found!"
    }
    ```

### Get the user's ranking and puzzle statistics

Get the user’s ranking (elo), number of total puzzles completed, and a count of puzzle completed for each category.

- Require Authentication: true (error 401)
- Require Authorization: can only access your own user account (error 403)

- Request

  - Method: GET
  - URL: /api/users/:user_id
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

  ```json
  {
    "ranking": {
      "elo": 1500
    },
    "puzzles_completed": {
      "total": 10,
      "category": {
        "life and death": 3,
        "reading": 7
      }
    }
  }
  ```

  - Error response: Couldn't find a user with the specified user_id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User couldn't be found!"
    }
    ```
