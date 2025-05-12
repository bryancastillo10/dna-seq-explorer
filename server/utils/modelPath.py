import os

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DNAType_Model_Path = os.path.join(base_dir, 'ml', 'dnaTypePrediction.pkl')
Kingdom_Model_Path = os.path.join(base_dir, 'ml', 'kingdomTaxaPrediction.pkl')