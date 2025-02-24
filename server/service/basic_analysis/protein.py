from service.basic_analysis.bioseq import BioSeq

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
            "amino_acid_sequence": bio_obj.seq,
            "molecular_weight": ProteinService.amino_mw(bio_obj),
            "isoelectric_point": ProteinService.calc_iso_point(bio_obj)
        }
