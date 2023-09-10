from io import BytesIO
import base64
import os
from PIL import Image, ImageDraw
from sgfmill import sgf, boards


def draw_board(board_size, star_points, num_moves, node, draw):
    # def draw_board(board_size, star_points, num_moves, node, draw, initial_state=None):
    # Draw the star points on the Go board
    # 19 by 19 board uses 9 star points, 13 by 13 and 9 by 9 board use 5 star points
    # Iterate over each tuple in star_points list
    for x, y in star_points:
        # calculate the x and y coordinates of the center of the circle
        cx = x * cell_size
        cy = y * cell_size
        # Use integer division (no decimal, just whatever integer it is) to get the radius of the stone
        r = stone_size // 10
        # second argument is the color, fill=0 means black
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=0)

    # # New section: draw the initial state if available
    # if initial_state:
    #     for color, positions in initial_state.items():
    #         for row, col in positions:
    #             cx = (col+1) * cell_size
    #             cy = (board_size-row) * cell_size
    #             r = stone_size // 2
    #             draw.ellipse((cx-r, cy-r, cx+r, cy+r), fill=black_stone_color if color == "b" else white_stone_color)

    # Draw initial stones from AB and AW properties (new code)
    initial_black_stones = node.get("AB") if node.has_property("AB") else []
    initial_white_stones = node.get("AW") if node.has_property("AW") else []

    for row, col in initial_black_stones:
        cx = (col + 1) * cell_size
        cy = (board_size - row) * cell_size
        r = stone_size // 2
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=black_stone_color)

    for row, col in initial_white_stones:
        cx = (col + 1) * cell_size
        cy = (board_size - row) * cell_size
        r = stone_size // 2
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=white_stone_color)

    # Create a new Go board object to keep track of stone groups and captures
    go_board = boards.Board(board_size)

    # Iterate over the first num_moves moves of the game or until the game ended
    for _ in range(num_moves):
        # Get the next node in the game tree
        try:
            # attempts to get the next node in the game tree by accessing the first child of the current node
            # if the current node has no children (ex. it's a leaf node) an IndexError will be raised
            node = node[0]
            # this catches the IndexError and then breaks out of the for loop, ending the game early
            # if there are no more moves to play
        except IndexError:
            break

        # Get the move information from the node, returns a tuple containing the color of the
        # player making the move (color) and the coordinates of the move (move)
        color, move = node.get_move()
        # Indicates that the move is a "pass", if so, the loop continues to the next iteration without playing a move
        if move is None:
            continue
        # Unpack (destructure in JS) the move coordinates (tuple) into separate variables row and column
        row, col = move
        # This line attempts to play a stone of the specified color at the specified row and column on the Go board by calling its play() method
        try:
            go_board.play(col, row, color)

        except Exception as e:
            # This line catches any exceptions that may be raised when attempting to play a move (e.g., if it is an illegal move) and prints an error message
            print(f'Error playing move: {e}')

    # Iterate over rows and columns of Go board to draw stones based on state of Board object
    for row in range(board_size):
        for col in range(board_size):
            # Gets the state of the intersection at the current row and column by calling the get() method of the go_board object
            # The method returns "b" if there is a black stone at the intersection, "w" if there is a white stone, and None if the intersection is empty
            stone = go_board.get(col, row)
            if stone == "b":
                # Calculates the x-coordinate of the center of the stone
                # by multiplying the column index by a scaling factor called cell_size and adding 1 to account for the board margin
                cx = (col+1)*cell_size
                cy = (board_size-row) * cell_size
                # Calculates the radius of the stone by dividing a variable called stone_size by 2 using integer division
                r = stone_size//2
                draw.ellipse((cx-r, cy-r, cx+r, cy+r), fill=black_stone_color)
            elif stone == "w":
                cx = (col+1)*cell_size
                cy = (board_size-row) * cell_size
                r = stone_size//2
                draw.ellipse((cx-r, cy-r, cx+r, cy+r), fill=white_stone_color)

# But Render can't find /backend/uploads now! so 2 line solution below


# Get the directory containing this script
script_dir = os.path.dirname(os.path.abspath(__file__))
# Construct the path to the uploads directory
sgf_dir = os.path.join(script_dir, '..', 'backend', 'uploads')

# Set the directory for saving the generated images
output_dir = os.path.join('sgfThumbnails')

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Set the size of each cell in the Go board
cell_size = 80

# Set the size of each stone
stone_size = 72

# Set the colors for the Go board and stones
board_color = (255, 204, 102)
black_stone_color = (0, 0, 0)
white_stone_color = (255, 255, 255)

