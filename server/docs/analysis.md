### **Basic Analysis**

### ![Static Badge](https://img.shields.io/badge/POST-%23F0E442?style=flat&logoColor=%23111000) /analysis/basic

**📝 Request Body (DNA/RNA):**

```json
	{
		"sample_name":"Sample Data Label",
		"seq_type":"DNA",
		"seq":"GCTACTAGCAGGGGCAGCAGCATTCGAATGCTGCGCTACTAGCAGGCTAAGTGCAGGAT"

	}
```

**📝 Request Body (Protein):**

```json
{
    "sample_name":"Sample Data Label",
    "seq_type":"Protein",
    "seq":"ATSRGSSIYTRMKNPEVDYQRFWSGLHQTYWCAPTRIQKYDFTRGNTVWA"
}

```

**✅ Response Body (Success) DNA/RNA:**

```json
	{
    "message": "Basic Sequence Analysis is Successful",
    "sampleLabel": "Sample Data Label",
    "data": {
        "transcription": "GCUACUAGCAGGGGCAGCAGCAUUCGAAUGCUGCGCUACUAGCAGGCUAAGUGCAGGAU",
        "reverseComplement": "ATCCTGCACTTAGCCTGCTAGTAGCGCAGCATTCGAATGCTGCTGCCCCTGCTAGTAGC",
        "gcContent": 56,
        "nucleotideFrequency": {
            "G": 19,
            "C": 14,
            "T": 11,
            "A": 15
        },
        "translatedSequence": "ATSRGSSIRMLRY*QAKCR"
    }
}

``` 


**✅ Response Body (Success) Protein:**

```json
{
    "message": "Basic Sequence Analysis is Successful",
    "sampleLabel": "Sample Data Label",
    "data": {
        "aminoAcidSequence": "ATSRGSSIYTRMKNPEVDYQRFWSGLHQTYWCAPTRIQKYDFTRGNTVWA",
        "molecularWeight": 5958,
        "aminoAcidFrequency": {
            "A": 3,
            "T": 6,
            "S": 4,
            "R": 5,
            "G": 3,
            "I": 2,
            "Y": 4,
            "M": 1,
            "K": 2,
            "N": 2,
            "P": 2,
            "E": 1,
            "V": 2,
            "D": 2,
            "Q": 3,
            "F": 2,
            "W": 3,
            "L": 1,
            "H": 1,
            "C": 1
        },
        "isoelectricPoint": 9.74
    }
}

```

**🚫 Response Body (Error):**

```json
{
    "detail": "Invalid sequence, please make sure it matches the provided sequence type"
}
``` 

### **Advanced Analysis**

### ![Static Badge](https://img.shields.io/badge/POST-%23F0E442?style=flat&logoColor=%23111000) /analysis/advanced

**📝 Request Body**

```json
{
  "sample_name": "Chloroplast Sample Test",
  "seq_type": "DNA",
  "seq": "ATGTCACCACAAACAGAAACTAAAGGCTTATGTGGTGGTATGATGCTTCATGTTTAAATGAAAGCTTCACGAACTTGAAGAGGTCATGGAGTTTAACTCCTCTCCCTTATTCGTATGTAGGACATTCACGATCGTCAGTACATGTCAAGGCTTGACATGTAGGTATCGTTAG"
}

```

**✅ Response Body (Success):**

```json
{
    "message": "Advanced Sequence Analysis is Successful",
    "sampleLabel": "Chloroplast Sample Test",
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
    "dnaType": "Mitochondrial",
    "kingdomTaxa": "Plant"
}
``` 

**🚫 Response Body (Error):**

```json
{
    "detail": "Invalid sequence, please make sure it matches the provided sequence type"
}
``` 