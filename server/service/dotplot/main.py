from models.dna import PairwiseSequence
from service.basic_analysis.bioseq import BioSeq

import numpy as np 

from service.dotplot.dotmatrix import DotMatrix

def perform_dotplot_alignment(data: PairwiseSequence):
	"""To perform the methods for pairwise dotplot alignment """
	seq_A = BioSeq(seq= data.seq_A, seq_type= data.seq_type, label=data.seq_A_label)
	seq_B = BioSeq(seq= data.seq_B, seq_type= data.seq_type, label= data.seq_B_label)
	
	empty_matrix = np.empty((0,0), dtype=str)
	
	dot_matrix = DotMatrix(empty_matrix, data.seq_A, data.seq_B, data.seq_A_label, data.seq_B_label)

	result = dot_matrix.calculate_dotmatrix(data.seq_A_label, data.seq_B_label)

	return result