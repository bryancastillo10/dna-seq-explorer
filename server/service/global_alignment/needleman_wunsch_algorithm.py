import numpy as np

from service.global_alignment.nw_scoring import NWScoringSystem

class NeedlemanWunschAlgorithm:
    def __init__(self, scoring_sys, seqA, seqB) -> None:
        self.seqA = seqA
        self.seqB = seqB
        self.scoring_sys = NWScoringSystem()
        self.M = None

    def seq_alignment(self, seqA, seqB):
        self.initialize_matrix(seqA, seqB)
        self.fill_matrix(seqA, seqB)
        self.traceback(seqA, seqB)
        return self.aligned_seq_A, self.aligned_seq_B

    def initialize_matrix(self, seqA: str, seqB: str):
        # Prepare
        rows, cols = len(seqA) + 1, len(seqB) + 1

        # Initialize Zero Matrix
        self.M = np.zeros(shape=(rows, cols), dtype=int)

        # Initialize First Row and First Column
        penalty = self.scoring_sys.gap
        self.M[0, :] = np.arange(start=0, stop=penalty * cols, step=penalty)
        self.M[:, 0] = np.arange(start=0, stop=penalty * rows, step=penalty)

    def fill_matrix(self, seqA, seqB):
        for row in range(1, self.M.shape[0]):
            for col in range(1, self.M.shape[1]):
                # Positioning the Gap indices
                a = seqA[row - 1]
                b = seqB[col - 1]

                # Scoring Conditions and Deciding the Final Score
                score_func = self.scoring_sys.score
                # Score Based on the Diagonal Side
                diag_score = self.M[row - 1, col - 1] + score_func(a, b)
                # Score Based on the Upper Side
                up_score = self.M[row - 1, col] + score_func("-", b)
                # Score Based on the Left Side
                side_score = self.M[row, col - 1] + score_func(a, "-")

                summary_scores = [diag_score, up_score, side_score]
                decision = np.argmax(summary_scores)

                self.M[row, col] = summary_scores[decision]

    def traceback(self, seqA, seqB):
        alignment_A = ""
        alignment_B = ""

        row, col = self.M.shape[0] - 1, self.M.shape[1] - 1

        while row > 0 or col > 0:
            diag_score = (
                self.M[row - 1, col - 1] if row > 0 and col > 0 else float("-inf")
            )
            up_score = self.M[row - 1, col] if row > 0 else float("-inf")
            side_score = self.M[row, col - 1] if col > 0 else float("-inf")

            move = np.argmax([diag_score, up_score, side_score])
            if move == 0:  # Diagonal Movement
                alignment_A = seqA[row - 1] + alignment_A
                alignment_B = seqB[col - 1] + alignment_B
                row -= 1
                col -= 1
            elif move == 1:  # Up Movement
                alignment_A = seqA[row - 1] + alignment_A
                alignment_B = "-" + alignment_B
                row -= 1
            else:  # Left Movement
                alignment_A = "-" + alignment_A
                alignment_B = seqB[col - 1] + alignment_B
                col -= 1

        self.aligned_seq_A = alignment_A
        self.aligned_seq_B = alignment_B

    def calc_similarity(self):
        match_pos = sum(a == b for a, b in zip(self.aligned_seq_A, self.aligned_seq_B))
        total_pos = len(self.aligned_seq_A)
        percent_similarity = round((match_pos / total_pos) * 100, 2)

        return percent_similarity