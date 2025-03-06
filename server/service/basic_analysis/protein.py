from service.basic_analysis.bioseq import BioSeq
from service.basic_analysis.dna_rna import DNAService

from Bio.Seq import Seq
from Bio.SeqUtils.IsoelectricPoint import IsoelectricPoint as IEP

from utils.bioStruct import AminoAcid_Masses

class ProteinService:

    def amino_mw(bio_obj: BioSeq):
        """Calculate the molecular weight of the protein sequence."""
        return round(sum(AminoAcid_Masses.get(aa, 0) for aa in bio_obj.seq))

    def calc_iso_point(bio_obj: BioSeq):
        """Calculate the isoelectric point of the protein sequence."""
        prot_seq = Seq(bio_obj.seq)
        return round(IEP(prot_seq).pi(), 2)

    def all_protein_analysis(bio_obj: BioSeq):
        """Return a dictionary with all protein related analysis results."""
        return {
            "aminoAcidSequence": bio_obj.seq,
            "molecularWeight": ProteinService.amino_mw(bio_obj),
            "aminoAcidFrequency": bio_obj.nucleotide_frequency(),
            "isoelectricPoint": ProteinService.calc_iso_point(bio_obj),
        }
