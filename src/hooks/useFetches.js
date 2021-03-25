import { useEffect } from "react";

export const useFetches = fetchFunc => {
	useEffect(() => {
		fetchFunc();
	}, [fetchFunc]);
};
