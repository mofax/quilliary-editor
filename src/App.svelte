<script>
  import { Router, Route } from "yrv";

  import NotFound from "./components/NotFound.svelte";
  import Posts from "./components/Posts.svelte";
  import PostEditor from "./components/PostEditor.svelte";
</script>

<div>
  <Router>
    <Route exact path="/">
      <Posts />
    </Route>

    <Route exact path="/posts/:id" let:router>
      <PostEditor id="{router.params.id}" />
    </Route>
  </Router>
</div>
