<script>
  export let type = "primary";
  export let text = "button";
  export let onClick;

  function handleButtonClick(event) {
    if (typeof onClick === "function") {
      onClick(event);
    }
  }
</script>

<style>
  button {
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 5px 16px 5px 16px;
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.5s;
  }

  .primary {
    border-color: #2196f3;
    color: dodgerblue;
  }

  .primary:hover {
    box-shadow: 1px 1px 1px #2196f3;
  }
</style>

<button
  on:click={handleButtonClick}
  class:primary={type === 'primary'}
  contenteditable="false">
  {text}
</button>
