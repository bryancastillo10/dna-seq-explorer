import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Typography, Box } from "@mui/material";

import type { Nucleotides, AminoAcid } from "@/features/singleSeq/api/interface";
import FrequencyTooltip from "@/features/singleSeq/components/FrequencyToolTip";

interface BarChartBlockProps {
	title: string;
	data:  Partial<Record<Nucleotides, number>> | Partial<Record<AminoAcid, number>>;
};

const BarChartBlock = ({ title, data }: BarChartBlockProps) => {
	const chartData = Object.entries(data).map(([base,value]) => ({
		name: base,
		value: value ?? 0
	}));
  return (
	<Box marginBottom={4}>
		<Typography variant="h6" marginBottom={2} >{title}</Typography>
		<Box>
			<ResponsiveContainer width="100%" height={350}>
				<BarChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
				<XAxis dataKey="name" />
				<YAxis allowDecimals />
				<Tooltip content={<FrequencyTooltip />} />
				<Bar dataKey="value" fill="#009688" />
				</BarChart>
		</ResponsiveContainer>
	  </Box>
	</Box>
  )
};

export default BarChartBlock
