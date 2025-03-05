export const DNAMockData = [
	{    
	"sampleLabel": "Sample DNA Data Label",
    "data": {
        "transcription": "GCUACUAGCAGGGGCAGCAGCAUUC",
        "reverse_complement": "GAATGCTGCTGCCCCTGCTAGTAGC",
        "gc_content": 60,
        "nucleotide_frequency": {
            "G": 8,
            "C": 7,
            "T": 4,
            "A": 6
        },
        "translated_sequence": "ATSRGSSI"}
	}
]

export const proteinMockData = [
    {
        "sampleLabel": "Sample Protein Data Label",
        "data": {
            "amino_acid_sequence": "ATSRGSSIYTR",
            "molecular_weight": 1180,
            "amino_acid_frequency": {
                "A": 1,
                "T": 2,
                "S": 3,
                "R": 2,
                "G": 1,
                "I": 1,
                "Y": 1
            },
            "isoelectric_point": 10.84
        }
    }
]

export const advancedMockData = [
    {
    "sampleLabel": "ChloroplastTest",
        "codonUsage": {
            "AUG": 0.12280701754385964,
            "UCA": 0.05263157894736842,
            "CCA": 0.017543859649122806,
            "CAA": 0.017543859649122806,
            "ACA": 0.017543859649122806,
            "GAA": 0.017543859649122806,
            "ACU": 0.03508771929824561,
            "AAA": 0.03508771929824561,
            "GGC": 0.017543859649122806,
            "UUA": 0.03508771929824561,
            "UGU": 0.017543859649122806,
            "GGU": 0.05263157894736842,
            "CUU": 0.05263157894736842,
            "CAU": 0.03508771929824561,
            "GUU": 0.03508771929824561,
            "UAA": 0.03508771929824561,
            "GCU": 0.017543859649122806,
            "CGA": 0.017543859649122806,
            "UGA": 0.017543859649122806,
            "AGA": 0.017543859649122806,
            "GGA": 0.017543859649122806,
            "CUC": 0.03508771929824561,
            "UCC": 0.017543859649122806,
            "AUU": 0.03508771929824561,
            "CGU": 0.03508771929824561,
            "UAG": 0.03508771929824561,
            "GAC": 0.03508771929824561,
            "CAC": 0.017543859649122806,
            "GAU": 0.017543859649122806,
            "CAG": 0.017543859649122806,
            "UAC": 0.017543859649122806,
            "AGG": 0.017543859649122806,
            "GUA": 0.017543859649122806,
            "UCG": 0.017543859649122806
        },
        "prediction": "mitochondrial"
    }
]