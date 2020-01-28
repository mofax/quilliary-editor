<style>
  :root {
    --light-grey: #95a5a6;
    --text-color: #444;
  }

  #editor-wrapper {
    width: 960px;
    min-height: 75vh;
    margin: auto;
  }

  #editor {
    border: none;
    width: inherit;
    height: inherit;
    margin: auto;
  }

  :global(#editor .ql-editor) {
    padding-left: 0;
  }
</style>

<script>
  import { onMount } from "svelte";
  import Quill from "quill";

  export let knownBody;
  export let onChange;

  onMount(() => {
    const editor = new Quill("#editor", {
      placeholder: "The body goes here..."
    });
    if (knownBody) {
      editor.setContents(knownBody);
    }
    editor.on("editor-change", (delta, oldContents, source) => {
      if (typeof onChange === "function") {
        const contentDelta = editor.getContents();
        onChange(contentDelta);
      }
    });
  });
</script>

<div id="editor-wrapper">
  <div id="editor"></div>
</div>
