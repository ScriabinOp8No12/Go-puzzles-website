from sgfmill import sgf

def convert_rank_to_elo(rank):
    if not rank:
        return 1500  # Default ELO if rank is not provided

    rank_lower = rank.lower()
    numeric_rank = int(''.join(filter(str.isdigit, rank_lower)))

    if 'p' in rank_lower:
        elo = 3000  # Professional ranks
    elif 'd' in rank_lower or '段' in rank or '단' in rank: # Chinese/Japanese and Korean character for dan ranks
        elo = 2000 + numeric_rank * 100
    elif 'k' in rank_lower or '级' in rank or '급' in rank: # Chinese/Japanese and Korean character for kyu ranks
        elo = max(100, (21 - numeric_rank) * 100)
    else:
        return 1500  # Default for unrecognized format, likely different language

    return min(3000, max(100, elo))  # Ensure ELO is between 100 and 3000

def get_average_elo(black_elo, white_elo):
    return round((black_elo + white_elo) / 2)

def set_potential_puzzle_difficulty(sgf_data):
    sgf_game = sgf.Sgf_game.from_string(sgf_data)
    game_info = sgf_game.get_root().get_raw_property_map()

    black_rank = game_info.get('BR', [None])[0].decode('utf-8') if game_info.get('BR') else None
    white_rank = game_info.get('WR', [None])[0].decode('utf-8') if game_info.get('WR') else None

    black_elo = convert_rank_to_elo(black_rank)
    white_elo = convert_rank_to_elo(white_rank)

    return get_average_elo(black_elo, white_elo)
