import { addPoem } from "@/app/poems/actions";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AddPoemForm({ className }: React.ComponentProps<"form">) {
  return (
    <form
      action={addPoem}
      className={cn("grid items-start gap-4 w-1/3", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="title"
          id="title"
          name="title"
          placeholder="Poem Title"
          required={true}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="verses">Verses</Label>
        <Textarea
          id="verses"
          name="verses"
          placeholder="Poem Verses"
          rows={15}
          required={true}
        />
      </div>
      <Button type="submit">Add Poem</Button>
    </form>
  );
}
