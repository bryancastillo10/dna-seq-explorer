from typing import Dict, Any, List, Optional

from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph

class PrepareResults:
    def __init__(self, results: Dict[str, Any], mapping: Dict[str, str] = None):
        """Initialize the results pre-processor with optional key mapping."""
        if not isinstance(results, dict):
            raise TypeError(f"Expected results to be a dictionary, got {type(results)} instead")

        self.results = results
        self.mapping = mapping if mapping else {}
        self.mapped_results = self.map_keys(self.results, self.mapping)

    def map_keys(self, results: Dict[str, Any], mapping: Dict[str, str]) -> Dict[str, Any]:
        """Convert dictionary keys based on a reference mapping."""
        return {mapping.get(k, k): v for k, v in results.items()}

    def get_label_paragraph(
        self, 
        seq_label: Optional[str] = None,
        seq_A_label: Optional[str] = None,
        seq_B_label: Optional[str] = None
    ):
        """ Generate a sample label for single or pair sequence"""
        styles = getSampleStyleSheet()
        title_style = styles["Title"]

        if seq_label:
            return Paragraph(f"{seq_label}", title_style)
        elif seq_A_label and seq_B_label:
            return Paragraph(f"Pairwise {seq_A_label} vs {seq_B_label}", title_style)
        else:
            return Paragraph("Unknown Sequence Label", title_style)

    def to_nested_list(self) -> List[List[Any]]:
        """Convert dictionary to a nested list with wrapped text for ReportLab tables."""
        
        styles = getSampleStyleSheet()
        normal_style = styles["Normal"]

        table_data = [["Parameter", "Analysis Result"]]

        for key, value in self.mapped_results.items():
            if isinstance(value, dict): 
                table_data.append([key, ""])  
                for sub_key, sub_value in value.items():
                    table_data.append([f" - {sub_key}", Paragraph(str(sub_value), normal_style)])
            else:
                table_data.append([key, Paragraph(str(value), normal_style)]) 
        
        return table_data
