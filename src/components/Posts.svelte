<style>
  div {
    font-family: "PT Serif", serif;
  }
  .wrapper {
    margin: auto;
    margin-top: 150px;
  }
  .bar {
    color: #aaa;
    border-bottom: 1px solid rgba(170, 170, 170, 0.5);
    padding-bottom: 5px;
  }
  .new-post {
    cursor: pointer;
    transition: all 0.5s;
  }
  .new-post:hover {
    color: black;
  }
</style>

<script>
  import { navigateTo } from "yrv";
  import { onMount } from "svelte";
  import { posts, randomID } from "../util/poststorage";

  import PostListItem from "./PostListItem.svelte";

  let list = [];

  onMount(async function() {
    list = await posts();
  });

  function goToNewPost() {
    const ID = randomID();
    const path = `/posts/${ID}`;
    navigateTo(path);
  }
</script>

<div class="width-960 wrapper">
  <div class="bar">
    <span class="new-post" on:click="{goToNewPost}">+ New Post</span>
  </div>

  <div class="posts">
    {#each list as post}
      <PostListItem {post} />
    {/each}
  </div>
</div>
