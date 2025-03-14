import { useState, useEffect } from "react";



const useDelayedLoading = (loading: boolean) => {
	const [minLoading, setMinLoading] = useState<boolean>(true);
	const delayTime = 2500;

	useEffect(() => {
		const timer = setTimeout(() => {
			setMinLoading(false);
		}, delayTime);

		return () => clearTimeout(timer);
	},[delayTime]);

	return loading || minLoading;

}

export default useDelayedLoading
