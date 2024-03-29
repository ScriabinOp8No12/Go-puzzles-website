from io import BytesIO
import base64
from PIL import Image, ImageDraw
from sgfmill import sgf, boards

# Set the size of each cell in the Go board
cell_size = 80

# Set the size of each stone
stone_size = 72

# Set the colors for the Go board and stones
board_color = (255, 204, 102)
black_stone_color = (0, 0, 0)
white_stone_color = (255, 255, 255)


def draw_board(board_size, star_points, num_moves, node, draw):
    # Iterate over each tuple in star_points list
    for x, y in star_points:
        # calculate the x and y coordinates of the center of the circle
        cx = x * cell_size
        cy = y * cell_size
        # Use integer division to get the radius of the stone
        r = stone_size // 10
        # second argument is the color, fill=0 means black
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=0)

    # Draw initial stones from AB and AW properties
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

    # Iterate over the first num_moves moves of the game or until the game is over
    for _ in range(num_moves):
        try:
            # attempts to get the next node in the game tree by accessing the first child of the current node
            # if the current node has no children (ex. it's a leaf node) an IndexError will be raised
            node = node[0]
            # this catches the IndexError and then breaks out of the for loop, ending the game early if there are no more moves to play
        except IndexError:
            break

        # Get the move information from the node, returns a tuple containing the color of the
        # player making the move (color) and the coordinates of the move (move)
        color, move = node.get_move()
        # Indicates that the move is a "pass", if so, the loop continues to the next iteration without playing a move
        if move is None:
            continue
        # Unpack move coordinates (tuple) into separate variables row and column
        row, col = move
        # This line attempts to play a stone of the specified color at the specified row and column on the Go board by calling its play() method
        try:
            go_board.play(col, row, color)

        except Exception as e:
            # This line catches any exceptions that may be raised when attempting to play a move (ex. if it is an illegal move)
            print(f'Error playing move: {e}')

    # Iterate over rows and columns of Go board to draw stones based on state of Board object
    for row in range(board_size):
        for col in range(board_size):
            # Gets the state of the intersection at the current row and column by calling the get() method of the go_board object
            # The method returns "b" if there is a black stone at the intersection, "w" if there is a white stone, and None if the intersection is empty
            stone = go_board.get(col, row)
            if stone == "b":
                # Calculates the x-coordinate of the center of the stone
                # by multiplying the column index by a scaling factor cell_size (defined at the top of this file) and adding 1 to account for the board margin
                cx = (col+1) * cell_size
                cy = (board_size-row) * cell_size
                # Calculates the radius of the stone by dividing a variable called stone_size by 2 using integer division
                r = stone_size//2
                draw.ellipse((cx-r, cy-r, cx+r, cy+r), fill=black_stone_color)
            elif stone == "w":
                cx = (col+1) * cell_size
                cy = (board_size-row) * cell_size
                r = stone_size//2
                draw.ellipse((cx-r, cy-r, cx+r, cy+r), fill=white_stone_color)

def generatePreview(sgf_data, move_number = None):

    game = sgf.Sgf_game.from_string(sgf_data)
    node = game.get_root()
    # Get the size of the Go board from the SGF file (SZ property)
    board_size = game.get_size()

    # Number of moves to draw for the thumbnail based on the board size
    if move_number is None:
        if board_size == 19:
            move_number = 50
        elif board_size == 13:
            move_number = 20
        elif board_size == 9:
            move_number = 12

    # Create a new image for the Go board
    img_size = cell_size * (board_size + 1)
    img = Image.new('RGB', (img_size, img_size), board_color)
    draw = ImageDraw.Draw(img)

    # Draw the grid lines on the Go board
    for i in range(board_size):
        x = y = (i + 1) * cell_size
        draw.line((x, cell_size, x, img_size - cell_size), fill=0)
        draw.line((cell_size, y, img_size - cell_size, y), fill=0)

    # Different board sizes have different locations for their star points
    if board_size == 19:
        star_points = [(4, 4), (4, 10), (4, 16), (10, 4),
                       (10, 10), (10, 16), (16, 4), (16, 10), (16, 16)]
        draw_board(board_size=board_size,
               star_points=star_points,
               num_moves=move_number, node=node, draw=draw)

    elif board_size == 13:
        star_points = [(4, 4), (4, 10), (7, 7), (10, 4), (10, 10)]
        draw_board(board_size=board_size,
               star_points=star_points,
               num_moves=move_number, node=node, draw=draw)

    elif board_size == 9:
        star_points = [(3, 3), (3, 7), (5, 5), (7, 3), (7, 7)]
        draw_board(board_size=board_size,
               star_points=star_points,
               num_moves=move_number, node=node, draw=draw)

    # Save image to in-memory buffer
    buffer = BytesIO()
    img.save(buffer, format="PNG")

    img_data = buffer.getvalue()

    # Encode image data as base64 string
    img_base64 = base64.b64encode(img_data).decode("utf-8")

    return img_base64
