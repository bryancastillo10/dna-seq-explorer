from service.basic_analysis.bioseq import BioSeq

class CodonUsage:
	def calculate_codon_usage(seq: str) -> dict:
		"""
    	Calculate codon usage frequencies for a given nucleotide sequence.
  	  	If the sequence length is not divisible by 3, the leftover bases are ignored.
    	"""
		codon_usage = { }
		total_codons = len(seq) // 3
		for i in range(0, total_codons * 3, 3):
			codon = seq[i:i+3]
			codon_usage[codon] = codon_usage.get(codon, 0) + 1

		for codon in codon_usage:
			codon_usage[codon] /= total_codons

		return codon_usage