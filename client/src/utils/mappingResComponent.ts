// import NucleotideBasicResult from "@/features/singleSeq/components/NucleotideBasicResult";
// import ProteinBasicResult from "@/features/singleSeq/components/ProteinBasicResult";

// export const componentMapping: Record<string, React.ComponentType<{ data: any }>> = {
//   dnaRna: NucleotideBasicResult,
//   protein: ProteinBasicResult,
// };

// const getComponentForData = (data) => {
//   let componentKey: keyof typeof componentMapping | null = null;

//   // Determine the component key based on unique keys in the data
//   if (data.transcription || data.reverse_complement) {
//     componentKey = "dnaRna";
//   } else if (data.amino_acid_sequence || data.molecular_weight) {
//     componentKey = "protein";
//   }
//   if(!componentKey){
// 	return "No component found";
//   }
// }

// export default getComponentForData;
