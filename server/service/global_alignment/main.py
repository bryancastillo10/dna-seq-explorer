from models.dna import PairwiseSequence
from service.basic_analysis.bioseq import BioSeq

from service.global_alignment.needleman_wunsch_algorithm import NeedlemanWunschAlgorithm
from service.global_alignment.nw_scoring import NWScoringSystem

def perform_global_alignment(data: PairwiseSequence):
	""" To perform the methods of global alignment """
	seq_A = BioSeq(seq= data.seq_A, seq_type= data.seq_type, label=data.seq_A_label)
	seq_B = BioSeq(seq= data.seq_B, seq_type= data.seq_type, label= data.seq_B_label)

	nw_algo = NeedlemanWunschAlgorithm(scoring_sys = NWScoringSystem(), 
                                        seqA = data.seq_A,
                                        seqB = data.seq_B )
	
	aligned_seq_A, aligned_seq_B = nw_algo.seq_alignment(data.seq_A, data.seq_B)

	similarity = nw_algo.calc_similarity()
	
	return {
        "aligned_seq_A": aligned_seq_A,
        "aligned_seq_B": aligned_seq_B,
        "similarity": similarity
    }
