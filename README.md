# Go Website Project

## Database Schema Design

![db-schema]

[db-schema]: schema_db/Go_website_schema_updated2_9_15_23.png

## API Documentation

### SGFs (Endpoints for current user's SGFs)

- `GET /api/sgfs`: Get all SGFs of the current user
- `POST /api/sgfs`: Upload new SGFs to the current user's SGF table
- `GET /api/sgfs/:sgf_id`: Get the SGF by sgf_id (for rendering Go board)
- `PUT /api/sgfs/:sgf_id`: Edit the SGF name, player names, player ranks, and/or result
- `DELETE /api/sgfs/:sgf_id`: Delete an SGF (do NOT delete the puzzles with it)

### Puzzles (Endpoints for puzzles, which includes user's puzzles and all public puzzles along with filters for puzzles)

- `GET /api/puzzles?source=[own|public]&completed=[true|false]&move_number=:move_number&category=:category&board_size=:board_size&limit=:limit&offset=:offset`: Get public puzzles based on various filters, includes pagination!
- `GET /api/puzzles/:puzzle_id`: Get a public / user puzzle specified by it's id
- `POST /api/puzzles/generate`: Create a new puzzle from the user's SGF (either manually or from AI's suggestion). Difficulty is calculated by
  taking the rank of the player that made the mistake, then converting that Go rank
