<script lang="ts">
  import { Card, CardDepth, TextField } from "$lib";

  import type { Hst as Histoire } from "@histoire/plugin-svelte";

  export let Hst: Histoire;

  let variant = CardDepth.DropSmall;
</script>

<Hst.Story>
  <div>
    <div style="margin-bottom: 2rem;">
      <Card />
    </div>
    <div style="margin-bottom: 2rem;">
      <Card>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sint
        deleniti ea, ipsa dolores laboriosam enim iste fugiat debitis? Natus
        eaque esse deleniti? Totam perspiciatis earum nihil quaerat eveniet
        veritatis.
      </Card>
    </div>
    <div style="margin-bottom: 2rem;">
      <Card>
        <form action="">
          <TextField label="Username" name="username" value="Hello World" />
          <TextField label="Password" name="password" type="password" value="Hello World" />
        </form>
      </Card>
    </div>
  </div>
  <svelte:fragment slot="controls">
    <Hst.Select
      title="Variant"
      bind:value={variant}
      options={Object.values(CardDepth)}
    />
  </svelte:fragment>
</Hst.Story>
