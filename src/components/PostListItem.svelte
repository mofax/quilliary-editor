<style>
  a {
    display: block;
    color: black;
    font-size: 1.2rem;
    padding: 10px 10px 0 0;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .last-updated {
    color: grey;
    font-size: 0.8rem;
    font-family: var(--editor-font-family);
  }
</style>

<script>
  import { navigateTo } from "yrv";
  import * as timeago from "timeago.js";
  export let post;

  function editPost(event) {
    event.preventDefault();
    navigateTo(`/posts/${post.id}`);
  }
</script>

<div>
  <p>
    <a href="/#" on:click="{editPost}">{post.title}</a>
    <span class="last-updated">
      updated: {timeago.format(post.lastUpdated)}
    </span>
  </p>
</div>
