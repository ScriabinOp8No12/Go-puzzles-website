import re

def convert_sgf_data_exclude_variations(sgf_data):
 # Find the index of the second semicolon
    first_semicolon = sgf_data.find(';')
    second_semicolon = sgf_data.find(';', first_semicolon + 1)

    # Find the index of the first '(' after the second semicolon
    first_parenthesis = sgf_data.find('(', second_semicolon)

    # Extract the specific section to be modified
    section_to_modify = sgf_data[second_semicolon:first_parenthesis]

    # Extract all B and W moves from this section
    b_moves = re.findall(r';B\[(\w+)\]', section_to_modify)
    w_moves = re.findall(r';W\[(\w+)\]', section_to_modify)

    # Create a single AB and AW sequence with all respective moves
    ab_sequence = 'AB[' + ']['.join(b_moves) + ']' if b_moves else ''
    aw_sequence = 'AW[' + ']['.join(w_moves) + ']' if w_moves else ''

    # Replace original section with modified one in the SGF data
    modified_section = ab_sequence + aw_sequence
    converted_sgf_data = sgf_data[:second_semicolon] + modified_section + sgf_data[first_parenthesis:]

    return converted_sgf_data

# Convert the SGF data, excluding variations
converted_sgf_data = convert_sgf_data_exclude_variations("(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq] (;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))")

print(converted_sgf_data)
