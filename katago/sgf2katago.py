# Converts a SGF into a single line JSON dictionary to feed into the Katago engine
# Looks like difference is SGF has "B" and "W" for the stones, and not "AB" and "AW"
# Komi on Fox games messed up (like 375 komi) -> If komi above 50, drop it to 7.5

# Make sure conversion works on different SGF formats.
# 1. Katago / AI analysis with variations also in SGF
# 2. Comments and words added into SGF
# 3. Test 9by9 and 13by13 boards too!

# JSON dictionary output should be able to allow initial stones, but the new format is shown below:
# analyzeTurns needs to be every single turn, if left blank, it will only check the last move played! (need to use a loop here)
{"id": "testSGF", "moves": [["B", "R16"], ["W", "D4"], ["B", "C15"], ["W", "R4"], ["B", "P3"], ["W", "N3"], ["B", "P5"], ["W", "Q2"], ["B", "Q6"], ["W", "R6"], ["B", "R7"], ["W", "S6"], [
    "B", "S7"], ["W", "P2"], ["B", "Q11"], ["W", "R17"]], "rules": "tromp-taylor", "komi": 7.5, "boardXSize": 19, "boardYSize": 19, "analyzeTurns": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
