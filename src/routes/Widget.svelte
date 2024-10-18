<script>
	export let generate;

	let showAnswer = true;

	let a = {
		question: "a",
		answer: "b",
	};
	function callGenerate() {
		a = generate();
	}

	function toggle() {
		showAnswer = !showAnswer;
	}
	callGenerate();
</script>

<tr>
	<td style="width: 300px; font-size:larger;">
		{@html a.question}
		{#if showAnswer}
			{@html a.answer}
		{/if}
	</td>
	<td>
		<button on:click={callGenerate}>&#8634;</button>
		<button on:click={toggle}>&#128065;</button>
	</td>
</tr>
