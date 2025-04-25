interface FileDownload<T> {
	message: T;
	filename: T;
}

export const handleFileDownload = async ( res: Response): Promise<FileDownload<string>> => {
	if(!res.ok){
		const errorRes = await res.json();
		throw new Error(errorRes.detail || "Failed to export the analysis results")
	}

	const filename = res.headers.get("X-Filename") || "Analysis_result"
	const message = res.headers.get("X-Message") || "File Download is Successful";
	
	const blob = await res.blob();
	const url = URL.createObjectURL(blob);

	const a = document.createElement("a");
	a.href = url;
	a.download = filename;

	document.body.appendChild(a);
	a.click();
	a.remove();
	URL.revokeObjectURL(url);

	return { filename, message }
};