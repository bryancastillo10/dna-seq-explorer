import numpy as np

class DotMatrix:
    def __init__(self, M, seq_A, seq_B):
        self.M = M
        self.seq_A = seq_A
        self.seq_B = seq_B
    
    def matrix_dim(self):
        match = 0
        for rows in range(1, self.M.shape[0]):
            for cols in range(1, self.M.shape[1]):
                if self.M[rows][0] == self.M[0][cols]:
                    self.M[rows][cols] = "*"
                    if rows == cols:
                        match += 1
                else:
                    self.M[rows][cols] = " "
        mismatch = self.M.shape[0] - match - 1
        return match, mismatch, self.M

    def calculate_dotmatrix(self, seq_A_label, seq_B_label):
        self.M = np.full((len(self.seq_A) + 1, len(self.seq_B) + 1), "", dtype=str)
        for rows in range(len(self.seq_A)):
            self.M[rows + 1][0] = self.seq_A[rows]
        for cols in range(len(self.seq_B)):
            self.M[0][cols + 1] = self.seq_B[cols]
        
        match, mismatch, matrix = self.matrix_dim()

        matrix_list = matrix.tolist()

        obj_matrix = []
        for row_idx, row in enumerate(matrix_list):
            cells = [{"col": col_idx, "value": cell} for col_idx, cell in enumerate(row)]
            obj_matrix.append({"row": row_idx, "cells": cells})

        return {
            "seq_A_label": seq_A_label,
            "seq_B_label": seq_B_label,
            "match": match,
            "mismatch": mismatch,
            "matrix": obj_matrix
        }