### **Dotplot Sequence Alignment**

### ![Static Badge](https://img.shields.io/badge/POST-%23F0E442?style=flat&logoColor=%23111000) /sequencing/dotplot

**📝 Request Body**

```json

{
  "seq_type":"DNA",
  "seq_A": "ATCGATCGATGGATCGATCGATCGATCGATCGATCGATCGATCGAGGCATCAG",
  "seq_B": "ATGGATCGGATGGATCGATCGATCGATCGATCGATCGATCGATCGAGGCAGGT",
  "seq_A_label": "My Sequence 1",
  "seq_B_label": "My Sequence 2"
}

```


**✅ Response Body (Success):**

```json

{
    "message": "Dotplot Alignment is successful",
    "data": {
        "seqALabel": "My Sequence 1",
        "seqBLabel": "My Sequence 2",
        "match": 9,
        "mismatch": 44,
        "image": "iVBORw0KGgoAAAANSUhEUgAAAy8AAAMvCAYAAADbLe8wAAAAOnRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZ..."
    }
}

``` 

**🚫 Response Body (Error):**

```json
{
    "detail": "Invalid sequence, please make sure it matches the provided sequence type"
}
``` 

### **Local Pairwise Sequence Alignment**

### ![Static Badge](https://img.shields.io/badge/POST-%23F0E442?style=flat&logoColor=%23111000) /sequencing/local

**📝 Request Body**

```json
{
  "seq_type":"DNA",
  "seq_A_label":"Sequence 1",
  "seq_B_label":"Sequence 2",
  "seq_A": "AGCCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGAT",
  "seq_B": "ATCGATCGATGGATCGATCGATCGATCGATCGATCGATCGATCGAT"
}

```


**✅ Response Body (Success):**

```json
{
    "message": "Local Alignment is successful",
    "data": {
        "seqALabel": "Sequence 1",
        "alignedSeqA": "CGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGA",
        "seqBLabel": "Sequence 2",
        "alignedSeqB": "CGATCGATGGATCGATCGATCGATCGATCGATCGATCGATCGA",
        "similarity": 97.67
    }
}

``` 

**🚫 Response Body (Error):**

```json
{
    "detail": "Invalid sequence, please make sure it matches the provided sequence type"
}

``` 

### **Global Pairwise Sequence Alignment**

### ![Static Badge](https://img.shields.io/badge/POST-%23F0E442?style=flat&logoColor=%23111000) /sequencing/global

**📝 Request Body**

```json
{
  "seq_type":"DNA",
  "seq_A_label":"Sequence 1",
  "seq_B_label":"Sequence 2",
  "seq_A": "AGCCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGAT",
  "seq_B": "ATCGATCGATGGATCGATCGATCGATCGATCGATCGATCGATCGAT"
}

```


**✅ Response Body (Success):**


```json

{
    "message": "Global Alignment is successful",
    "data": {
        "seqALabel": "Sequence 1",
        "alignedSeqA": "AGCCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGAT",
        "seqBLabel": "Sequence 2",
        "alignedSeqB": "ATCG-ATCGATGGATCGATCGATCGATCGATCGATCGATCGATCGAT",
        "similarity": 91.49
    }
}

``` 

**🚫 Response Body (Error):**

```json
{
    "detail": "Invalid sequence, please make sure it matches the provided sequence type"
}
``` 
