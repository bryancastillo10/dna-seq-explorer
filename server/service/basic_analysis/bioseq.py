from utils.bioStruct import Biomolecules
from collections import Counter

class BioSeq:
    """ Common BioSeq class for DNA, RNA, and Protein sequences """

    def __init__(self, seq="ATCG", seq_type="DNA", label="None"):
        self.seq = seq.upper()
        self.label = label
        self.seq_type = seq_type
        self.is_valid = self.__validate()
        if not self.is_valid:
            raise ValueError(f"Invalid sequence at {self.label}, please make sure it matches the provided sequence type")

    def __validate(self):
        """Check if the sequence is valid for its biomolecule type."""
        return set(Biomolecules[self.seq_type]).issuperset(self.seq)

    def nucleotide_frequency(self):
        """Counts nucleotides and returns a frequency dictionary."""
        return dict(Counter(self.seq))