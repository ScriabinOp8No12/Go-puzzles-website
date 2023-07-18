1. Render issues (7/15/2023 - 7/16/2023)

Since our down functions in our migrations and seeders are not coded properly (we get a foreign key constraint failed, meaning our id counters don't reset, so there's a unique constraint failing), I kept having to change the schema name in the
environment variables on Render for Render to rerun/rebuild everything from scratch. However, I accidentally changed the Schema name to a name
that I had used previously, so although I expected it to rerun the migrations/seeders from scratch, it was starting half way. Unfortunately,
I needed it to rerun the first 2 migrations/seeders, so this weird behavior was pretty tricky to solve.

Another Render issue that I still haven't solved yet (7/15/2023 - 7/17/2023) is Render not properly building when I have an index / unique constraint on a column. Once I commented that small block of code out, Render got past that problem (there were still other issues though, like the one described above)

Takeaway: it's really important to think critically about what could be causing the issue, and to drop all assumptions and isolate the problem.
In most cases, adding console.logs at spots where we think the code might be breaking usually solves the problem. In this case with Render,
reading the error logs carefully and understanding them was the key.

2. wgo.js library issue (7/14/2023)

Using wgo.js to render an SGF in the web browser. This issue was mostly caused by me not using the proper file path to the downloaded
wgo.js files. After being frustrated for 45 minutes, I took a break for a few hours. Within 1 minute of coming back, I instantly realized I wasn't using the right file paths, and this solved most of the problem! Once that was resolved, although I could see a blank rendered Go board on my browser, my SGF wasn't playable, meaning it wasn't finding the SGF from my computer. This meant that either I used the wrong file path / wrong name again, or something else was causing the issue. It turns out I wasn't serving static files in my app.js

Takeaway: Double check file paths, and take breaks if I'm not making progress for 30+ minutes. Sometimes not being tilted and coming back with fresh eyes is all it takes to get a new perspective and solve the problem!
