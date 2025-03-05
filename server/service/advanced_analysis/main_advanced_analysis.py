from models.dna import SingleSequence

from service.basic_analysis.bioseq import BioSeq
from service.basic_analysis.dna_rna import DNAService

from service.advanced_analysis.dna_rna import CodonUsage

def prepare_codon_usage_analysis(data: SingleSequence):
	"""
	Process the input sequence
	"""
	bio_obj = BioSeq(seq=data.seq, seq_type=data.seq_type, label=getattr(data, "label", "None"))

	if bio_obj.seq_type == "DNA":
		rna_seq = DNAService.transcription(bio_obj)
	elif bio_obj.seq_type == "RNA":
		rna_seq = bio_obj.seq
	else:
		raise ValueError("Protein sequence is invalid for this feature")
	
	codon_usage = CodonUsage.calculate_codon_usage(rna_seq)

	return codon_usage
