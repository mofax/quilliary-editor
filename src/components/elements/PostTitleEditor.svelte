<style>
  .editor {
    font-family: var(--editor-font-family);
    min-height: 48px;
    line-height: 48px;
    max-width: 100%;
  }

  .editor:focus {
    outline: none;
  }

  .editable {
    display: inline-block;
    min-height: inherit;
    height: inherit;
    width: 80%;
    max-width: 80%;
    outline: none;
  }

  .pull-right {
    float: right;
  }
</style>

<script>
  import { onMount } from "svelte";
  import { emitter } from "../../util/mitt";
  import Button from "./Button.svelte";
  export let onChange;
  export let knownTitle;
  let title = "";

  function handleKeyPress(event) {
    if (typeof onChange === "function") {
      const target = event.target;
      onChange(target.textContent);
    }
  }

  onMount(function() {
    if (typeof knownTitle === "string" && knownTitle !== "") {
      title = knownTitle;
    }
  });

  function onSave() {
    emitter.emit("save-new-post");
  }

  function clear(event) {
    const text = event.target.textContent.trim();
    if (!text.length) {
      event.target.textContent = text;
    }
  }
</script>

<div class="editor">
  <span
    class="editable"
    placeholder="Type your title here..."
    contenteditable="true"
    on:keyup="{handleKeyPress}"
    on:focusout="{clear}"
  >
    {title}
  </span>
  <span class="pull-right">
    <!-- <Button onClick={onSave} text="save" /> -->
  </span>
</div>
