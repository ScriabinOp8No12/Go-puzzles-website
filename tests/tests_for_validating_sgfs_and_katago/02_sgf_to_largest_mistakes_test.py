from katago.sgf_to_largest_mistakes import run_katago_analysis
# from katago.parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves

def test_run_katago_analysis():

  ''' This operation takes a while, and will block the rest of the pytests, I've temporarily
      made the number of visits 2 (smallest amount to still run the analysis properly) to make this
      go as quickly as possible for testing.

      NOTE: This has no assertions, please manually verify that the output is valid and the AI recommended
      moves are decent.  At 2 visits, the recommended moves should still be reasonable, it's just that the
      follow up answer variations might be short or non-existent.
  '''

  test_json_string = '{"id":"sgfTest3","rules":"chinese","komi":7.5,"boardXSize":19,"boardYSize":19,"initialPlayer":"W","analyzeTurns":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"initialStones":[],"moves":[["B","R16"],["W","D4"],["B","Q3"],["W","D16"],["B","C17"],["W","D17"],["B","C16"],["W","C15"],["B","B15"],["W","B14"],["B","C14"],["W","D15"],["B","B13"],["W","B16"],["B","A14"],["W","B17"],["B","O17"],["W","R5"],["B","R8"],["W","P4"],["B","P3"],["W","O4"],["B","N2"],["W","M3"],["B","N3"],["W","N4"],["B","M4"],["W","L3"],["B","M5"],["W","S3"],["B","R2"],["W","S2"],["B","M2"],["W","L2"],["B","O3"],["W","P6"],["B","K4"],["W","J3"],["B","J4"],["W","H3"],["B","G5"],["W","F4"],["B","P8"],["W","O7"],["B","N9"],["W","S16"],["B","S15"],["W","R17"],["B","S17"],["W","Q16"],["B","R15"],["W","S18"],["B","T16"],["W","Q15"],["B","Q17"],["W","P17"],["B","R18"],["W","O16"],["B","P18"],["W","P16"],["B","N17"],["W","N16"],["B","M16"],["W","M15"],["B","L15"],["W","L14"],["B","L16"]]}'

  # Run the analysis
  json_analysis_results = run_katago_analysis(test_json_string)
  print(json_analysis_results)

  # Takes CPU ~205 seconds for this 67 move game, took GPU ~35 seconds for same game.  GPU around 6x faster
