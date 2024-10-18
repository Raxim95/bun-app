<script>
	import Widget from "./Widget.svelte";
	import {
		generate1,
		generate2,
		generate3,
		generate4,
		generate5,
		generate6,
	} from "./generationFuncs.js";
</script>

<link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
/>

<table style="width: fit-content;">
	<Widget generate={generate1}></Widget>
	<Widget generate={generate2}></Widget>
	<Widget generate={generate3}></Widget>
	<Widget generate={generate4}></Widget>
	<Widget generate={generate5}></Widget>
	<Widget generate={generate6}></Widget>
</table>
ABS
