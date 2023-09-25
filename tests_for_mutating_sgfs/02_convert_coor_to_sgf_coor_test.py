from katago.clean_sgf_add_comments_for_endpoint import convert_to_sgf
import pytest


@pytest.mark.parametrize("test_coord, board_size, expected", [
    ("P6", 19, "on"),
    ("R3", 19, "qq"),
    ("K4", 19, "jp"),
    ("C18", 19, "cb"),
    ("S2", 19, "rr"),
    ("A13", 13, "aa"),
    ("H13", 13, "ha"),
    ("N13", 13, "ma"),
    ("F6", 13, "fh"),
    ("J5", 13, "ii"),
    ("A9", 9, "aa"),
    ("D8", 9, "db"),
    ("G8", 9, "gb"),
    ("F5", 9, "fe"),
    ("J6", 9, "id"),
])
def test_convert_to_sgf(test_coord, board_size, expected):
    ''' Converts the KataGo move into sgf coordinates '''
    output = convert_to_sgf(test_coord, board_size)
    assert output == expected
