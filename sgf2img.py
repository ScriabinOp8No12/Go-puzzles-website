from sgfmill import sgf, boards
from PIL import Image, ImageDraw
import os

# Set the directory containing the SGF files
sgf_dir = 'backend/uploads'

# Set the directory for saving the generated images
output_dir = 'sgfThumbnails'

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Set the size of each cell in the Go board
cell_size = 20

# Set the size of each stone
stone_size = 18

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

    # Get the size of the Go board from the SGF file
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

    # Create a new Go board object to keep track of captures
    go_board = boards.Board(board_size)

    # Draw the star points on the 19 by 19 Go board
    if board_size == 19:
        star_points = [(4, 4), (4, 10), (4, 16), (10, 4),
                       (10, 10), (10, 16), (16, 4), (16, 10), (16, 16)]
        for x, y in star_points:
            cx = x * cell_size
            cy = y * cell_size
            r = stone_size // 4
            draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=0)

    # Iterate over the first 50 moves of the game or if the game ended early
    for i in range(50):
        # Get the next node in the game tree
        try:
            node = node[0]
        except IndexError:
            break

        # Get the move information from the node
        color, move = node.get_move()

        if move is None:
            # use break instead?
            continue

        # Unpack the move coordinates
        row, col = move

        try:
            # Play the move on the board (we are in a loop for first 50 moves)
            go_board.play(col, row, color)
        except Exception as e:
            print(f'Error playing move: {e}')

    # Iterate over rows and columns of Go board to draw stones based on board state
    for row in range(board_size):
        for col in range(board_size):
            stone = go_board.get(col, row)
            # Major bug was here, needed to be: if stone == "b" and if stone == "w" instead of 1 and 2
            if stone == "b":
                cx = (col+1)*cell_size
                cy = (board_size-row) * cell_size
                r = stone_size//2
                draw.ellipse((cx-r, cy-r, cx+r, cy+r), fill=black_stone_color)
            elif stone == "w":
                cx = (col+1)*cell_size
                cy = (board_size-row) * cell_size
                r = stone_size//2
                draw.ellipse((cx-r, cy-r, cx+r, cy+r), fill=white_stone_color)

    # Save image to file
    img.save(output_file)
