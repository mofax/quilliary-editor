<style>
  .wrapper {
    margin-top: 5rem;
  }

  hr {
    border: none;
  }
</style>

<script>
  import { onMount } from "svelte";
  import { getPost, insertNewPost, updatePost } from "../util/poststorage";

  import PostTitleEditor from "./elements/PostTitleEditor.svelte";
  import PostBodyEditor from "./elements/PostBodyEditor.svelte";

  export let id;
  let localStoragePost = null;

  onMount(async function() {
    const post = await getPost(id);
    if (post) {
      localStoragePost = post;
    }
  });

  async function upsert(title, body) {
    if (localStoragePost == null) {
      await insertNewPost(title, body, id);
      localStoragePost = await getPost(id);
    } else {
      await updatePost(id, title, body);
    }
  }

  function titleChange(newTitle) {
    upsert(newTitle);
  }

  function bodyChange(newBody) {
    upsert(null, newBody);
  }
</script>

<div class="width-960 margin-auto wrapper">
  {#if localStoragePost}
    <PostTitleEditor
      knownTitle="{localStoragePost.title}"
      onChange="{titleChange}"
    />
    <hr />
    <PostBodyEditor
      knownBody="{localStoragePost.body}"
      onChange="{bodyChange}"
    />
  {:else}
    <PostTitleEditor onChange="{titleChange}" />
    <hr />
    <PostBodyEditor onChange="{bodyChange}" />
  {/if}

</div>
