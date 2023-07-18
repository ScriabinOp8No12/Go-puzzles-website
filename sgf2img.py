from sgfmill import sgf
from PIL import Image, ImageDraw
import os

# Set the directory containing the SGF files
sgf_dir = 'backend/uploads'

# Set the directory for saving the generated images
output_dir = 'sgfThumbnails'

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Set the size of the Go board
board_size = 19

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
    # if filename.endswith('.sgf'):
    # Set the input and output file names
    input_file = os.path.join(sgf_dir, filename)
    output_file = os.path.join(
        output_dir, f'{os.path.splitext(filename)[0]}_thumbnail.png')

    # Load the SGF file
    with open(input_file, 'r') as f:
        game = sgf.Sgf_game.from_string(f.read())

    # Get the root node of the game tree
    node = game.get_root()

    # Create a new image for the Go board
    img_size = cell_size * (board_size + 1)
    img = Image.new('RGB', (img_size, img_size), board_color)
    draw = ImageDraw.Draw(img)

    # Draw the grid lines on the Go board
    for i in range(board_size):
        x = y = (i + 1) * cell_size
        draw.line((x, cell_size, x, img_size - cell_size), fill=0)
        draw.line((cell_size, y, img_size - cell_size, y), fill=0)

    # Draw the star points on the Go board
    star_points = [(4, 4), (4, 10), (4, 16), (10, 4),
                   (10, 10), (10, 16), (16, 4), (16, 10), (16, 16)]
    for x, y in star_points:
        cx = x * cell_size
        cy = y * cell_size
        r = stone_size // 4
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=0)

    # Iterate over the first 30 moves of the game
    for i in range(30):
        # Get the next node in the game tree
        try:
            node = node[0]
        except IndexError:
            break

        # Get the move information from the node
        color, move = node.get_move()
        if move is None:
            continue

        # Convert the move coordinates to image coordinates
        row, col = move
        cx = (col + 1) * cell_size
        cy = (row + 1) * cell_size

        # Draw the stone on the Go board
        r = stone_size // 2
        if color == 'b':
            draw.ellipse((cx - r, cy - r, cx + r,
                          cy + r), fill=black_stone_color)
        else:
            draw.ellipse((cx - r, cy - r,
                          cx + r, cy + r), fill=white_stone_color)

    # Save the image to a file
    img.save(output_file)
