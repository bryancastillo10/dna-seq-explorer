class SWScoringSystem:
    def __init__(self, match: int = 2, mismatch=-1, gap: int = -1):
        self.match = match
        self.mismatch = mismatch
        self.gap = gap

    def _standard(self, a: str, b: str):
        if a == b:
            return self.match
        elif a == "-" or b == "-":
            return self.gap
        return self.mismatch

    def score(self, a: str, b: str):
        assert isinstance(a, str) and isinstance(b, str)
        assert len(a) == 1 and len(b) == 1
        return self._standard(a, b)