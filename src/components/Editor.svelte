<script>
  import { onMount } from "svelte";
  import Quill from "quill";

  let contents;

  onMount(() => {
    var editor = new Quill("#editor", {
      modules: { toolbar: "#toolbar" },
      theme: "bubble"
    });

    editor.focus();

    editor.on("text-change", (delta, oldContents, source) => {
      const text = editor.getContents();
    });
  });
</script>

<style>
  :root {
    --light-grey: #95a5a6;
    --text-color: #444;
  }
  main {
    text-align: center;
    width: 90%;
    margin: auto;
    padding: 1em;
  }

  #editor-wrapper {
    width: 960px;
    min-height: 75vh;
    margin: auto;
    margin-top: 5rem;
  }

  #toolbar {
  }
  #editor {
    border: none;
    width: inherit;
    height: inherit;
    margin: auto;
  }
</style>

<main>
  <div id="editor-wrapper">
    <div id="toolbar">
      <button class="ql-bold">Bold</button>
      <button class="ql-italic">Italic</button>
    </div>
    <div id="editor">
      <p>Write something cool here...</p>
    </div>
  </div>
</main>
