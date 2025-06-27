## 🧬 DNA Seq Explorer Web App

This **React-Typescript & Python-FastAPI** web application helps life science enthusiasts in performing basic analysis of fundamental biomolecules such as **DNA, RNA, & protein**. It includes features such as calculating sequence parameters, predicting taxa and DNA type, as well as performing pariwise sequence alignments.

The architecture of this app does not include storage system (no database), but it offers a **report export feature** for saving the analysis results. For the tech stacks, the client side is mainly built from React-Typescript, together with Material UI, Tanstack Router, React-Query, and Zustand. Meanwhile, the server side is powered by Python-FastAPI with libraries such as numpy, reportlab, pydantic, and sci-kit learn.

## 1. Client Side Directory

```bash
#client/src

├── 📸 assets
│   ├── 📂 icons
│   └── 📂 images
├── 🧩 components
│   ├── 📂 common
│   ├── 📂 layout
│   ├── 📂 navigations
│   ├── 📂 providers
│   └── 📂 ui
├── 🔢 constants
├── 📑context
├── 🌐 features
│   ├── 📂 dotplot
│   ├── 📂 fileExport
│   ├── 📂 home
│   ├── 📂 pairSeq
│   └── 📂 singleSeq
├── 🪝hooks
├── 🛣️ routes
├── 🛠️utils
└── 📖zustand

```

## 2. Server Side Directory

```bash
├── 🛜 api
├── 🗃️ example
├── 📖 lib
├── 💾 models
├── 🔬service
│   ├── 📂 advanced_analysis
│   ├── 📂 basic_analysis
│   ├── 📂 dotplot
│   ├── 📂 file_export
│   ├── 📂 global_alignment
│   └── 📂 local_alignment
├── 🛠️ utils

```

## 3. Preview (Screenshots)

![dna-seq-explorer-screenshot-1](preview1.png)

![dna-seq-explorer-screenshot-2](preview2.png)

## 4. User Features

![Static Badge](https://img.shields.io/badge/Basic_Sequence_Analysis-%23006da3?style=flat)

> Analyze DNA/RNA or protein sequences to extract some key biological information. For DNA/RNA, results includes the transcription, reverse complement, translation, GC content, and nucleotide frequency. Meanwhile, protien sequence can have results such as molecular weight (Da), isoelectric point, and amino acid frequency.

![Static Badge](https://img.shields.io/badge/Advanced_Sequence_Analysis-%23006da3?style=flat)

> Leverages a trained AI model to predict taxonomic classification (Kingdom level) and DNA type (e.g. genomic, mitochondrial, chloroplast). The AI was built using a public dataset from the UCI Machine Learning Repository. This feature demonstrates my skill set in the foundations of machine learning and its API integration via a Python microservice.

![Static Badge](https://img.shields.io/badge/Dotplot_Pairwise_Alignment-%23006da3?style=flat)

> Dotplot alignment is a fundamental computational biology method to have a brief comparison between two sequences and it is basically just plotting the matches of a base/amino acid. Leveraging the graphing library of matplotlib, the API endpoint can generate an image based on the input pair sequence for dotplot alignment. It should be noted that dotplot alignment is just based on a simple matching algorithmm and highly susceptible to noise/redundancy so complex gene comparison may not be suitable for this.

![Static Badge](https://img.shields.io/badge/Local_Pairwise_Sequence_Analysis-%23006da3?style=flat)

> Local pairwise sequence alignment feature based on the scoring system by Smith-Waterman algorithm. This feature is ideal for identifying conserved regions or subsequences which are called motifs within large sequences.

![Static Badge](https://img.shields.io/badge/Global_Pairwise_Sequence_Analysis-%23006da3?style=flat)

> Global pairwise sequence alignment feature based on the scoring system by Neeedleman-Wunsch algorithm. It is suitable for comparing an entire sequence of DNA or protein to reveal evolutionary relationships and functional similarities.

## 5 Software System Architecture & Machine Learning Workflow

![dna-seq-explorer-architecture](architecture.png)

Raw Data Preprocessing & AI Modeling (AI Development Phase)
![machine-learning](machine-learning-screenshot.png)

![machine-learning-2](machine-learning-screenshot-2.png)

## 6 API Documentation

This project demonstrates REST API using Python FastAPI framework which are generally several POST request methods for analysis and export file feature.

📖 **[View Full Documentation](server/docs/index.md)**

## 7 Licenses

MIT License

Copyright (c) 2025 Bryan Castillo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
