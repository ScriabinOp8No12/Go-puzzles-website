from katago.clean_sgf_add_comments_for_endpoint import convert_to_sgf
import pytest


@pytest.mark.parametrize("test_coord, board_size, expected", [
    ("P6", 19, "on"),
    ("R3", 19, "qq"),
    ("K4", 19, "jp"),
    ("C18", 19, "cb"),
    ("S2", 19, "rr")

])
def test_convert_to_sgf(test_coord, board_size, expected):
    ''' Converts the KataGo move into sgf coordinates '''
    output = convert_to_sgf(test_coord, board_size)
    assert output == expected
