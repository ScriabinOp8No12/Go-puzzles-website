# Take real uploaded Sgfs, Puzzles, and Potential Puzzles and turn those into seeder data (get ~1000 puzzles or something?)
# Do this with the demo user account on the live server?

import psycopg2
import json
from dotenv import load_dotenv
import os
import datetime

# ************* MAKE SURE WE SEED ALL THE SGFS, otherwise we will get a foreign key error when a puzzle is trying to reference an sgf_id that doesn't exist! ***********

# Converts datetime objects using isoformat()
class DateTimeEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime.datetime):
            return obj.isoformat()
        # Let the base class default method raise the TypeError
        return json.JSONEncoder.default(self, obj)

# Use DateTimeEncoder function above when we format
def custom_format(d):
    # Convert each item to 'key: value' format, so that the key does NOT have double quotes around it, ensure values are properly JSON encoded
    formatted_items = [f'{key}: {json.dumps(value, cls=DateTimeEncoder)}' for key, value in d.items()]
    # Join items with commas and enclose in curly braces
    return '{' + ', '.join(formatted_items) + '}'

# Get the current date and time
current_datetime = datetime.datetime.now()
timestamp = current_datetime.strftime("%Y%m%d_%H%M%S")

# Determine the location of our folder this script is in so we can write the output to this folder
script_dir = os.path.dirname(os.path.abspath(__file__))

# Use the timestamp in the filenames
sgfs_filename = os.path.join(script_dir, f'sgfs_seeder_{timestamp}.json')
puzzles_filename = os.path.join(script_dir, f'puzzles_seeder_{timestamp}.json')
potential_puzzles_filename = os.path.join(script_dir, f'potential_puzzles_seeder_{timestamp}.json')

# Load environment variables from .env (since we moved our script into a separate folder, the path was wrong and needed to get updated!)
load_dotenv('backend/.env')

# Database URL from environment variable (go to Render database, then scroll down to "external database url", copy that into our .env)
database_url = os.getenv("RENDER_EXTERNAL_DATABASE_URL")

# Connect to the database using the URL
conn = psycopg2.connect(database_url)

# Cursor to execute queries
cur = conn.cursor()

# SQL to extract data from Sgfs, Puzzles, and PotentialPuzzles tables
cur.execute('SELECT * FROM go_website_schema_seeder."Sgfs"')
sgfs_data = cur.fetchall()

cur.execute('SELECT * FROM go_website_schema_seeder."Puzzles"')
puzzles_data = cur.fetchall()

cur.execute('SELECT * FROM go_website_schema_seeder."PotentialPuzzles"')
potential_puzzles_data = cur.fetchall()

# Formatting the data to match structure and order of fields in seeder data
sgfs_formatted = [
    {
        # row 0 is the primary key id, we don't need that in our seeder data
        "user_id": row[1],
        "sgf_data": row[2],
        "game_date": row[3],
        "sgf_name": row[4],
        # "board_size": row[5],
        "black_player": row[6],
        "white_player": row[7],
        "black_rank": row[8],
        "white_rank": row[9],
        "komi": row[10],
        "result": row[11],
        "thumbnail": row[12],
        "suspended": row[13],
    } for row in sgfs_data
]

puzzles_formatted = [
    {
        "sgf_id": row[1],
        "sgf_data": row[2],
        "category": row[3],
        "move_number": row[4],
        "difficulty": row[5],
        "times_solved": row[6],
        "description": row[7],
        "vote_count": row[8],
        "board_size": row[9],
        "solution_coordinates": row[10],
        "thumbnail": row[11],
        "suspended": row[12],
        "createdAt": row[13],
        "updatedAt": row[14],
    } for row in puzzles_data
]

potential_puzzles_formatted = [
    {
        "user_id": row[1],
        "sgf_id": row[2],
        "sgf_data": row[3],
        "category": row[4],
        "move_number": row[5],
        "solution_coordinates": row[6],
        "difficulty": row[7],
        "thumbnail": row[8],
        "createdAt": row[9],
        "updatedAt": row[10],
    } for row in potential_puzzles_data
]

# Formatting and writing the SGF data to the file
with open(sgfs_filename, 'w') as sgfs_file:
    formatted_data = ',\n'.join([custom_format(item) for item in sgfs_formatted])
    sgfs_file.write(f'[{formatted_data}]')

with open(puzzles_filename, 'w') as puzzles_file:
    formatted_data = ',\n'.join([custom_format(item) for item in puzzles_formatted])
    puzzles_file.write(f'[{formatted_data}]')

with open(potential_puzzles_filename, 'w') as potential_puzzles_file:
    formatted_data = ',\n'.join([custom_format(item) for item in potential_puzzles_formatted])
    potential_puzzles_file.write(f'[{formatted_data}]')

# Close the cursor and connection
cur.close()
conn.close()