# Iterate over the SGF files in the directory
for filename in os.listdir(sgf_dir):
    # Set the input and output file names
    input_file = os.path.join(sgf_dir, filename)
    output_file = os.path.join(
        output_dir, f'{os.path.splitext(filename)[0]}_thumbnail.png')

    # Load the SGF file
    with open(input_file, 'r') as f:
        game = sgf.Sgf_game.from_string(f.read())

    # Get the root node of the game tree
    node = game.get_root()

    # Get the size of the Go board from the SGF file (more dynamic than hard coding in board size of 19)
    board_size = game.get_size()

    # Create a new image for the Go board
    img_size = cell_size * (board_size + 1)
    img = Image.new('RGB', (img_size, img_size), board_color)
    draw = ImageDraw.Draw(img)

    # Draw the grid lines on the Go board
    for i in range(board_size):
        x = y = (i + 1) * cell_size
        draw.line((x, cell_size, x, img_size - cell_size), fill=0)
        draw.line((cell_size, y, img_size - cell_size, y), fill=0)

    if board_size == 19:
        star_points = [(4, 4), (4, 10), (4, 16), (10, 4),
                       (10, 10), (10, 16), (16, 4), (16, 10), (16, 16)]
        # num_moves set to 50 to draw on 19 by 19 board
        draw_board(board_size=board_size,
                   star_points=star_points,
                   num_moves=50, node=node, draw=draw)
    elif board_size == 13:
        star_points = [(4, 4), (4, 10), (7, 7), (10, 4), (10, 10)]
        # num_moves set to 20 to draw on 13 by 13 board
        draw_board(board_size=board_size,
                   star_points=star_points,
                   num_moves=20, node=node, draw=draw)
    elif board_size == 9:
        star_points = [(3, 3), (3, 7), (5, 5), (7, 3), (7, 7)]
        # num_moves set to 12 to draw on 9 by 9 board
        draw_board(board_size=board_size,
                   star_points=star_points,
                   num_moves=12, node=node, draw=draw)

    # Save image to file
    img.save(output_file)


def generatePreview(sgf_data):
    # Load the SGF data
    game = sgf.Sgf_game.from_string(sgf_data)

    # Get the root node of the game tree
    node = game.get_root()

    print("***** NODE: ", node)
    print("*** node.get('AB')", node.get('AB'))
    print("*** node.get('AW')", node.get('AW'))

    # Get the size of the Go board from the SGF file (more dynamic than hard coding in board size of 19)
    board_size = game.get_size()

    # Create a new image for the Go board
    img_size = cell_size * (board_size + 1)
    img = Image.new('RGB', (img_size, img_size), board_color)
    draw = ImageDraw.Draw(img)

    # # New section: get initial state from root node if available
    # initial_state = {}
    # if "AB" in node.properties:
    #     initial_state["b"] = node.properties["AB"]
    # if "AW" in node.properties:
    #     initial_state["w"] = node.properties["AW"]

    # Draw the grid lines on the Go board
    for i in range(board_size):
        x = y = (i + 1) * cell_size
        draw.line((x, cell_size, x, img_size - cell_size), fill=0)
        draw.line((cell_size, y, img_size - cell_size, y), fill=0)

    if board_size == 19:
        star_points = [(4, 4), (4, 10), (4, 16), (10, 4),
                       (10, 10), (10, 16), (16, 4), (16, 10), (16, 16)]
        # num_moves set to 50 to draw on 19 by 19 board
        draw_board(board_size=board_size,
                   star_points=star_points,
                   # added draw=draw here in all the board sizes
                   num_moves=50, node=node, draw=draw)
            # num_moves=50, node=node, draw=draw, initial_state=initial_state)

    elif board_size == 13:
        star_points = [(4, 4), (4, 10), (7, 7), (10, 4), (10, 10)]
        # num_moves set to 20 to draw on 13 by 13 board
        draw_board(board_size=board_size,
                   star_points=star_points,
                   num_moves=20, node=node, draw=draw)
            # num_moves=20, node=node, draw=draw, initial_state=initial_state)

    elif board_size == 9:
        star_points = [(3, 3), (3, 7), (5, 5), (7, 3), (7, 7)]
        # num_moves set to 12 to draw on 9 by 9 board
        draw_board(board_size=board_size,
                   star_points=star_points,
                   num_moves=12, node=node, draw=draw)
            # num_moves=12, node=node, draw=draw, initial_state=initial_state)

    # Save image to in-memory buffer
    buffer = BytesIO()
    img.save(buffer, format="PNG")

    img_data = buffer.getvalue()

    # Encode image data as base64 string
    img_base64 = base64.b64encode(img_data).decode("utf-8")

    return img_base64
