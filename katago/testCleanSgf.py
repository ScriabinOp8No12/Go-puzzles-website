from sgfmill import sgf

def clean_sgf(file_path):

    with open(file_path, 'r', encoding='utf-8') as file:
        sgf_text = file.read()
    game = sgf.Sgf_game.from_string(sgf_text)
    cleaned_sgf = []

    # Add root properties
    cleaned_sgf.append("(")
    root_node = game.get_root()
    cleaned_sgf.append(";")
    for prop, values in root_node.get_raw_property_map().items():
        # exclude comments, game comment, good for black/white, add black/white stones, add empty (delete move in branch), triangle and square symbol
        if prop not in ['C', 'GC', 'GB', 'GW', 'AB', 'AW', 'AE', 'TR', 'SQ' ]:
            for value in values:
                cleaned_sgf.append(f"{prop}[{value.decode('utf-8')}]")  # Decode bytes object

    # Add main branch nodes
    node = root_node
    while node:
        if node:  # Check if node has children
            child = node[0]  # Consider only the first child (main branch)
            cleaned_sgf.append(";")
            for prop, values in child.get_raw_property_map().items():
                # exclude comments, game comment, good for black/white, add black/white stones, triangle and square symbol, add empty (delete move in branch)
                if prop not in ['C', 'GC', 'GB', 'GW', 'AB', 'AW', 'TR', 'SQ', 'AE']:
                    for value in values:
                        cleaned_sgf.append(f"{prop}[{value.decode('utf-8')}]")  # Decode bytes object
            node = child
        else:
            node = None

    cleaned_sgf.append(")")

    cleaned_sgf_str = "".join(cleaned_sgf)
    # print(cleaned_sgf_str)  # Print the cleaned SGF string
    return cleaned_sgf_str

sgf_file_path = 'backend/glift/adding_random_comments_to_arthur_game_for_testing.sgf'

clean_sgf(sgf_file_path)
