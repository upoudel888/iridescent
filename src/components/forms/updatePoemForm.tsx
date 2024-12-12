import { updatePoem } from "@/app/poems/actions";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { poemType } from "@/models/poem";

export function UpdatePoemForm({
  className,
  poem,
}: React.ComponentProps<"form"> & { poem: poemType }) {
  return (
    <form
      action={updatePoem}
      className={cn("grid items-start gap-4", className)}
    >
      <input type="hidden" name="id" value={poem.id} />
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="title"
          id="title"
          name="title"
          defaultValue={poem.title}
          required={true}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="verses">Verses</Label>
        <Textarea
          id="verses"
          name="verses"
          defaultValue={poem.verses}
          rows={15}
          required={true}
        />
      </div>
      <Button type="submit">Edit Poem</Button>
    </form>
  );
}
