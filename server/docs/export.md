### **Single Sequence Analysis Export**

### ![Static Badge](https://img.shields.io/badge/POST-%23F0E442?style=flat&logoColor=%23111000) /export/single-seq

**📝 Request Body**

```json
{
    "feature":"basic",
    "seq_label":"Example DNA Label",
    "results":  {
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
    },
    "output_format":"pdf"
}
```


**✅ Response Body (Success):**

 - Status Code: **200 OK**
 - Content-Type: application/pdf, text/csv, text/plain

Filenames are auto-generated using your seq_label or feature with a timestamp

**🚫 Response Body (Error):**

```json
{
  "detail": "Invalid input or unsupported output format"
}
``` 

### **Pairwise Sequence Export**

### ![Static Badge](https://img.shields.io/badge/POST-%23F0E442?style=flat&logoColor=%23111000) /export/pair-seq

**📝 Request Body**

```json
{
    "feature":"global",
    "seq_A_label":"Sequence Alignment A Label",
    "seq_B_label":"Sequence B Label Here",
    "results":{
        "alignedSeqA": "AGCCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGAT",
        "alignedSeqB": "ATCG-ATCGATGGATCGATCGATCGATCGATCGATCGATCGATCGAT",
        "similarity": 91.49
    },
    "output_format":"pdf"
}

```


**✅ Response Body (Success):**

 - Status Code: **200 OK**
 - Content-Type: application/pdf, text/csv, text/plain

Filenames are auto-generated using your seq_label or feature with a timestamp


**🚫 Response Body (Error):**

```json
{
  "detail": "Invalid input or unsupported output format"
}
``` 