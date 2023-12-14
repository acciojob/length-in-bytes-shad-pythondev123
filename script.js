const byteSize = (str) => {
  // write your code here
	if(str.length===0) return 0;
	let blob= new Blob([str]);
	const size= blob.size;
	return size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
