Assigning rating system for user and puzzle

Max puzzle rating is 3000 elo (pro level+)
Minimum puzzle rating is 100 elo
Use algorithm here: https://en.wikipedia.org/wiki/Go_ranks_and_ratings

Adjust K factor / sigma. If a player's rating is more accurate vs less accurate, rating changes are less and more volatile respectively

"K is varied depending on the rating of the players, because of the low confidence in (lower) amateur ratings (high fluctuation in the outcome) but high confidence in pro ratings (stable, consistent play). K is 116 at rating 100 and 10 at rating 2700"

### TREAT puzzles as players, they have their own elo rating, if a player solves a puzzle, they "beat" the player, and ratings for both the puzzle and user gets adjusted!

### Default puzzle rating to that of the rank of the player that made the mistake

### Set timer on game, one period of 45 second sudden death (this can be used to force players to play them at a certain speed, better for determining difficulty of puzzle)

### KataGo analyzes a game for up to 10 possible puzzles (using heuristics I come up with), the user can filter them further, then Katago analyzes those spots again and comes up with vaild sequences / answers that get stored with the puzzle. Now it's hard coded in, like the solutions on 101weiqi.com so the user doesn't have to play against KataGo live.
