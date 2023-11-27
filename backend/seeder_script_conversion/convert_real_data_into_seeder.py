# Take real uploaded Sgfs, Puzzles, and Potential Puzzles and turn those into seeder data (get ~1000 puzzles or something?)
# Do this with the demo user account on the live server?

import psycopg2
import json
from dotenv import load_dotenv
import os
import datetime

# Converts datetime objects using isoformat()
class DateTimeEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime.datetime):
            return obj.isoformat()
        # Let the base class default method raise the TypeError
        return json.JSONEncoder.default(self, obj)

# Get the current date and time
current_datetime = datetime.datetime.now()
timestamp = current_datetime.strftime("%Y%m%d_%H%M%S")

# Use the timestamp in the filenames
sgfs_filename = f'sgfs_seeder_{timestamp}.json'
puzzles_filename = f'puzzles_seeder_{timestamp}.json'
potential_puzzles_filename = f'potential_puzzles_seeder_{timestamp}.json'

# Load environment variables from .env
load_dotenv('../.env')

# Database URL from environment variable (go to Render database, then scroll down to "external database url", copy that into our .env)
database_url = os.getenv("RENDER_EXTERNAL_DATABASE_URL")

# Connect to the database using the URL
conn = psycopg2.connect(database_url)

# Cursor to execute queries
cur = conn.cursor()

# SQL to extract data from Sgfs, Puzzles, and PotentialPuzzles tables
cur.execute('SELECT * FROM go_website_schema85."Sgfs"')
sgfs_data = cur.fetchall()

# print(sgfs_data)
cur.execute('SELECT * FROM go_website_schema85."Puzzles"')
puzzles_data = cur.fetchall()

cur.execute('SELECT * FROM go_website_schema85."PotentialPuzzles"')
potential_puzzles_data = cur.fetchall()

# Formatting the data to match structure and order of fields in seeder data
sgfs_formatted = [
    {
        "user_id": row[0],
        "sgf_data": row[1],
        "sgf_name": row[2],
        "black_player": row[3],
        "white_player": row[4],
        "black_rank": row[5],
        "white_rank": row[6],
        "komi": row[7],
        "game_date": row[8],
        "thumbnail": row[9],
        "suspended": row[10],
        "result": row[11],
        "createdAt": row[12],
        "updatedAt": row[13],

    } for row in sgfs_data
]

puzzles_formatted = [
    {
        "sgf_id": row[0],
        "sgf_data": row[1],
        "category": row[2],
        "move_number": row[3],
        "difficulty": row[4],
        "description": row[5],
        "vote_count": row[6],
        "board_size": row[7],
        "solution_coordinates": row[8],
        "thumbnail": row[9],
        "suspended": row[10],
        "createdAt": row[11],
        "updatedAt": row[12],
    } for row in puzzles_data
]

potential_puzzles_formatted = [
    {
        "user_id": row[0],
        "sgf_id": row[1],
        "sgf_data": row[2],
        "category": row[3],
        "move_number": row[4],
        "solution_coordinates": row[5],
        "difficulty": row[6],
        "thumbnail": row[7],
        "createdAt": row[8],
        "updatedAt": row[9],
    } for row in potential_puzzles_data
]

with open(sgfs_filename, 'w') as sgfs_file:
    json.dump(sgfs_formatted, sgfs_file, cls=DateTimeEncoder)

with open(puzzles_filename, 'w') as puzzles_file:
    json.dump(puzzles_formatted, puzzles_file, cls=DateTimeEncoder)

with open(potential_puzzles_filename, 'w') as potential_puzzles_file:
    json.dump(potential_puzzles_formatted, potential_puzzles_file, cls=DateTimeEncoder)

# Close the cursor and connection
cur.close()
conn.close()
