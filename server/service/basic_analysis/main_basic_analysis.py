from models.dna import SingleSequence

from service.basic_analysis.bioseq import BioSeq
from service.basic_analysis.dna_rna import DNAService
from service.basic_analysis.protein import ProteinService

def analyze_sequence(data: SingleSequence):
    """
    Process the input sequence based on its type.
    For DNA/RNA sequences, use DNAService.
    For Protein sequences, use ProteinService.
    """
    bio_obj = BioSeq(seq=data.seq, seq_type=data.seq_type, label=getattr(data, "label", "None"))
    
    if bio_obj.seq_type in ["DNA", "RNA"]:
        return DNAService.all_dna_analysis(bio_obj)
    elif bio_obj.seq_type == "PROTEIN":
        return ProteinService.all_protein_analysis(bio_obj)
    else:
        raise ValueError("Unsupported sequence type.")
