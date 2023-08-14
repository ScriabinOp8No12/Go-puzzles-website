TEST FIRST

1. Copy uploaded SGF, delete all comments

2. Split SGF into different SGFS, with SGF going up to, and INCLUDING the mistake move.  Delete rest of SGF after the mistake

3. Add a comment in line that reads: (;B[nq]C[Incorrect - This was the actual move played in the game!])

4. Add correct moves at bottom of sgf, after the )

4. If there is more than 1 correct move, add additional comments to end of SGF (create new line)
with KataGo move converted into SGF move with a comment of "CORRECT", **** THEN REVERSE ****

4a. The bottom most comment gets two )) the rest get one ) -> if there's only one correct move, it gets two )) *** ADD A FINAL ) at the END, and OUTSIDE OF THE LOOP

5. Create glift standard problem type with initial position set to go to the move before the mistake
so this will be one move before the last move in the sliced SGF

6. Keep same alert for correct and incorrect moves

Work on after!
------

7 Add the "next sgf" button as seen on glift,
so we can click that arrow to go to the next puzzle!

Looks like we need to add a button to the glift instance, then use an onclick event
to go to the next sgf in the array, ** so we need to define all the sgfs at the beginning of the file and put them into an array!

http://www.gliftgo.com/#ProblemEx

Then we see a right arrow at the bottom of the puzzle, which goes to the next once
This can be used to go to the next puzzle SGF that was created

Maybe KataGo can analyze these puzzles at higher visits while the user is solving the previous puzzles?  That would be some async stuff
