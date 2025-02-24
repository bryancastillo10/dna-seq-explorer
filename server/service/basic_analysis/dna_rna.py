from service.basic_analysis.bioseq import BioSeq

from utils.bioStruct import DNA_Codons, RNA_Codons

class DNAService:

    def transcription(bio_obj: BioSeq):
        """Transcribe a DNA sequence into RNA."""
        if bio_obj.seq_type == "DNA":
            return bio_obj.seq.replace("T", "U")
        return "Not a DNA sequence"


    def reverse_complement(bio_obj: BioSeq):
        """Return the reverse complement of the sequence."""
        if bio_obj.seq_type == "DNA":
            mapping = str.maketrans("ATCG", "TAGC")
        else:
            mapping = str.maketrans("AUCG", "UAGC")
        return bio_obj.seq.translate(mapping)[::-1]


    def gc_content(bio_obj: BioSeq):
        """Calculate the GC content percentage."""
        return round(((bio_obj.seq.count("C") + bio_obj.seq.count("G")) / len(bio_obj.seq)) * 100)


    def translate_seq(bio_obj: BioSeq, init_pos=0):
        """Translate a DNA/RNA sequence to an amino acid sequence."""
        if bio_obj.seq_type == "DNA":
            codon_table = DNA_Codons
        elif bio_obj.seq_type == "RNA":
            codon_table = RNA_Codons
        else:
            return "Not applicable"
        nuc_list = [
            codon_table[bio_obj.seq[pos:pos+3]] 
            for pos in range(init_pos, len(bio_obj.seq)-2, 3)
        ]
        return ''.join(nuc_list)

    def all_dna_analysis(bio_obj: BioSeq):
        """Return a dictionary with all DNA/RNA related analysis results."""
        return {
            "transcription": DNAService.transcription(bio_obj),
            "reverse_complement": DNAService.reverse_complement(bio_obj),
            "gc_content": DNAService.gc_content(bio_obj),
            "nucleotide_frequency": bio_obj.nucleotide_frequency(),
            "translated_sequence": DNAService.translate_seq(bio_obj)
        }
