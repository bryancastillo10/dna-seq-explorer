from models.dna import PairwiseSequence

from service.basic_analysis.bioseq import BioSeq

from service.local_alignment.smith_waterman_algorithm import SmithWatermanAlgorithm
from service.local_alignment.sw_scoring import SWScoringSystem

def perform_local_alignment(data: PairwiseSequence):
	"""To perform the methods for pairwise local alignment"""
	seq_A = BioSeq(seq= data.seq_A, seq_type= data.seq_type, label=data.seq_A_label)
	seq_B = BioSeq(seq= data.seq_B, seq_type= data.seq_type, label= data.seq_B_label)
	
	sw_algo = SmithWatermanAlgorithm(scoring_sys= SWScoringSystem(),
                                        seqA = data.seq_A,
                                        seqB= data.seq_B )

	aligned_seq_A, aligned_seq_B = sw_algo.seq_alignment(data.seq_A, data.seq_B)
	similarity = sw_algo.calc_similarity()

	return {
            "aligned_seq_A": aligned_seq_A,
            "aligned_seq_B": aligned_seq_B,
            "similarity": similarity
    }