- `GET /api/puzzles/mistakes`: Get the array of mistakes/puzzles user made on the given SGF, user can choose to save the puzzle
- `PUT /api/puzzles/:puzzle_id`: Edit the description, category, solution_coordinates, and other puzzle info (Requires user to be admin if editing public puzzle, don't need to be admin if editing own puzzle)
- `DELETE /api/puzzles/:puzzle_id`: Delete a puzzle (Requires user to be admin if deleting a public puzzle, don't need to be admin if deleting own puzzle)

## Pagination Parameters

- `limit`: The maximum number of puzzles to return per request. Default is 20.
- `offset`: The starting point from which to retrieve puzzles. Default is 0.

### Users (Endpoints of user specific info. Includes the user's account information like user's rank, and count of solved puzzles by category)

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
  - URL: /api/sgfs
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
          "komi": 7.5,
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
  - URL: /api/sgfs
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
      "komi": 0.5,
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
      "komi": 6.5,
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

### Get SGF by id

Get the SGF by id and render with wgo.js (we will use glift for rendering the puzzles, which is at a different route)

- Require Authentication: true (error 401)
- Require Authorization: SGF data/table must belong to the current user (error 403)

Request

  - Method: GET
  - URL: /api/sgfs/:sgf_id
  - Headers:
    - Content-Type: application/json
  - Body: None

- Successful Response

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body:

  ```json
  {
    "sgf_id": "1",
    "sgf_data": "sgf_data to render with wgo library",
    "game_date": "2023-09-03",
    "sgf_name": "Original sgf name",
    "board_size": 19,
    "black_player": "Nathan",
    "white_player": "Matthew",
    "black_rank": "2d",
    "white_rank": "3d",
    "komi": 7.5,
    "result": "B+5.5",
    "createdAt": "2023-08-05 14:06:15",
    "updatedAt": "2023-08-07 14:06:15"
  }
  ```

### Edit SGF

Edit the SGF name, player names, player ranks, and/or result

- Require Authentication: true (error 401)
- Require Authorization: SGF data/table must belong to the current user (error 403)

- Request

  - Method: PUT
  - URL: /api/sgfs/:sgf_id
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "game_date": "5-19-23",
      "sgf_name": "Changed SGF name to this",
      "board_size": 19,
      "black_player": "Nathannn",
      "white_player": "Matthewww",
      "black_rank": "2d",
      "white_rank": "3d",
      "komi": 15.5,
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
    "game_date": "5-19-23",
    "sgf_name": "Changed SGF name to this",
    "board_size": 19,
    "black_player": "Nathannn",
    "white_player": "Matthewww",
    "black_rank": "2d",
    "white_rank": "3d",
    "komi": 15.5,
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
  - URL: /api/sgfs/:sgf_id/puzzles
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
  - URL: /api/sgfs/:sgf_id/puzzles/:puzzle_id/mistakes
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
  - URL: /api/sgf/:sgf_id/puzzles/puzzle_id
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
  - URL: /api/sgf/:sgf_id
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

### Get Public Puzzles (20 on one page by default -> response is an array of puzzles)

Get puzzles based on optional filters, includes pagination

- Require Authentication: FALSE (user does not need to be logged in to view / try puzzles)
Probably want to change this to force a user to be logged in later so that puzzle and user rankings can be set properly

- Request

- Method: GET
- URL: /api/puzzles
-----------------------------------
- URL with filter and pagination: /api/puzzles?source=[own|public]&completed=[true|false]&min_difficulty=:min_difficulty&max_difficulty=:max_difficulty&move_number=:move_number&category=:category&board_size=:board_size&min_votes=:min_votes&max_votes=:max_votes&limit=:limit&offset=:offset
-----------------------------------
- Headers:
    - Content-Type: application/json
  - Body: None

- Successful Response

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body:

  ```json
  {
    "puzzles": [
        {
            "puzzle_id": 2,
            "sgf_data": "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.5]TM[300]GN[]PW[éç¦æ¥¼é]PB[anning97]DT[2023-07-09]RE[B+Resign]RL[0]RN[3]TC[3]TT[30];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd];W[pe];B[pc];W[oc];B[qb];W[nd];B[ob];W[od];B[mc];W[md];B[ld];W[le];B[ke];W[kf];B[kd];W[lf];B[nf];W[pg];B[nh];W[ne];B[of];W[pf];B[jf];W[jg];B[kg];W[lh] (;B[kh]C[Incorrect - This was the actual move played in the game!]) (;B[lg]C[CORRECT]))",
            "solution_coordinates": {
                "M13": [
                    "M13",
                    "K15",
                    "J14",
                    "N13",
                    "G4",
                    "G3"
                ],
                "K12": [
                    "K12",
                    "J13",
                    "M13",
                    "K15",
                    "J14",
                    "K16",
                    "N15",
                    "N14"
                ]
            },
            "category": "Reading",
            "move_number": 78,
            "description": "This is a direction of play or reading puzzle!",
            "completed": false,
            "is_user_puzzle": false,
            "vote_count": 83,
            "thumbnail": "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607521/puzzle5_7_20_23_ie39gw.png",
            "createdAt": "2023-09-11 18:12:19",
            "updatedAt": "2023-09-11 18:12:19"
        },
            ]
  }
  ```

### Get Puzzle by id

Get the Puzzle by puzzle id and render with glift.js

- Require Authentication: False (User does NOT need to be logged in)
- Require Authorization: False

Request

  - Method: GET
  - URL: /api/puzzles/:puzzle_id
  - Headers:
    - Content-Type: application/json
  - Body: None

- Successful Response

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body:

  ```json
  {
    "puzzle_id": 2,
    "sgf_data": "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.5]TM[300]GN[]PW[éç¦æ¥¼é]PB[anning97]DT[2023-07-09]RE[B+Resign]RL[0]RN[3]TC[3]TT[30];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd];W[pe];B[pc];W[oc];B[qb];W[nd];B[ob];W[od];B[mc];W[md];B[ld];W[le];B[ke];W[kf];B[kd];W[lf];B[nf];W[pg];B[nh];W[ne];B[of];W[pf];B[jf];W[jg];B[kg];W[lh] (;B[kh]C[Incorrect - This was the actual move played in the game!]) (;B[lg]C[CORRECT]))",
    "solution_coordinates": {
        "M13": [
            "M13",
            "K15",
            "J14",
            "N13",
            "G4",
            "G3"
        ],
        "K12": [
            "K12",
            "J13",
            "M13",
            "K15",
            "J14",
            "K16",
            "N15",
            "N14"
        ]
    },
    "category": "Reading",
    "move_number": 78,
    "description": "This is a direction of play or reading puzzle!",
    "completed": false,
    "is_user_puzzle": false,
    "vote_count": 83,
    "createdAt": "2023-09-11 18:12:19",
    "updatedAt": "2023-09-11 18:12:19"
  }
  ```

### Edit a Public Puzzle

Edit the description, category, and other info of a public puzzle. Requires admin.

- Require Authentication: true (error 401)
- Require Authorization: User must be admin (error 403)

- Request

- Method: PUT
- URL: /api/puzzles/:puzzle_id
- Headers:
  Content-Type: application/json
  Body:
  ```json
  {
    "category": "Reading",
    "difficulty": 1550,
    "description": "New description"
  }
  ```

Successful Response

- Status Code: 200
- Headers:
  Content-Type: application/json
  Body:

```json
{
  "puzzle_id": 1,
  "category": "Reading",
  "difficulty": 1550,
  "description": "New description",
}
```

Error Response

- Status Code: 400
- Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
    "message": "Validation error",
    "errors": {
        "category": [
            "Invalid category, valid categories are: Reading, Judgment, Direction, Life and Death, Capturing Race, Ladder/Net, Other"
        ],
        "difficulty": [
            "Invalid difficulty, puzzle must be between 100 and 5000."
        ],
        "description": [
            "Description can't only be white spaces.",
            "Maximum description length is 100 characters."
        ],
      }
    }
    ```

### Delete a public puzzle

SUSPENDS/deletes an existing public puzzle.

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
  - URL: /api/puzzles?source=[own|public]&completed=[true|false]&min_difficulty=:min_difficulty&max_difficulty=:max_difficulty&move_number=:move_number&category=:category&board_size=:board_size&min_votes=:min_votes&max_votes=:max_votes`: Retrieve puzzles based on various filters.
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
