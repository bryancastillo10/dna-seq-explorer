import pandas as pd 
import pickle

from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import AdaBoostClassifier

# Data Loading & Preparation
df = pd.read_csv('codon_usage.csv', low_memory=False)

df['Kingdom'] = df['Kingdom'].astype('category')
df['Kingdom_code'] = df['Kingdom'].cat.codes

codon_df = df.loc[:, df.columns[5:]]
if 'Kingdom_code' in codon_df.columns:
    codon_df = codon_df.drop(columns=['Kingdom_code'])

codon_df = codon_df.drop([5063, 486])  # rows 5063 & 486 of data has detected string value upon analysis
df2 = df.drop([5063, 486])  # it was removed to reduce inconsistent data type

codon_df = codon_df.apply(pd.to_numeric, errors='coerce') 

# Data Splitting
X = codon_df
y = df2['Kingdom_code']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.20)

# Train AI Model (Decision Tree Classifier Algorithm)
dt = DecisionTreeClassifier(random_state= 1)
ada_dt = AdaBoostClassifier(estimator=dt, random_state = 1)
print("Training...")

ada_dt.fit(X_train, y_train)

print(ada_dt.score(X_test, y_test))

try:
    with open('kingdomTaxaPrediction.pkl','wb') as file:
        pickle.dump(ada_dt, file)

    print("Model for Kingdom prediction has been saved succesfully")

except Exception as e:
    print(f"An error occured while saving the model {e}")
