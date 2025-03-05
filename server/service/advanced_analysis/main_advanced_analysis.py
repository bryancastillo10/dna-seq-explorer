from models.dna import SingleSequence

from service.basic_analysis.bioseq import BioSeq
from service.basic_analysis.dna_rna import DNAService

from service.advanced_analysis.dna_rna import ClassifyCodon

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
	
	return rna_seq

def all_ai_analysis_methods(data: SingleSequence) -> dict:
    """
    Perform advanced analysis: calculate codon usage and classify using the pre-trained model.
    """
    rna_seq = prepare_codon_usage_analysis(data)
    codon_usage = ClassifyCodon.calculate_codon_usage(rna_seq)
    prediction = ClassifyCodon.classify_codon_usage(codon_usage)
    
    return {
        "codon_usage": codon_usage,
        "prediction": prediction
    }

