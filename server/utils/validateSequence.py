def validate_sequence(seq:str, seq_type: str) -> bool:
    seq = ''.join(seq.split())    
    seq = seq.upper()

    if seq_type == "DNA":
        valid_chars = set("AGCT")
    elif seq_type == "RNA":
        valid_chars = set("AGCU")
    elif seq_type == "Protein":
        valid_chars = set("ARNDCQEGHILKMFPSTWYV*")
    else:
        raise ValueError("Invalid sequence type. Choose 'DNA', 'RNA', or 'Protein'.")

    isValidated = set(seq).issubset(valid_chars)
    return isValidated