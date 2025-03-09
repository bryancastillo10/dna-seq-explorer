import pandas as pd 
import pickle

from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import AdaBoostClassifier

# Data Loading & Preparation
df = pd.read_csv('codon_usage.csv', low_memory=False)

codon_df = df.loc[:,df.columns[5:]]
codon_df = codon_df.drop([5063, 486])  # rows 5063 & 486 of data has detected string value upon analysis
df2 = df.drop([5063, 486])  # it was removed to reduce inconsistent data type

codon_df = codon_df.apply(pd.to_numeric, errors='coerce') 

# Data Splitting
X = codon_df
y = df2['Kingdom']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.20)

# Train AI Model (Random Forest Classifier Algorithm)
knn = KNeighborsClassifier(n_neighbors=6)
print("Training...")

knn.fit(X_train, y_train)


print(knn.score(X_test, y_test))
try:
    with open('kingdomTaxaPrediction.pkl','wb') as file:
        pickle.dump(knn, file)

    print("Model for Kingdom prediction has been saved succesfully")

except Exception as e:
    print(f"An error occured while saving the model {e}")
