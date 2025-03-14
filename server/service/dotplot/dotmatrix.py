import io
import base64
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors

class DotMatrix:
    def __init__(self, M, seq_A, seq_B, seq_A_label, seq_B_label):
        self.M = M
        self.seq_A = seq_A
        self.seq_B = seq_B
        self.seq_A_label = seq_A_label
        self.seq_B_label = seq_B_label  # Corrected assignment

    def matrix_dim(self):
        """Set Up Matrix Dimensions"""
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

    def fill_plot(self, seq_A_label, seq_B_label, M, match, mismatch):
        """Fill the plot based on calculated matrix"""
        cmap = mcolors.ListedColormap(["#009688", "#FFECD1"])
        bounds = [0, 0.5, 1]
        norm = mcolors.BoundaryNorm(bounds, cmap.N)

        fig, ax = plt.subplots(figsize=(10, 10), dpi=100)
        label_section = f"\n{seq_A_label}\n{seq_B_label}"
        fig.text(0.5, 0.90, label_section, fontsize=15, ha="center")

        # Remove the header row and column from the matrix for plotting
        M_plot = np.delete(M, 0, axis=1)
        M_plot = np.delete(M_plot, 0, axis=0)

        # Convert to boolean: True where cell equals "*", False otherwise.
        M_bool = (M_plot == "*")
        ax.imshow(M_bool, cmap=cmap, norm=norm)

        ax.set_xticks([])
        ax.set_yticks([])
        ax.set_ylabel(seq_A_label, fontsize=15)  # Corrected method name and parameter
        ax.set_xlabel(seq_B_label, fontsize=15)

        subcaption = f"Number of aligned bases: {match}\nNumber of mismatched bases: {mismatch}"
        fig.text(0.5, 0.02, subcaption, fontsize=15, ha="center")

        buf = io.BytesIO()
        plt.savefig(buf, format='png', bbox_inches='tight')
        plt.close(fig)
        buf.seek(0)

        image_base64 = base64.b64encode(buf.read()).decode('utf-8')
        return image_base64

    def calculate_dotmatrix(self, seq_A_label, seq_B_label):
        self.M = np.full((len(self.seq_A) + 1, len(self.seq_B) + 1), "", dtype=str)
        for rows in range(len(self.seq_A)):
            self.M[rows + 1][0] = self.seq_A[rows]
        for cols in range(len(self.seq_B)):
            self.M[0][cols + 1] = self.seq_B[cols]
        
        match, mismatch, matrix = self.matrix_dim()

        # If you need the raw matrix as a list, you can keep this:
        # matrix_list = matrix.tolist()

        image_base64 = self.fill_plot(seq_A_label, seq_B_label, matrix, match, mismatch)

        return {
            "seqALabel": seq_A_label,
            "seqBLabel": seq_B_label,
            "match": match,
            "mismatch": mismatch,
            "image": image_base64
        }
