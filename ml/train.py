import pandas as pd 
import pickle

from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

# Data Loading & Preparation
df = pd.read_csv('codon_usage.csv', low_memory=False)

codon_df = df.loc[:,df.columns[6:]]
codon_df = codon_df.drop([5063])  # row 5063 of data has detected string value upon analysis
df2 = df.drop([5063])  # it was removed to reduce inconsistent data type
codon_df = codon_df.apply(pd.to_numeric)

# Data Splitting
X = codon_df
y = df2['DNAtype']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.20)

# Train AI Model (KNN Algorithm)
knn = KNeighborsClassifier(n_neighbors=6)

knn.fit(X_train, y_train)

print(knn.score(X_test, y_test))

#  Saving the model as pickle file
with open('trained_ai.pkl','wb') as file:
    pickle.dump(knn, file)
