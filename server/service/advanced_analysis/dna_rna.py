import pandas as pd
import pickle

from utils.bioStruct import Codon_Order 
from utils.prediction_references import DNA_Types

class ClassifyCodon:

    def calculate_codon_usage(seq: str) -> dict:
        """
        Calculate codon usage frequencies for a given nucleotide sequence.
        If the sequence length is not divisible by 3, the leftover bases are ignored.
        """
        codon_usage = {}
        total_codons = len(seq) // 3
        for i in range(0, total_codons * 3, 3):
            codon = seq[i:i+3]
            codon_usage[codon] = codon_usage.get(codon, 0) + 1

        for codon in codon_usage:
            codon_usage[codon] /= total_codons

        return codon_usage


    def classify_codon_usage(codon_usage: dict):
        """Use a pre-trained model to classify based on codon usage."""
        with open('../ml/trained_ai.pkl', 'rb') as file:
            trained_model = pickle.load(file)

        features = {codon: 0.0 for codon in Codon_Order}

        for codon, freq in codon_usage.items():
            if codon in features:
                features[codon] = freq

        feature_vector = pd.DataFrame([features], columns=Codon_Order)
        prediction_code = int(trained_model.predict(feature_vector)[0])
        prediction = DNA_Types.get(prediction_code)

        return prediction

