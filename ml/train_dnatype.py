import pandas as pd 
import pickle

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier

# Data Loading & Preparation
df = pd.read_csv('codon_usage.csv', low_memory=False)

codon_df = df.loc[:,df.columns[5:]]
codon_df = codon_df.drop([5063, 486])  # rows 5063 & 486 of data has detected string value upon analysis
df2 = df.drop([5063, 486])  # it was removed to reduce inconsistent data type

codon_df = codon_df.apply(pd.to_numeric, errors='coerce') 

# Data Splitting
X = codon_df
y = df2['DNAtype']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.20)


# Train AI Model (Random Forest Classifier Algorithm)
rfc = RandomForestClassifier(random_state=1)
print("Training...")
ada_rf = AdaBoostClassifier(estimator=rfc, n_estimators=180, random_state=1)

ada_rf.fit(X_train,y_train)

print(ada_rf.score(X_test, y_test))

#  Saving the model as pickle file
try:
    with open('dnaTypePrediction.pkl','wb') as file:
        pickle.dump(ada_rf, file)

    print("Model for DNA Type prediction has been saved succesfully")

except Exception as e:
    print(f"An error occured while saving the model {e}")
