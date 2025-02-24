from models.dna import SingleSequence


from utils.bioStruct import (
    Biomolecules,
    DNA_Codons,
    RNA_Codons,
    AminoAcid_Masses,
)

from collections import Counter
from Bio.Seq import Seq
from Bio.SeqUtils.IsoelectricPoint import IsoelectricPoint as IEP

import random


class BioSeq:
    """DNA, RNA, and Protein sequence class. Default values: ATCG, DNA, None"""

    def __init__(self, seq="ATCG", seq_type="DNA", label="None"):
        """Sequence initialization, validation"""
        self.seq = seq.upper()
        self.label = label
        self.seq_type = seq_type
        self.is_valid = self.__validate()
        if not self.is_valid:
            raise ValueError()

    # DNA Toolkit Section
    def __validate(self):
        """Check the input sequences to verify if it is a valid DNA or Protein"""
        return set(Biomolecules[self.seq_type]).issuperset(self.seq)

    def get_seq_info(self):
        """Returns four strings. Full sequence information"""
        return f"Label: {self.label :<10}\nBiomolecule Type: {self.seq_type :<10}\nSequence Length: {len(self.seq) :<10}"

    def nucleotide_frequency(self):
        """Counts the nucleotides in a given sequence. Returns a formatted string."""
        freq = Counter(self.seq)

        # formatted_output = "\n".join(
        #     [f" {base}:{count}" for base, count in freq.items()]
        # )
        return freq


    def transcription(self):
        """DNA -> RNA Transcription. Replacing Thymine with Uracil"""
        if self.seq_type == "DNA":
            return self.seq.replace("T", "U")
        return "Not a DNA sequence"

    def reverse_complement(self):
        """
        Swapping adenine with thymine and guanine with cytosine.
        Reversing the nucleotide sequence to generate another string
        """
        if self.seq_type == "DNA":
            mapping = str.maketrans("ATCG", "TAGC")
        else:
            mapping = str.maketrans("AUCG", "UAGC")
        return self.seq.translate(mapping)[::]

    def gc_content(self):
        """GC Content in a DNA/RNA sequence"""
        return round(
            ((self.seq.count("C") + self.seq.count("G")) / len(self.seq)) * 100
        )

    def gc_content_subseq(self, k=20):
        """GC content in a DNA/RNA sub-sequence length k, k = 20 by default"""
        res = []
        for i in range(0, len(self.seq) - k + 1, k):
            subseq = self.seq[i : i + k]
            res.append(
                round(((subseq.count("C") + subseq.count("G")) / len(subseq)) * 100)
            )
        return res

    def translate_seq(self, init_pos=0):
        """Translates a DNA sequence into an amino acid sequence"""
        if self.seq_type == "DNA":
            nuc_list = [DNA_Codons[self.seq[pos : pos + 3]] for pos in range(init_pos, len(self.seq) - 2, 3)]
            return ''.join(nuc_list)

        elif self.seq_type == "RNA":
            nuc_list = [RNA_Codons[self.seq[pos : pos + 3]] for pos in range(init_pos, len(self.seq) - 2, 3)]
            return ''.join(nuc_list)

    def gen_reading_frames(self):
        """Generate the six reading frames of a DNA sequence, including the reverse complement"""
        frames = []
        frames.append(self.translate_seq(0))
        frames.append(self.translate_seq(1))
        frames.append(self.translate_seq(2))
        tmp_seq = BioSeq(self.reverse_complement(), self.seq_type)
        frames.append(tmp_seq.translate_seq(0))
        frames.append(tmp_seq.translate_seq(1))
        frames.append(tmp_seq.translate_seq(2))
        del tmp_seq
        return frames

    def proteins_from_rf(self, aa_seq):
        """Returns a list of all possible proteins based on the amino acid sequence"""
        current_prot = []
        proteins = []
        for aa in aa_seq:
            if aa == "*":  # Stop Codon
                for p in current_prot:
                    proteins.append(p)
                current_prot = []
            else:
                if aa == "M":  # Start Codon
                    current_prot.append("")
                for i in range(len(current_prot)):
                    current_prot[i] += aa
        return proteins

    def all_proteins_from_orfs(self, startReadPos=0, endReadPos=0, ordered=False):
        """Compute all possible proteins for all open reading frames"""
        """Protein Search DB: https://www.ncbi.nlm.nih.gov/nuccore/NM_001185097.2"""
        """API can be used to pull protein info"""
        if endReadPos > startReadPos:
            tmp_seq = bio_seq(self.seq[startReadPos:endReadPos], self.seq_type)
            rfs = tmp_seq.gen_reading_frames()
        else:
            rfs = self.gen_reading_frames()

        res = []
        for rf in rfs:
            prots = self.proteins_from_rf(rf)
            for p in prots:
                res.append(p)

        if ordered:
            return sorted(res, key=len, reverse=True)
        return res

    # Protein Toolkit Section
    def amino_mw(self):
        """Calculates the molecular weight of the protein sequence"""
        return round(sum(AminoAcid_Masses[aa] for aa in self.seq))

    def calc_iso_point(self):
        """Calculates the isoelectric point of the protein sequence"""
        prot_seq = Seq(self.seq)
        pI = round(IEP(prot_seq).pi(), 2)
        return pI

def analyze_sequence(data: SingleSequence):
    """
    Process the input sequence based on its type.
    For DNA/RNA sequences, perform nucleotide-related analyses.
    For Protein sequences, compute properties like molecular weight and isoelectric point.
    """
    bio_obj = BioSeq(seq=data.seq, seq_type=data.seq_type, label=data.label if hasattr(data, "label") else "None")
    
    if data.seq_type.upper() in ["DNA", "RNA"]:
        return {
            "transcription": bio_obj.transcription() if data.seq_type.upper() == "DNA" else "N/A",
            "reverse_complement": bio_obj.reverse_complement(),
            "gc_content": bio_obj.gc_content(),
            "nucleotide_frequency": bio_obj.nucleotide_frequency(),
            "translated_sequence": bio_obj.translate_seq(),
            "proteins": bio_obj.all_proteins_from_orfs(ordered=True)
        }
    elif data.seq_type.upper() == "PROTEIN":
        return {
            "amino_acid_sequence": bio_obj.seq,
            "molecular_weight": bio_obj.amino_mw(),
            "isoelectric_point": bio_obj.calc_iso_point()
        }
    else:
        raise ValueError("Unsupported sequence type.")