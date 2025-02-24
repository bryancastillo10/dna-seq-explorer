import numpy as np

from service.local_alignment.sw_scoring import SWScoringSystem

class SmithWatermanAlgorithm:
    def __init__(self, scoring_sys, seqA, seqB) -> None:
        self.seqA = seqA
        self.seqB = seqB
        self.scoring_sys = SWScoringSystem()
        self.score_mat = None
        self.traceback_mat = None

    def seq_alignment(self, seqA, seqB):
        self.initialize_matrix(seqA, seqB)
        self.fill_matrices(seqA, seqB)
        self.traceback(seqA, seqB)
        return self.aligned_seq_A, self.aligned_seq_B

    def initialize_matrix(self, seqA: str, seqB: str):
        # Prepare
        rows, cols = len(seqA) + 1, len(seqB) + 1

        # Initialize Zero Matrix
        self.score_mat = np.zeros(shape=(rows, cols), dtype=int)
        self.traceback_mat = np.zeros(shape=(rows, cols), dtype=int)

    def fill_matrices(self, seqA, seqB):
        rows = len(seqA)
        cols = len(seqB)
        for row in range(1, rows):
            for col in range(1, cols):
                a = seqA[row - 1]
                b = seqB[col - 1]

                # Scoring Conditions and Deciding the Final Score
                score_func = self.scoring_sys.score
                # Score Based on the Diagonal Side
                diag_score = self.score_mat[row - 1, col - 1] + score_func(a, b)
                # Score Based on the Upper Side
                up_score = self.score_mat[row - 1, col] + score_func("-", b)
                # Score Based on the Down Side
                side_score = self.score_mat[row, col - 1] + score_func(a, "-")

                summary_scores = [diag_score, up_score, side_score, 0]
                decision = np.argmax(summary_scores)

                self.score_mat[row, col] = summary_scores[decision]

        self.score_mat[row, col] = max(summary_scores)
        self.traceback_mat[row, col] = np.argmax(summary_scores)

    def traceback(self, seqA, seqB):
        alignment_A = ""
        alignment_B = ""

        row, col = np.unravel_index(
            np.argmax(self.score_mat, axis=None), self.score_mat.shape
        )

        while self.score_mat[row, col] != 0:
            move = self.traceback_mat[row, col]

            if move == 0:  # Diagonal Movement
                alignment_A = seqA[row - 1] + alignment_A
                alignment_B = seqB[col - 1] + alignment_B
                row -= 1
                col -= 1
            elif move == 1:  # Up Movement
                alignment_A = seqA[row - 1] + alignment_A
                alignment_B = "-" + alignment_B
                row -= 1
            elif move == 2:  # Left Movement
                alignment_A = "-" + alignment_A
                alignment_B = seqB[col - 1] + alignment_B
                col -= 1
            else:
                break

        self.aligned_seq_A = alignment_A
        self.aligned_seq_B = alignment_B

    def calc_similarity(self):
        match_pos = sum(a == b for a, b in zip(self.aligned_seq_A, self.aligned_seq_B))
        total_pos = len(self.aligned_seq_A)
        percent_similarity = round((match_pos / total_pos) * 100, 2)

        return percent_similarity